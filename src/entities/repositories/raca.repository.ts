
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Raca } from '../raca.entity.js';


@Injectable()
export class RacaRepository {
  constructor(
    @InjectRepository(Raca)
    private repositorio: Repository<Raca>,
  ) {}

  listar() {
    return this.repositorio.find();
  }

  buscarPorId(id: number) {
    return this.repositorio.findOneBy({ id });
  }

  cadastrar(dados: Partial<Raca>) {
    const raca = this.repositorio.create(dados);
    return this.repositorio.save(raca);
  }

  excluir(id: number) {
    return this.repositorio.delete(id);
  }
}
