import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '190.147.64.47',
      port: 5431,
      username: 'riwi_user',
      password: 'abcd1234',
      database: 'books_2',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
