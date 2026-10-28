
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pet } from './pet.entity.js';

@Entity('tutores')
export class Tutor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  nome: string;

  @Column({ type: 'varchar', length: 14, unique: true })
  cpf: string;

  @Column({ type: 'varchar', length: 150 })
  email: string;

  @Column({ type: 'varchar', length: 20 })
  telefone: string;

  @Column({ type: 'varchar', length: 255 })
  endereco: string;

  @Column({ type: 'boolean', default: true })
  ativo: boolean;

  @OneToMany(() => Pet, (pet) => pet.tutor)
  pets: Pet[];
}
