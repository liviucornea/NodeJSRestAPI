const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');
const packageJson = require('./package.json');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'NodeJSRestAPI',
      version: packageJson.version || '1.0.0',
      description: 'Swagger documentation for the Express NodeJS REST API',
    },
    servers: [
      {
        url: 'http://localhost:9000',
        description: 'Local development server',
      },
    ],
    components: {
      schemas: {
        Todo: {
          type: 'object',
          properties: {
            userId: { type: 'integer' },
            id: { type: 'integer' },
            title: { type: 'string' },
            completed: { type: 'boolean' },
          },
          example: {
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
          },
        },
        User: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            username: { type: 'string' },
            email: { type: 'string' },
          },
          example: {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
          },
        },
      },
    },
  },
  apis: [path.join(__dirname, 'routes', '*.js')],
};

module.exports = swaggerJsDoc(swaggerOptions);
