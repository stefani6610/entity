
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Tutor } from './entities/tutor.entity.js';
import { Pet } from './entities/pet.entity.js';
import { Raca } from './entities/raca.entity.js';
import { Especie } from './entities/especie.entity.js';
import { OrigemEspecie } from './entities/origem-especie.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'clinica_veterinaria',
      entities: [
        Tutor,
        Pet,
        Raca,
        Especie,
        OrigemEspecie,
      ],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([
      Tutor,
      Pet,
      Raca,
      Especie,
      OrigemEspecie,
    ]),
  ]
})
export class AppModule {}
