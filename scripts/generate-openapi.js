const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const swaggerSpec = require('../swagger');

const jsonPath = path.join(__dirname, '..', 'openapi.json');
const yamlPath = path.join(__dirname, '..', 'openapi.yaml');

fs.writeFileSync(jsonPath, JSON.stringify(swaggerSpec, null, 2), 'utf8');
fs.writeFileSync(yamlPath, yaml.dump(swaggerSpec, { noRefs: true }), 'utf8');

console.log(`OpenAPI JSON written to ${jsonPath}`);
console.log(`OpenAPI YAML written to ${yamlPath}`);
