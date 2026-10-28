
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Especie } from './especie.entity.js';

@Entity('origens_especie')
export class OrigemEspecie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  continente: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  pais: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  regiao: string | null;

  @Column({ type: 'text', nullable: true })
  habitat: string | null;

  @Column({ type: 'boolean', default: true })
  ativo: boolean;

  @OneToMany(() => Especie, (especie) => especie.origem)
  especies: Especie[];
}
