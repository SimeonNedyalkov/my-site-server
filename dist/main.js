"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const databaseConfig_1 = require("./config/databaseConfig");
const PORT = 8888;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    console.log(`App running on port: ${PORT}`);
    await databaseConfig_1.default.databaseConfig();
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map