const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo List API',
      version: '1.0.0',
      description: 'A REST API for managing todos with user authentication using JWT and MongoDB Atlas.',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Local server',
      },
      {
        url: 'https://todo-api.vercel.app', // Replace with your Vercel URL after deployment
        description: 'Production server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/*.js'], // Scans routes folder for Swagger comments
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;