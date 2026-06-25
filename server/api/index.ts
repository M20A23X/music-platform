import express from 'express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module';
import type { VercelRequest, VercelResponse } from '@vercel/node';

let cachedExpressApp: express.Express | null = null;

async function bootstrap() {
  if (cachedExpressApp) return cachedExpressApp;

  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  const app = await NestFactory.create(AppModule, adapter, { logger: false });
  app.enableCors(); // включите при необходимости параметры origin
  await app.init();
  cachedExpressApp = expressApp;
  return cachedExpressApp;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const app = await bootstrap();
  app(req as any, res as any);
}