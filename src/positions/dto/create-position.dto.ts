import { isNumber, IsPositive, Length, Matches, Max } from 'class-validator';

export class CreatePositionDto {

    lat: number;

    lon: number;

    timestamp: Date;

}
