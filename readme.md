# NodeJSRestAPI

## What this project contains

- Express app with routes for `GET /`, `GET /users`, `GET /todos`, and `GET /todo/{id}`
- Swagger UI documentation available at `http://localhost:9000/api-docs`
- Generated OpenAPI spec files in both JSON and YAML formats

## Existing documentation workflow

### Dynamic docs in the app

The application generates OpenAPI documentation dynamically from route annotations.

- `swagger.js` builds the OpenAPI spec at runtime
- route files under `routes/` use `@openapi` comments
- Swagger UI is mounted in `app.js` at `/api-docs`

### Static export files

To create reusable documentation files, the project provides a generator script:

```bash
npm run generate-docs
```

This produces:

- `openapi.json`
- `openapi.yaml`

Those files can be shared with others or imported into tools like Postman, SwaggerHub, or API gateways.

## How to add or change endpoints

1. Add or modify the route handler in `routes/*.js`
2. Add or update the `@openapi` annotation comment above the route
3. Rerun:

```bash
npm run generate-docs
```

4. Optionally restart the server and visit `http://localhost:9000/api-docs`

## Example files

- `app.js` — Express app setup and Swagger UI registration
- `swagger.js` — OpenAPI generator configuration for `swagger-jsdoc`
- `scripts/generate-openapi.js` — writes `openapi.json` and `openapi.yaml`

## Notes

- `openapi.json` and `openapi.yaml` are generated from the same route annotations.
- Keep the route comments up to date so the exported docs reflect the API implementation.
