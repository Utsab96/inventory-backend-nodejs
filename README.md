E:.
│   .env
│   .env.example
│   .gitignore
│   docker-compose.yml
│   Dockerfile
│   package.json
│   README.md
│   swagger.yaml
│
├───scripts
│       seed.js
│
├───src
│   │   app.js
│   │   server.js
│   │
│   ├───config
│   │       db.js
│   │       env.js
│   │       index.js
│   │
│   ├───middlewares
│   │       auth.middleware.js
│   │       error.middleware.js
│   │       logger.middleware.js
│   │
│   ├───modules
│   │   └───inventory
│   │           inventory.controller.js
│   │           inventory.model.js
│   │           inventory.repository.js
│   │           inventory.routes.js
│   │           inventory.service.js
│   │           inventory.validation.js
│   │
│   └───utils
│           ApiError.js
│           ApiResponse.js
│           logger.js
│
└───tests
        inventory.test.js

