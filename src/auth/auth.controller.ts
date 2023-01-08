import { Controller, Get, Req, UseGuards , Res} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';


@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService,private configService: ConfigService) {}

  @Get()
  async login(@Req() req: Request) {
    const clientId = this.configService.get<string>('GITHUB_CLIENT_ID');
    return req.res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=public_repo,user,write:contents`);
    }

  @Get('callback')
  @UseGuards(AuthGuard('github'))
  async authCallback(@Req() req, @Res() res) {
    try {
      const user = req.user;
      const payload = { profile:user.profile , accessToken: user.accessToken , scopes:['public_repo','user'] };
      const accessToken = this.jwtService.sign(payload);
      res.redirect(`/?id=${accessToken}`);
    } catch (error) {
      res.redirect('/auth');
    }
  }
}





