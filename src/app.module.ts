import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // адреса вашої БД
      port: 5432,        // стандартний порт PostgreSQL
      username: 'postgres', // ваш логін PostgreSQL
      password: 'postgres', // ваш пароль PostgreSQL
      database: 'todolist',       // назва вашої БД
      schema: "todolist_schema",
      synchronize: true, // автоматичне оновлення таблиць (тільки для розробки!)
      autoLoadEntities: true,
    }),
    TasksModule,
    UsersModule,
    AuthModule, // наш модуль завдань
  ],
})
export class AppModule {}
