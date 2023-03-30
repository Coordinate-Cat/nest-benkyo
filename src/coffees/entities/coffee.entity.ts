import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('coffees') // データベースのテーブル名を指定 sql table === 'coffees'
export class Coffee {
  @PrimaryGeneratedColumn() // 主キーを生成する
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true }) // json型のカラムを作成 nullable: true はnullを許容する
  flavors: string[];
}
