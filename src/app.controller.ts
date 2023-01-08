import { Controller, Get, Res } from '@nestjs/common';


@Controller()
export class AppController {
  @Get()
  async renderIndex(@Res() res) {
    res.render('index');
  }
}



