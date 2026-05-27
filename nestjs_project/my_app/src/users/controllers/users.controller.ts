import { Body, Controller, Get, Param, Post} from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { UsersService } from "../users.service";

@Controller('/users')
export class UsersController{

    constructor(private readonly usersService: UsersService) {}
    @Get()
    getAll(){ 
        const users = this.usersService.findAll();
        return {
            message: 'User fetched successfully',
            data: users,
        };
    }

    @Get(':id')
    getOne(@Param('id') id: string){
        const user = this.usersService.findOne(id);
        return {
            message: 'User Found',
            data: user
        }
    }

    @Post()
    create(@Body() dto: CreateUserDto){
        const user = this.usersService.create(dto);
        return {
            message: "User created successfully",
            data: user
        }
    }

}