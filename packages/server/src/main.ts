import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const HOST = process.env.APP_HOST;
const PORT = +process.env.APP_PORT;
const CLIENT_URL = process.env.CLIENT_URL;

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule);

	await app.listen(PORT, HOST);
};
bootstrap();
