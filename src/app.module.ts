import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: "the-movie-film",
      useFactory: async (configService: ConfigService) => ({
        uri: process.env.MONGO_DATABASE,
      }),
      inject: [ConfigService],
    }),
    // MongooseModule.forRoot("mongodb://adminIT:CC26696736153F43F32C9B8FFF524@ec2-18-139-53-51.ap-southeast-1.compute.amazonaws.com:27597/rrdb_dev?authSource=admin", { useFindAndModify: false }),
    // ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
