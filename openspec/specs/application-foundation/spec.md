# Application foundation

## Purpose
Describe the minimal, currently implemented development shell. This is infrastructure behavior, not a statement of the future product domain.

## Requirements

### Requirement: BASE-001 Placeholder home
The application SHALL serve a placeholder HTML home page identifying GetViaMe without presenting unimplemented product functionality.

#### Scenario: Open home
- **WHEN** a client sends GET /
- **THEN** the response is HTTP 200 with HTML identifying GetViaMe

### Requirement: BASE-002 Health status
The application SHALL expose a process health endpoint returning a machine-readable status. This endpoint does not claim readiness of future dependencies.

#### Scenario: Check process health
- **WHEN** a client sends GET /health
- **THEN** the response is HTTP 200 with JSON containing status equal to ok

### Requirement: BASE-003 Unsupported requests
The application SHALL reject unrecognized routes with HTTP 404 and unsupported methods on known routes with HTTP 405.

#### Scenario: Unrecognized route
- **WHEN** a client sends GET /unknown
- **THEN** the response is HTTP 404

#### Scenario: Unsupported method
- **WHEN** a client sends POST /health
- **THEN** the response is HTTP 405 with Allow set to GET

#### Scenario: Unsupported home method
- **WHEN** a client sends POST /
- **THEN** the response is HTTP 405
