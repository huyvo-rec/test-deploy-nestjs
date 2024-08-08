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
      connectionName: "test",
      useFactory: async (configService: ConfigService) => ({
        uri: "mongodb+srv://19521641:19521641@the-movie-film.yiwcjtd.mongodb.net/?retryWrites=true&w=majority",
      }),
      inject: [ConfigService],
    }),
    // MongooseModule.forRoot("mongodb+srv://19521641:19521641@the-movie-film.yiwcjtd.mongodb.net/?retryWrites=true&w=majority", { useFindAndModify: false }),
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
