
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Especie } from '../especie.entity.js';


@Injectable()
export class EspecieRepository {
  constructor(
    @InjectRepository(Especie)
    private repositorio: Repository<Especie>,
  ) {}

  listar() {
    return this.repositorio.find();
  }

  buscarPorId(id: number) {
    return this.repositorio.findOneBy({ id });
  }

  cadastrar(dados: Partial<Especie>) {
    const especie = this.repositorio.create(dados);
    return this.repositorio.save(especie);
  }

  excluir(id: number) {
    return this.repositorio.delete(id);
  }
}
