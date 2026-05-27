import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateProjectDto{
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsNotEmpty()
    description?: string;

    @IsNotEmpty()
    ownerId: string;
}