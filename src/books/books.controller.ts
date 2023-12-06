import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from '../common/interfaces/book.interface';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  getBookById(@Param('id') id: string): Book {
    return this.bookService.getBookById(id);
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Book {
    return this.bookService.createBook(createBookDto);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() updateBookDto: CreateBookDto): Book {
    return this.bookService.updateBook(id, updateBookDto);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): Book {
    return this.bookService.deleteBook(id);
  }
}