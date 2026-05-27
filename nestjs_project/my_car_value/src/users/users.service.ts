import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }

  findAll(): Promise<User[]> {
    return this.repo.find();
  }
  
  find(email: string){
    return this.repo.find({ where: { email } });
  }

  findOne(id: number){
    if (!id) {
      return null;
    }
    return this.repo.findOne({where: {id}})
  }

  async update(id: number, attrs: Partial<User>){
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException({message: "User Not Found"})
    }
    Object.assign(user, attrs); // built in method
    return this.repo.save(user)
  }

  async remove(id: number){
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException({message: "User Not Found"})
    }
    return this.repo.remove(user)
  }
}

// const usersService = new UsersService({} as any);
// usersService.update(1, {email: "sahare1@gmail.com"})