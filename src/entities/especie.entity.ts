

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';

import { Pet } from './pet.entity.js';
import { OrigemEspecie } from './origem-especie.entity.js';

@Entity('especies')
export class Especie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nomePopular: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  nomeCientifico: string;

  @Column({ type: 'text', nullable: true })
  descricao: string | null;

  @Column({ type: 'boolean', default: true })
  domestico: boolean;

  @Column({ type: 'boolean', default: true })
  ativo: boolean;

  @OneToMany(() => Pet, (pet) => pet.especie)
  pets: Pet[];

  @ManyToOne(() => OrigemEspecie, (origem) => origem.especies, {
    nullable: true,
  })
  origem: OrigemEspecie | null;
}
