# Verification Checklist — Genuine Information Required Before Publication

This website ships with **demonstration content** clearly flagged with `placeholder: true` and rendered with `data-placeholder` attributes. Nothing below is verified company information and must be replaced before public use.

## Contact & Company Identity
- [ ] **Legal name** — Register correct legal entity name and replace `site.legalName`
- [ ] **Head office address** — Replace with verified address; remove `demonstration` flags
- [ ] **Phone number** — Replace display value with real number. Keep `tel:+2349040447548` or update both to match
- [ ] **Email address** — Replace display value with real corporate email. Keep `mailto:emperormarktech@gmail.com` or update both
- [ ] **Regional offices** — Replace Port Harcourt and any others with verified offices
- [ ] **Website URL** — Set correct `site.baseUrl`

## People
- [ ] **Leadership** — Replace placeholder names, roles and biographies with verified personnel
- [ ] **Staff** — Add real team if required

## Certifications & Standards
- [ ] **ISO 9001** — Only publish if certificate exists. Include issuing body, scope, certificate number, expiry
- [ ] **ISO 14001** — Only publish if certificate exists
- [ ] **ISO 45001** — Only publish if certificate exists
- [ ] **Other certifications** — Add only verified certifications with full details

## Projects
- [ ] **Real projects** — Replace demonstration case studies with verified projects, or remove them entirely
- [ ] **Client references** — Only publish with written permission
- [ ] **Testimonials** — Only publish with written permission and exact wording

## Clients & Logos
- [ ] **Client logos** — Written permission required before displaying any operator/client logos
- [ ] **Client list** — Only list clients with permission

## Documents
- [ ] **HSE Policy PDF** — Review `public/downloads/corvex-hse-policy.pdf` against actual policy
- [ ] **Capability Statement PDF** — Review against actual capabilities
- [ ] **Quality Policy PDF** — Review against actual policy
- [ ] Any other documents — Verify before publishing

## Legal
- [ ] **Privacy Policy** — Have a qualified person review `/legal/privacy-policy`
- [ ] **Terms of Service** — Have a qualified person review `/legal/terms`
- [ ] **Cookie policy** — Review against actual tracking (currently none used)

## Technical
- [ ] **Domain** — Deploy to correct domain and update `site.baseUrl`, canonical tags, sitemap
- [ ] **Analytics** — Add only if consent-compliant
- [ ] **Contact routing** — Replace mailto with real CRM/mail endpoint if needed
- [ ] **Maps** — Replace placeholder with real location

## Search for remaining placeholders
Run: `grep -rn "data-placeholder\|PLACEHOLDER\|demonstration"` in `src/` to find anything still flagged.
