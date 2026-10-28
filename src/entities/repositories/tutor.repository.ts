
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tutor } from '../tutor.entity.js';


@Injectable()
export class TutorRepository {
  constructor(
    @InjectRepository(Tutor)
    private repositorio: Repository<Tutor>,
  ) {}

  listar() {
    return this.repositorio.find();
  }

  buscarPorId(id: number) {
    return this.repositorio.findOneBy({ id });
  }

  cadastrar(dados: Partial<Tutor>) {
    const tutor = this.repositorio.create(dados);
    return this.repositorio.save(tutor);
  }

  excluir(id: number) {
    return this.repositorio.delete(id);
  }
}
