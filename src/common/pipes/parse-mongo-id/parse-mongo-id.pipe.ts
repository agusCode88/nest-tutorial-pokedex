import { ArgumentMetadata, BadGatewayException, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

// Los pipes transforman la data
@Injectable()
export class ParseMongoIdPipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {
    
    console.log({value,metadata});
    if( !isValidObjectId(value )){
      throw new BadRequestException(`${value} is not a valid MongoID`);
    }
    return value.toUpperCase();
  }

}
