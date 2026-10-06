# VLAN Plan

This is a training example, not a production configuration.

## Example VLAN roles

- **VLAN 10** — infrastructure and management
- **VLAN 20** — captive portal pre-auth clients
- **VLAN 30** — post-auth community access
- **VLAN 40** — admin or staff access

## Planning questions

- Which VLAN should unauthenticated users start in?
- What destinations should be allowed from the pre-auth VLAN?
- How is a user moved from pre-auth to post-auth access?
- What logging or monitoring would operators need?
