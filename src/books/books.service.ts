import { Injectable } from '@nestjs/common';
import { Book } from '../common/interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [];

  getAllBooks(): Book[] {
    return this.books;
  }

  getBookById(id: string): Book {
    return this.books.find(book => book.id === id);
  }

  createBook(createBookDto: CreateBookDto): Book {
    const newBook: Book = {
      id: (this.books.length + 1).toString(), 
      ...createBookDto,
    };
    this.books.push(newBook);
    return newBook;
  }

  updateBook(id: string, updateBookDto: CreateBookDto): Book {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      const updatedBook: Book = {
        id,
        ...updateBookDto,
      };
      this.books[index] = updatedBook;
      return updatedBook;
    }
    return undefined;
  }

  deleteBook(id: string): Book {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      const deletedBook = this.books.splice(index, 1)[0];
      return deletedBook;
    }
    return undefined;
  }
}