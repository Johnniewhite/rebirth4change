# Rebirth4Change deployment

## Existing production environment (verified 8 November 2026)

- Repository: Johnniewhite/rebirth4change. Content refresh branch: community-content-refresh.
- Domain: https://rebirth4change.org (also www.rebirth4change.org).
- Host: Teacch Server, accessed with the existing ssher connection.
- Application: /opt/rebirth4change, managed by rebirth4change.service.
- Build: npm ci --legacy-peer-deps && npm run build.
- Start: node node_modules/next/dist/bin/next start -H 127.0.0.1 -p 3013.
- Nginx proxies HTTPS traffic to 127.0.0.1:3013. Certificates are managed by Certbot.
- No database or uploaded user files are used by this website.

Inspect the live service, proxy configuration, disk and memory before each deployment. Build a fresh release directory from a committed Git archive. Keep the previous application directory as a rollback, switch directories after a successful build, restart the existing service, and verify port 3013 plus public HTTPS. Restore the previous directory and restart if health checks fail. Do not migrate hosting without the owner's instruction.

The contact form opens a mailto draft on the visitor's device; it does not send or store enquiries. WhatsApp is a separate contact option. No payment collection is implemented: donation links lead to an enquiry.

## Content and visual direction

The November 2026 brief is the source for the new nine-item site map, team roles and impact figures. Describe coverage as five states plus FCT. Preserve documentary links; do not invent reports, case histories, repayment terms or eligibility rules. Use the confirmed rebirthforchange.org email domain (which differs from the website domain).

Warm off-white surfaces, deep green text, restrained olive accents, sans-serif body text and serif emphasis support a community-focused editorial design. Photography comes from existing project assets. Missing team portraits use initials. Respect reduced motion, keyboard focus and narrow viewports.
