import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum TaskStatus {
  ABERTO = 'aberto',
  FAZENDO = 'fazendo',
  FINALIZADO = 'finalizado',
}

@Entity()
export class Task {
  @ApiProperty({ description: 'Identificador da tarefa', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Titulo legal',
    example: 'Comprar leite',
  })
  @Column()
  title: string;

  @ApiProperty({
    description: 'Detalhamento da tarefa',
    example: 'Comprar leite?',
  })
  @Column()
  description: string;

  @ApiProperty({
    description: 'Status atual da tarefa',
    enum: TaskStatus,
    default: TaskStatus.ABERTO,
    example: TaskStatus.ABERTO,
  })
  @Column({
    type: 'text',
    enum: TaskStatus,
    default: TaskStatus.ABERTO,
  })
  status: TaskStatus;

  @ApiProperty({
    description: 'Data de criacao da tarefa',
    type: 'string',
    format: 'date-time',
    example: '2025-01-15T12:34:56.000Z',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description: 'Data da ultima atualizacao da tarefa',
    type: 'string',
    format: 'date-time',
    example: '2025-01-16T09:20:00.000Z',
  })
  @UpdateDateColumn()
  updatedAt: Date;
}
