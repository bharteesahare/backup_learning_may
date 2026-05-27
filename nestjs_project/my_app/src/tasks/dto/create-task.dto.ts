import { IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description?: string;

  @IsNotEmpty()
  projectId: string;

  @IsOptional()
  assignedTo?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
