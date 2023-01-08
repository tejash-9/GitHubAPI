import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RepoModule } from './repo/repo.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
      }),
    AuthModule,
    RepoModule,
  ],
controllers: [AppController],
})
export class AppModule {}
