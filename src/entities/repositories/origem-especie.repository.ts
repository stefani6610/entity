
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrigemEspecie } from '../origem-especie.entity.js';

@Injectable()
export class OrigemEspecieRepository {
  constructor(
    @InjectRepository(OrigemEspecie)
    private readonly repositorio: Repository<OrigemEspecie>,
  ) {}

  listar() {
    return this.repositorio.find();
  }

  buscarPorId(id: number) {
    return this.repositorio.findOneBy({ id });
  }

  cadastrar(dados: Partial<OrigemEspecie>) {
    const origem = this.repositorio.create(dados);
    return this.repositorio.save(origem);
  }

  excluir(id: number) {
    return this.repositorio.delete(id);
  }
}
