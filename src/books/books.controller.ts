import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
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
    const book = this.bookService.getBookById(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Book {
    return this.bookService.createBook(createBookDto);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() updateBookDto: CreateBookDto): Book {
    const updatedBook = this.bookService.updateBook(id, updateBookDto);
    if (!updatedBook) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return updatedBook;
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): Book {
    const deletedBook = this.bookService.deleteBook(id);
    if (!deletedBook) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return deletedBook;
  }
}