import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  // Отримати всі завдання
  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  // Отримати завдання за ID
  findOne(id: number): Promise<Task> {
    return this.taskRepository.findOneBy({ id });
  }

  // Створити нове завдання
  create(task: Partial<Task>): Promise<Task> {
    const newTask = this.taskRepository.create(task);
    return this.taskRepository.save(newTask);
  }

  // Оновити завдання
  async update(id: number, task: Partial<Task>): Promise<Task> {
    await this.taskRepository.update(id, task);
    return this.taskRepository.findOneBy({ id });
  }

  // Видалити завдання
  async delete(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
