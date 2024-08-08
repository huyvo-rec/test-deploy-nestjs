import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from './schemas/article.schema';
import { ArticleService } from './article.service';
// import { ArticleModuleV2 } from '../articlev2/article.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }]),
    // ArticleModuleV2
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
