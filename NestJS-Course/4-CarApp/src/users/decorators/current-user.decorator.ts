import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    // give the underline request that is coming in to our application
    const request = context.switchToHttp().getRequest();
    return request.CurrentUser;
  },
);
