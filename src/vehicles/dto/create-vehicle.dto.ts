import { IsPositive, Length, Matches, Max } from 'class-validator';

export class CreateVehicleDto {
  @Length(1, 20)
  brand: string;
  
  @Length(1, 20)
  model: string;

  plate: string;
  
  @IsPositive()
  @Max(1000)
  maxAutonomyKilometres: number;
  
  @Length(1, 20)
  color: string;
}
