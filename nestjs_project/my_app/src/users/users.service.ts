import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    const user = this.users.find(u => u.id === Number(id));
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return user;
  }

  create(dto: CreateUserDto): User {
    const user: User = {
        id: this.users.length + 1, // simple auto-increment
        ...dto
    };

    this.users.push(user);
    return user;
    }

}