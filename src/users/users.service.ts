import { Injectable } from '@nestjs/common';
import { Role } from 'src/enums/role.enum';
// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'u1',
      password: 'u1',
      role: Role.Admin,
    },
    {
      userId: 2,
      username: 'u2',
      password: 'u2',
      role: Role.User,
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}