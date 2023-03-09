// このファイルは、NestJSのモジュールを表すファイルです。
// モジュールは、NestJSアプリケーションの一部分を表します。
// app.module.tsは、アプリケーションのルートモジュールです。
import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
