import { Injectable } from '@nestjs/common';
import { StateSchema } from '../../schema/state.schema';
import { StateEntity } from '@/core/state/domain/entities/state.entity';

@Injectable()
export class StateMapper {
  static toEntity(schema: StateSchema): StateEntity {
    return new StateEntity({
      id: schema.id,
      name: schema.name,
      uf: schema.uf,
    });
  }

  static toSchema(entity: StateEntity): StateSchema {
    return StateSchema.with({
      id: entity.id,
      name: entity.name,
      uf: entity.uf,
    });
  }
}
