# Security Checklist

Use this checklist to review the training portal.

## Data handling

- [ ] Collect only the minimum data needed for the learning scenario
- [ ] Mark demo data clearly as fake
- [ ] Avoid storing secrets in front-end files

## Forms and input

- [ ] Label all required fields clearly
- [ ] Validate input on the server in real deployments
- [ ] Escape or sanitize untrusted input before display
- [ ] Use secure transport in real deployments

## Sessions and access

- [ ] Define what a successful login means
- [ ] Define timeout or logout behavior
- [ ] Separate learner access from admin access
- [ ] Review how redirect targets are chosen

## Operations

- [ ] Document assumptions and placeholders
- [ ] Review who can modify portal pages
- [ ] Consider audit and incident response needs
