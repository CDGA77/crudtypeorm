import { PartialType } from '@nestjs/mapped-types';
import { CreateMarcaDto } from './create-marca.dto';
import { IsString } from 'class-validator';

export class UpdateMarcaDto extends PartialType(CreateMarcaDto) {
  @IsString()
  isgood: boolean;
}
