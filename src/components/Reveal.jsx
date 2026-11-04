import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll reveal: fade + 24px rise, 700ms, once, 60ms stagger via `delay`.
 * Disabled entirely under prefers-reduced-motion.
 */
export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
