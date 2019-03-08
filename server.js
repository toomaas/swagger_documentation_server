const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');
const PORT = 8000;

var options = {
    validatorUrl : null,
    customSiteTitle: "Logs REST API documentation", 
    customCss: `
    .opblock-post#operations-REST-addLogs .try-out__btn { display: none }
    .swagger-ui .topbar { display: none }
    `,
  };

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.listen(PORT, async () => console.log(`swagger documentation server listening on port ${PORT} at /docs`))