import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookController } from '../books/books.controller';

@Module({
  
  providers: [BooksService],
  controllers: [BookController]
})
export class BooksModule {}
