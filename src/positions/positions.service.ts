import { Injectable } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';

@Injectable()
export class PositionsService {
  positions = {}; // simmulates a DB
  autoIncrement: number = 0; // simmulates a DB

  create(createPositionDto: CreatePositionDto) {
    const position = {
      ...createPositionDto,
      id: this.autoIncrement++,
    };
    this.positions[position.id] = position;
    return position;
  }

  findAll(page: number) {
    const start = (page - 1) * 20;
    const end = start + 20;
    const position = Object.values(this.positions);
    const slicedpositions = {
      ... position.slice(start, end),
      total: position.length,
    };

    return slicedpositions;
  }

  findOne(id: number) {
    return `This action returns a #${id} position`;
  }

  update(id: number, updatePositionDto: UpdatePositionDto) {
    return `This action updates a #${id} position`;
  }

  remove(id: number) {
    return `This action removes a #${id} position`;
  }
}
