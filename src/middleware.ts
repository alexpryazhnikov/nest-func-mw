import { AppService } from "./app.service";

export const Middleware = (service: AppService) => (req: any, res: any, next: () => void) => {
  console.time('Request-response time');
  console.log('Hi from middleware');

  res.on(
    'finish',
    () => console.timeEnd(`Request-response time and message from service ${service.getHello()}`)
  );

  next();
}
