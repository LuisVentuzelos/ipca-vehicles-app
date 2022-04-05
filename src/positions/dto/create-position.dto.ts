import { IsDate, isDateString, isDecimal, isNotEmpty, isNumber, IsPositive, Length, Matches, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePositionDto {

    @Max(1000)
    lat: number;

    @Max(1000)
    lon: number;

    @IsDate()
    @Type(() => Date)
    timestamp: Date;

}
