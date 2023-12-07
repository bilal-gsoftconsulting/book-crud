import { Controller, Get, Post, Body, Put, Param, Delete , UseGuards} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from '../common/interfaces/book.interface';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/auth.guard';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Admin)
  getAllBooks(): Book[] {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  @Roles(Role.User)
  getBookById(@Param('id') id: string): Book {
    return this.bookService.getBookById(id);
  }

  @Post()
  @Roles(Role.User)
  createBook(@Body() createBookDto: CreateBookDto): Book {
    return this.bookService.createBook(createBookDto);
  }

  @Put(':id')
  @Roles(Role.User)
  updateBook(@Param('id') id: string, @Body() updateBookDto: CreateBookDto): Book {
    return this.bookService.updateBook(id, updateBookDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  deleteBook(@Param('id') id: string): Book {
    return this.bookService.deleteBook(id);
  }
}