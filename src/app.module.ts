import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { join } from 'path'; // Esto ya viene en node
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';



@Module({
  imports: [
    ServeStaticModule.forRoot({
    rootPath: join(__dirname,'..','public'),
    }),

    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),

    PokemonModule,

    CommonModule,

    SeedModule
  ],

})
export class AppModule {}
