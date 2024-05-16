import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMarcaDto, UpdateMarcaDto } from './dto/index';
import { InjectRepository } from '@nestjs/typeorm';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository(Marca)
    private readonly marcaRepository: Repository<Marca>,
  ) {}

  async create(createMarcaDto: CreateMarcaDto) {
    const marca = this.marcaRepository.create(createMarcaDto);
    return await this.marcaRepository.save(marca);
  }

  async findAll() {
    return await this.marcaRepository.find();
  }

  async findOne(id: number) {
    const marca = this.marcaRepository.findOneBy({ id });
    if (!marca) {
      throw new NotFoundException(`marca with id ${id} not found`);
    }
    return marca;
  }

  async update(id: number, { isgood }: UpdateMarcaDto) {
    const marca = await this.marcaRepository.preload({ id, isgood });
    if (!marca) {
      throw new NotFoundException(`marca with id ${id} not found`);
    }
    return await this.marcaRepository.save(marca);
  }

  async remove(id: number) {
    const marca = await this.marcaRepository.findOneBy({ id });
    if (!marca) {
      throw new NotFoundException(`marca with id ${id} not found`);
    }
    return await this.marcaRepository.remove(marca);
  }
}
