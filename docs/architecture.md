# Architecture

This training lab uses a simplified captive portal model.

## High-level flow

1. A client device joins the Wi‑Fi network
2. The network places the device in a limited-access state
3. The user attempts to browse to a page
4. The network redirects the request to the captive portal
5. The user views the login or welcome page
6. The user submits a form or acknowledgement
7. The back-end or network policy engine decides whether to allow broader access
8. The user sees a status, redirect, or error page

## Main components

### Client device
A phone, tablet, or laptop used by the visitor.

### Wireless network and gateway
The infrastructure that connects the user and enforces pre-authentication restrictions.

### Captive portal pages
The HTML pages that guide the user through login, status, logout, and error states.

### Data store
A training-only concept used for sample member records, session data, or logs.

### Admin or operations process
The people and procedures responsible for support, review, and updates.

## Simplified training boundaries

This repository focuses on documentation and front-end training artifacts. It does not include:

- production authentication logic
- real billing systems
- live router configuration
- real identity verification
- full monitoring or logging systems

## Why the disciplines connect

- Development affects usability and accessibility
- Data design affects privacy and reporting
- Security affects trust and misuse prevention
- Networking affects how redirect and access control behave
