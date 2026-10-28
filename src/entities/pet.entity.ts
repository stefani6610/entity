
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Tutor } from './tutor.entity.js';
import { Raca } from './raca.entity.js';
import { Especie } from './especie.entity.js';

@Entity('pets')
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ type: 'date' })
  dataNascimento: Date;

  @Column()
  sexo: string;

  @Column({ type: 'float' })
  peso: number;

  @Column()
  cor: string;

  @Column({ default: false })
  castrado: boolean;

  @Column({ default: true })
  ativo: boolean;

  @ManyToOne(() => Tutor, (tutor) => tutor.pets)
  tutor: Tutor;

  @ManyToOne(() => Raca, (raca) => raca.pets)
  raca: Raca;

  @ManyToOne(() => Especie, (especie) => especie.pets)
  especie: Especie;
}
