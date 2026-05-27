import { Body, Controller, Delete, Get, Param, Post, Query, Patch, Session, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';
import { User } from './user.entity';

@Controller('auth')
// @Serialize(UserDto) // this will apply to all the routes in this controller
@UseInterceptors(CurrentUserInterceptor)
export class UsersController {
    constructor(
        private usersService: UsersService,
        private authService: AuthService
    ){}

    // getting and fetching the Session object
    @Get('/colors/:color')
    setColor(@Param('color') color: string, @Session() session: any){
        session.color = color;
        return session;
    }

    @Get('/colors')
    getColor(@Session() session: any){
        return session.color;
    }

    @Post('/signup')
    async createUser(@Body() body: CreateUserDto, @Session() session: any){
        // this.usersService.create(body.email, body.password);
        const user = await this.authService.signup(body.email, body.password);
        session.userId = user.id;
        return user;
    }

    @Post('/signin')
    async signin(@Body() body: CreateUserDto, @Session() session: any){
        const user = await this.authService.signin(body.email, body.password);
        session.userId = user.id;
        return user;
    }

    // @Get('/whoami')
    // whoAmI(@Session() session: any){
    //     return this.usersService.findOne(session.userId);
    // }

    @Get('/whoami')
    whoAmI(@CurrentUser() user: User){
        return user;
    }

  
    @Post('/signout')
    signOut(@Session() session: any){
        session.userId = null;
    }
     
    @Get('/users')
    async getAll() {
    const users = await this.usersService.findAll();
        return {
            message: 'Users fetched successfully',
            data: users,
        };
    }

    @Get('/:id')
    findUser(@Param('id') id: string){
        return this.usersService.findOne(parseInt(id));
    }

    @Get()
    findAllUsers(@Query('email') email: string){
        return this.usersService.find(email);
    }

    @Delete()
    removeUser(@Param('id') id: string){
        return this.usersService.find(id);
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string,@Body() body: UpdateUserDto){
        return this.usersService.update(parseInt(id), body)
    }
    
}
