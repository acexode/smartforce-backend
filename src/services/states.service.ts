import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { HttpException } from '@/exceptions/httpException';

import { StateEntity } from '@/entities/states.entity';
import { States } from '@/interfaces/statecommand.interface';

@Service()
@EntityRepository()
export class StateService extends Repository<StateEntity> {
  public async findAllStates(): Promise<States[]> {
    const states: States[] = await StateEntity.find();
    return states;
  }

  public async createState(stateData: States): Promise<States> {
    const createdState: States = await StateEntity.create(stateData).save();
    return createdState;
  }
}
