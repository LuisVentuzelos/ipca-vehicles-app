import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehiclesService {
  vehicles = {}; // simmulates a DB
  autoIncrement: number = 0; // simmulates a DB

  create(createVehicleDto: CreateVehicleDto) {
    const vehicle = {
      ...createVehicleDto,
      id: this.autoIncrement++,
    };
    this.vehicles[vehicle.id] = vehicle;
    return vehicle;
  }

  findAll() {
    return Object.values(this.vehicles);
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicle`;
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return `This action updates a #${id} vehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicle`;
  }
}
