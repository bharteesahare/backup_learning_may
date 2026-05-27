import { Controller, Get, Post } from "@nestjs/common";

@Controller()
export class TasksController{
    @Get()
    getAll(){}

    @Get()
    getOne(){}

    @Post()
    create(){}
}