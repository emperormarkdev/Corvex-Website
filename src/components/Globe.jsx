import { useEffect, useRef, useState } from "react";

/* ─── constants ─────────────────────────────────────────── */
const ORANGE       = "#E3601C";
const ORANGE_DIM   = "rgba(227,96,28,0.35)";
const ORANGE_GLOW  = "rgba(227,96,28,0.12)";
const GRID_COLOR   = "rgba(255,255,255,0.07)";
const DOT_COLOR    = "rgba(255,255,255,0.18)";
const RADIUS       = 0.42;   // fraction of min(W,H)
const AUTO_RPM     = 3;      // degrees / second when idle
const DRAG_DAMPING = 0.93;

/* ─── maths helpers ─────────────────────────────────────── */
function latLngToVec3(lat, lng) {
  const φ = (lat * Math.PI) / 180;
  const λ = (lng * Math.PI) / 180;
  return {
    x: Math.cos(φ) * Math.cos(λ),
    y: Math.sin(φ),
    z: Math.cos(φ) * Math.sin(λ),
  };
}

function rotateY(v, θ) {
  return {
    x:  v.x * Math.cos(θ) + v.z * Math.sin(θ),
    y:  v.y,
    z: -v.x * Math.sin(θ) + v.z * Math.cos(θ),
  };
}

function rotateX(v, θ) {
  return {
    x: v.x,
    y:  v.y * Math.cos(θ) - v.z * Math.sin(θ),
    z:  v.y * Math.sin(θ) + v.z * Math.cos(θ),
  };
}

function project(v, cx, cy, R) {
  return { px: cx + v.x * R, py: cy - v.y * R, visible: v.z > 0 };
}

/* great-circle arc as array of 3D points */
function arcPoints(a, b, steps = 60) {
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const t  = i / steps;
    const x  = a.x * (1 - t) + b.x * t;
    const y  = a.y * (1 - t) + b.y * t;
    const z  = a.z * (1 - t) + b.z * t;
    const len = Math.sqrt(x * x + y * y + z * z);
    pts.push({ x: x / len, y: y / len, z: z / len });
  }
  return pts;
}

/* ─── dotted landmass — approximate continent outlines as lat/lng polygons ── */
/* We draw a dot-grid over the sphere and only show dots inside landmasses.    */
/* Approximate land as a set of lat/lng bounding boxes (fast & no data file).  */
const LAND_BOXES = [
  /* North America */  [-170,-5,  -50,75],
  /* Greenland */      [-57, 60,  -15,84],
  /* South America */  [-82,-55,  -35,15],
  /* Europe */         [-12, 36,   40,72],
  /* Africa */         [-18,-35,   52,37],
  /* West Russia */    [ 30, 50,   60,72],
  /* Siberia */        [ 60, 55,  140,78],
  /* Middle East */    [ 34, 15,   60,42],
  /* South Asia */     [ 60,  5,   95,38],
  /* SE Asia */        [ 95, -8,  142,28],
  /* East Asia */      [ 95, 20,  145,55],
  /* Japan */          [130, 30,  146,46],
  /* Australia */      [113,-43,  154,-10],
  /* NZ */             [166,-47,  178,-34],
  /* Iceland */        [-25, 63,  -13,67],
  /* UK */             [ -8, 50,    2,61],
  /* Scandinavia */    [  5, 55,   32,72],
];

function inLand(lat, lng) {
  for (const [w, s, e, n] of LAND_BOXES) {
    if (lng >= w && lng <= e && lat >= s && lat <= n) return true;
  }
  return false;
}

/* pre-build dot positions on the sphere */
function buildDots(step = 6) {
  const dots = [];
  for (let lat = -90; lat <= 90; lat += step) {
    for (let lng = -180; lng <= 180; lng += step) {
      if (inLand(lat, lng)) {
        dots.push(latLngToVec3(lat, lng));
      }
    }
  }
  return dots;
}

/* ─── component ─────────────────────────────────────────── */
export default function Globe({ locations = [] }) {
  const canvasRef = useRef(null);
  const stateRef  = useRef({
    yaw:    -20 * Math.PI / 180,  // start showing Africa/Atlantic
    pitch:   10 * Math.PI / 180,
    dragVy: 0,
    dragging: false,
    lastX: 0,
    lastY: 0,
    velX:  0,
    velY:  0,
    activeIdx: null,
  });

  const [activeIdx, setActiveIdx] = useState(null);
  const dots    = useRef(buildDots(5));
  const vecs    = useRef(locations.map((l) => latLngToVec3(l.lat, l.lng)));
  const HQ_IDX  = locations.findIndex((l) => l.hq);

  /* arc pairs: each city to HQ */
  const arcPairs = useRef(
    locations.map((_, i) => (i !== HQ_IDX ? arcPoints(vecs.current[HQ_IDX], vecs.current[i]) : null))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx    = canvas.getContext("2d");
    let raf;
    let lastTime = performance.now();

    /* ── pointer events ── */
    function onDown(e) {
      const s = stateRef.current;
      s.dragging = true;
      s.lastX    = e.clientX ?? e.touches?.[0]?.clientX;
      s.lastY    = e.clientY ?? e.touches?.[0]?.clientY;
      s.velX = s.velY = 0;
    }
    function onMove(e) {
      const s   = stateRef.current;
      if (!s.dragging) return;
      const cx  = e.clientX ?? e.touches?.[0]?.clientX;
      const cy  = e.clientY ?? e.touches?.[0]?.clientY;
      const dx  = cx - s.lastX;
      const dy  = cy - s.lastY;
      s.yaw    += dx * 0.005;
      s.pitch  += dy * 0.005;
      s.pitch   = Math.max(-1.3, Math.min(1.3, s.pitch));
      s.velX    = dx;
      s.velY    = dy;
      s.lastX   = cx;
      s.lastY   = cy;
    }
    function onUp() {
      const s   = stateRef.current;
      s.dragging = false;
      s.dragVy   = s.velX;
    }

    canvas.addEventListener("mousedown",  onDown);
    canvas.addEventListener("mousemove",  onMove);
    canvas.addEventListener("mouseup",    onUp);
    canvas.addEventListener("mouseleave", onUp);
    canvas.addEventListener("touchstart", onDown, { passive: true });
    canvas.addEventListener("touchmove",  onMove, { passive: true });
    canvas.addEventListener("touchend",   onUp);

    /* ── render loop ── */
    function draw(now) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      const s   = stateRef.current;
      const W   = canvas.width;
      const H   = canvas.height;
      const cx  = W / 2;
      const cy  = H / 2;
      const R   = Math.min(W, H) * RADIUS;

      /* auto-rotate when idle */
      if (!s.dragging) {
        if (Math.abs(s.dragVy) > 0.2) {
          s.yaw    += s.dragVy * 0.005;
          s.dragVy *= DRAG_DAMPING;
        } else {
          s.yaw += (AUTO_RPM * Math.PI / 180) * dt;
          s.dragVy = 0;
        }
      }

      ctx.clearRect(0, 0, W, H);

      /* ── atmosphere glow ── */
      const atm = ctx.createRadialGradient(cx, cy, R * 0.85, cx, cy, R * 1.3);
      atm.addColorStop(0, "rgba(227,96,28,0.08)");
      atm.addColorStop(0.5, "rgba(227,96,28,0.03)");
      atm.addColorStop(1,   "transparent");
      ctx.fillStyle = atm;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.3, 0, Math.PI * 2);
      ctx.fill();

      /* ── sphere base ── */
      const sph = ctx.createRadialGradient(cx - R * 0.25, cy - R * 0.2, R * 0.05, cx, cy, R);
      sph.addColorStop(0,   "#1a0a06");
      sph.addColorStop(0.6, "#0d0604");
      sph.addColorStop(1,   "#000");
      ctx.fillStyle = sph;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      /* ── graticule lines ── */
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth   = 0.8;

      /* latitude lines every 30° */
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        let first = true;
        for (let lng = -180; lng <= 180; lng += 3) {
          let v = latLngToVec3(lat, lng);
          v = rotateX(rotateY(v, s.yaw), s.pitch);
          const p = project(v, cx, cy, R);
          if (p.visible) {
            first ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py);
            first = false;
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      /* longitude lines every 30° */
      for (let lng = -180; lng < 180; lng += 30) {
        ctx.beginPath();
        let first = true;
        for (let lat = -90; lat <= 90; lat += 3) {
          let v = latLngToVec3(lat, lng);
          v = rotateX(rotateY(v, s.yaw), s.pitch);
          const p = project(v, cx, cy, R);
          if (p.visible) {
            first ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py);
            first = false;
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      /* ── land dots ── */
      dots.current.forEach((raw) => {
        let v = rotateX(rotateY(raw, s.yaw), s.pitch);
        const p = project(v, cx, cy, R);
        if (!p.visible) return;
        ctx.beginPath();
        ctx.arc(p.px, p.py, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = DOT_COLOR;
        ctx.fill();
      });

      /* ── arcs from HQ to each city ── */
      arcPairs.current.forEach((arc, i) => {
        if (!arc) return;
        const isActive = i === activeIdx;

        ctx.beginPath();
        let first = true;
        let anyVisible = false;

        arc.forEach((raw) => {
          let v = rotateX(rotateY(raw, s.yaw), s.pitch);
          const p = project(v, cx, cy, R);
          if (p.visible) {
            anyVisible = true;
            first ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py);
            first = false;
          } else {
            first = true;
          }
        });

        if (!anyVisible) return;

        /* glow pass */
        ctx.strokeStyle = isActive ? "rgba(227,96,28,0.35)" : ORANGE_GLOW;
        ctx.lineWidth   = isActive ? 6 : 4;
        ctx.shadowColor = ORANGE;
        ctx.shadowBlur  = isActive ? 18 : 8;
        ctx.stroke();

        /* crisp pass */
        ctx.beginPath();
        first = true;
        arc.forEach((raw) => {
          let v = rotateX(rotateY(raw, s.yaw), s.pitch);
          const p = project(v, cx, cy, R);
          if (p.visible) {
            first ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py);
            first = false;
          } else { first = true; }
        });
        ctx.strokeStyle = isActive ? ORANGE : ORANGE_DIM;
        ctx.lineWidth   = isActive ? 1.5 : 0.9;
        ctx.shadowBlur  = 0;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      /* ── location pins ── */
      vecs.current.forEach((raw, i) => {
        const loc     = locations[i];
        let v         = rotateX(rotateY(raw, s.yaw), s.pitch);
        const p       = project(v, cx, cy, R);
        if (!p.visible) return;

        const isHQ     = loc.hq;
        const isActive = i === activeIdx;
        const baseR    = isHQ ? 7 : 5;
        const t        = (now % 2400) / 2400;

        /* pulse ring */
        const pulseR = baseR + t * (isHQ ? 14 : 10);
        const pulseA = (1 - t) * (isHQ ? 0.7 : 0.5);
        ctx.beginPath();
        ctx.arc(p.px, p.py, pulseR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(227,96,28,${pulseA})`;
        ctx.lineWidth   = 1;
        ctx.shadowColor = ORANGE;
        ctx.shadowBlur  = isActive ? 20 : 10;
        ctx.stroke();
        ctx.shadowBlur  = 0;

        /* dot */
        ctx.beginPath();
        ctx.arc(p.px, p.py, baseR, 0, Math.PI * 2);
        ctx.fillStyle   = isActive ? "#fff" : ORANGE;
        ctx.shadowColor = ORANGE;
        ctx.shadowBlur  = isActive ? 24 : 14;
        ctx.fill();
        ctx.shadowBlur  = 0;

        /* inner bright dot */
        ctx.beginPath();
        ctx.arc(p.px, p.py, baseR * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();

        /* city label */
        if (isHQ || isActive) {
          ctx.font      = `${isHQ ? 700 : 500} ${isHQ ? 12 : 11}px 'Barlow', sans-serif`;
          ctx.fillStyle = isHQ ? ORANGE : "rgba(255,255,255,0.9)";
          ctx.shadowColor = "rgba(0,0,0,0.9)";
          ctx.shadowBlur  = 6;
          ctx.fillText(loc.city, p.px + baseR + 7, p.py + 4);
          ctx.shadowBlur  = 0;
        }
      });

      /* ── rim highlight ── */
      const rim = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.35, R * 0.6, cx, cy, R);
      rim.addColorStop(0, "transparent");
      rim.addColorStop(0.75, "transparent");
      rim.addColorStop(0.88, "rgba(227,96,28,0.06)");
      rim.addColorStop(1,    "rgba(227,96,28,0.18)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = rim;
      ctx.fill();

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("mousedown",  onDown);
      canvas.removeEventListener("mousemove",  onMove);
      canvas.removeEventListener("mouseup",    onUp);
      canvas.removeEventListener("mouseleave", onUp);
      canvas.removeEventListener("touchstart", onDown);
      canvas.removeEventListener("touchmove",  onMove);
      canvas.removeEventListener("touchend",   onUp);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx]);

  /* resize observer — keep canvas pixel-perfect */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = width  * dpr;
      canvas.height = height * dpr;
      const ctx = canvas.getContext("2d");
      ctx.scale(dpr, dpr);
      canvas.style.width  = width  + "px";
      canvas.style.height = height + "px";
    });
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  /* hit-test click for active city */
  function handleClick(e) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx   = e.clientX - rect.left;
    const my   = e.clientY - rect.top;
    const W    = rect.width;
    const H    = rect.height;
    const cx   = W / 2;
    const cy   = H / 2;
    const R    = Math.min(W, H) * RADIUS;
    const s    = stateRef.current;

    let hit = null;
    vecs.current.forEach((raw, i) => {
      let v = rotateX(rotateY(raw, s.yaw), s.pitch);
      const p = project(v, cx, cy, R);
      if (!p.visible) return;
      const dist = Math.hypot(p.px - mx, p.py - my);
      if (dist < 20) hit = i;
    });
    setActiveIdx(hit === activeIdx ? null : hit);
  }

  return (
    <canvas
      ref={canvasRef}
      onClick={handleClick}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        cursor: "grab",
        touchAction: "none",
      }}
      aria-label="Interactive 3D globe showing Corvex office locations"
    />
  );
}
