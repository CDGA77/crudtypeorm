import { IsBoolean, IsString } from 'class-validator';

export class CreateMarcaDto {
  @IsString()
  marca: string;
  @IsBoolean()
  isgood: boolean;
}
