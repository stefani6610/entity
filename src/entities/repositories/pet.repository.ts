
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pet } from '../pet.entity.js';


@Injectable()
export class PetRepository {
  constructor(
    @InjectRepository(Pet)
    private repositorio: Repository<Pet>,
  ) {}

  listar() {
    return this.repositorio.find();
  }

  buscarPorId(id: number) {
    return this.repositorio.findOneBy({ id });
  }

  cadastrar(dados: Partial<Pet>) {
    const pet = this.repositorio.create(dados);
    return this.repositorio.save(pet);
  }

  excluir(id: number) {
    return this.repositorio.delete(id);
  }
}
