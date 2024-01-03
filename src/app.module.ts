import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { join } from 'path'; // Esto ya viene en node
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { EnvConfiguration } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validation';



@Module({
  imports: [

    ConfigModule.forRoot({
       load: [ EnvConfiguration ],
       validationSchema: JoiValidationSchema,
    }),
      
    ServeStaticModule.forRoot({
    rootPath: join(__dirname,'..','public'),
    }),

    // URL en la variable de entorno
    MongooseModule.forRoot(process.env.MONGODB,{
      dbName: 'pokemonsdb'
    }),

    PokemonModule,

    CommonModule,

    SeedModule
  ],

})
export class AppModule {

  constructor(){
    console.log(process.env)
  }
  
}
