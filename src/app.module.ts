import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://auth:new2023gsc@cluster0.ykp1jfb.mongodb.net/?retryWrites=true&w=majority')
    
  ,AuthModule],
})
export class AppModule {}
