import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Lista tarefas.', description: 'Retorna todas as tarefas.' })
  @ApiResponse({ status: 200, description: 'Lista retornada.', type: [Task] })
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca tarefa.', description: 'Retorna tarefa por id.' })
  @ApiParam({ name: 'id', description: 'Id da tarefa.' })
  @ApiResponse({ status: 200, description: 'Tarefa retornada.', type: Task })
  @ApiResponse({ status: 404, description: 'Tarefa nao encontrada.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria tarefa.', description: 'Cria nova tarefa.' })
  @ApiBody({ type: CreateTaskDto })
  @ApiResponse({ status: 201, description: 'Tarefa criada.', type: Task })
  @ApiResponse({ status: 400, description: 'Dados invalidos.' })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza tarefa.', description: 'Atualiza tarefa por id.' })
  @ApiParam({ name: 'id', description: 'Id da tarefa.' })
  @ApiBody({ type: UpdateTaskDto })
  @ApiResponse({ status: 200, description: 'Tarefa atualizada.', type: Task })
  @ApiResponse({ status: 404, description: 'Tarefa nao encontrada.' })
  @ApiResponse({ status: 400, description: 'Dados invalidos.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove tarefa.', description: 'Remove tarefa por id.' })
  @ApiParam({ name: 'id', description: 'Id da tarefa.' })
  @ApiResponse({ status: 204, description: 'Tarefa removida.' })
  @ApiResponse({ status: 404, description: 'Tarefa nao encontrada.' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.tasksService.remove(id);
  }
}
