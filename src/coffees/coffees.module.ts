// このファイルは、NestJSのモジュールを表すファイルです。
// モジュールは、NestJSアプリケーションの一部分を表します。
// app.module.tsは、アプリケーションのルートモジュールです。
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller'; // コントローラーをインポート
import { CoffeesService } from './coffees.service'; // サービスをインポート
import { Coffee } from './entities/coffee.entity'; // エンティティをインポート

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])], // モジュールにTypeORMの機能を追加
  controllers: [CoffeesController], // コントローラーをモジュールに追加
  providers: [CoffeesService], // サービスをモジュールに追加
})
export class CoffeesModule {}
