import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tasks')
@UseGuards(JwtAuthGuard) // Захищаємо всі ендпоінти         
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  @Post()
  create(@Body() task: Partial<Task>): Promise<Task> {
    return this.tasksService.create(task);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() task: Partial<Task>): Promise<Task> {
    return this.tasksService.update(id, task);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.tasksService.delete(id);
  }
}
