# Threat Model

This simple threat model helps learners ask structured questions.

## Assets

- portal pages
- demo member records
- session state information
- gateway and redirect settings
- admin access paths

## Example threat actors

- curious user bypassing the intended flow
- attacker submitting unexpected input
- unauthorized person attempting admin access
- insider accidentally exposing sensitive information

## Example risks

- collecting too much personal information
- trusting client-side validation alone
- open redirect behavior
- weak separation between user and admin flows
- unclear logout or session expiration behavior

## Example mitigations

- minimize required fields
- validate and sanitize data at trusted boundaries
- use allow-lists for redirects
- protect admin paths with stronger controls
- document timeout and session rules
