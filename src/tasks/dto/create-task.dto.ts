import { IsString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TaskStatus } from '../task.entity';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Titulo',
    example: 'Comprar leite',
    minLength: 3,
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Descricao.',
    example: 'decrever',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiPropertyOptional({
    description: 'Status inicial.',
    enum: TaskStatus,
    default: TaskStatus.ABERTO,
    example: TaskStatus.ABERTO,
  })
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;
}
