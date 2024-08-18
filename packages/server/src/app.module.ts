import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate } from './env.validation';

const appEnv = process.env.NODE_ENV;
const isDev = appEnv === 'development';
const envFilePath = ['.env', `.env.${appEnv}.local`, `.env.${appEnv}`];

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath, validate })],
})
export class AppModule {}
