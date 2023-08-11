import { Controller, Get } from "@nestjs/common";

// decorator: says that this class is going to be a controller
// /app/asdf
@Controller("/app")
export class AppController {
  @Get("/asdf")
  getRootRoute() {
    return "hi there!";
  }

  @Get("/bye")
  getByeThere() {
    return "bye there!";
  }
}
