import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { RepoService } from './repo.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('repos')

export class RepoController {
constructor(private readonly repoService: RepoService) {}

@UseGuards(AuthGuard('jwt'))
@Post()
async createRepo(@Req() req, @Body() body: { repoName: string }) {
    const accessToken = req.user.accessToken;
    const username = req.user.profile.username;
    return this.repoService.createRepo(accessToken, username, body.repoName);
  }


@UseGuards(AuthGuard('jwt'))
@Post('/file')
async createFile(@Req() req, @Body() body: { repoName: string}) {
    const accessToken = req.user.accessToken;
    const username = req.user.profile.username;
    return this.repoService.createFile(accessToken, username, body.repoName);
  }
}