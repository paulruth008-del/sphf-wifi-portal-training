-- Sample schema for training use only
-- This schema is intentionally simplified.

CREATE TABLE members (
  member_id VARCHAR(20) PRIMARY KEY,
  display_name VARCHAR(100) NOT NULL,
  membership_type VARCHAR(50) NOT NULL,
  status VARCHAR(20) NOT NULL,
  created_at DATE NOT NULL
);

CREATE TABLE portal_sessions (
  session_id VARCHAR(36) PRIMARY KEY,
  member_id VARCHAR(20) NOT NULL,
  device_name VARCHAR(100) NOT NULL,
  login_time TIMESTAMP NOT NULL,
  session_state VARCHAR(20) NOT NULL,
  assigned_vlan VARCHAR(30),
  FOREIGN KEY (member_id) REFERENCES members(member_id)
);
