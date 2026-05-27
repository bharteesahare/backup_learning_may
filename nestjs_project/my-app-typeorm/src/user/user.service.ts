import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { BaseExceptionFilter } from '@nestjs/core';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,){}

  // create user
  async create(createUserDto: CreateUserDto): Promise<User> {
    const {email} = createUserDto;

    // check email exist
    const existingUser = await this.userRepository.findOne({
      where: {email},
    });
    if (existingUser){
      throw new BadRequestException({message: 'Email already exist '});
    }

    const newUser = this.userRepository.create(createUserDto);

    return await this.userRepository.save(newUser);
  }

  // read all users
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }


  // read single user
  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({where: {id}});
    if(!user){
      throw new BadRequestException({message: "User Not Found"});
    }
    return user 
  }

  // async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
  //   // const user = await this.findOne(id);
  //  const user =  this.userRepository.findOneBy({ id })
    
  //   const updateUser = this.userRepository.merge(user, {});
  //   return await this.userRepository.save(updateUser)
  // }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    const updatedUser = this.userRepository.merge(user, updateUserDto);
    return this.userRepository.save(updatedUser);
  }


  async remove(id: number): Promise<User> {
    const user = await this.findOne(id)
    if(!user){
      throw new BadRequestException("User Not found");
    }
    return await this.userRepository.remove(user);
  }
}
