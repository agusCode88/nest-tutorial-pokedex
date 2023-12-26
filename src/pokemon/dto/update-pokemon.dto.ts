import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';

// Va a tener todas las propiedas del crear pero seran opcionales al ser un actualizar
export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
