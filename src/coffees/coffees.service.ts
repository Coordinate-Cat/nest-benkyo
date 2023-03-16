import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

// NestJSは、クラスに@Injectable()デコレーターを付けることで、
// そのクラスがDIコンテナに登録されることを示す
// DIコンテナは、クラスのインスタンスを作成し、
// そのインスタンスを他のクラスに注入することができる
@Injectable()
// CoffeesServiceはCoffeeエンティティを使用する
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'Buddy Brew',
      brand: 'Buddy Brew',
      flavors: ['vanilla', 'lavender'],
    },
    {
      id: 3,
      name: 'Hazelnut',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'hazelnut'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      // throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }
  // curl -i -X GET "http://localhost:3000/coffees/1"
  // curl -X DELETE "http://localhost:3000/coffees/1"
  // curl -i -X GET "http://localhost:3000/coffees/1"

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update the existing coffee
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
