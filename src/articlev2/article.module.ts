import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema2 } from './schemas/article.schema';
import { ArticleService } from './article.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Testing', schema: ArticleSchema2 }]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModuleV2 {}
