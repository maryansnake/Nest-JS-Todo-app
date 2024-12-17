import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // позначаємо таблицю
export class Task {
  @PrimaryGeneratedColumn() // ID завдання
  id: number;

  @Column() // Назва завдання
  title: string;

  @Column() // Опис завдання
  description: string;

  @Column({ default: false }) // Статус виконання (за замовчуванням - false)
  isCompleted: boolean;
}
