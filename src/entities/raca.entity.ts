
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Pet } from './pet.entity.js';

@Entity('racas')
export class Raca {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  nome: string;

  @Column({ type: 'varchar', length: 10 })
  porte: string;

  @Column({ type: 'text', nullable: true })
  descricao: string | null;

  @Column({ type: 'int', nullable: true })
  expectativaVida: number | null;

  @Column({ type: 'boolean', default: true })
  ativo: boolean;

  @OneToMany(() => Pet, (pet) => pet.raca)
  pets: Pet[];
}

