// このファイルは、CreateCoffeeDto と同じプロパティを持つが、すべてのプロパティがオプショナルになっている
import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from '../create-coffee.dto/create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
