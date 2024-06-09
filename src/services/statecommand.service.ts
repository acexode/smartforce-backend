import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { HttpException } from '@/exceptions/httpException';
import { StateCommandEntity } from '@/entities/statecommand.entity';
import { StateCommand } from '@/interfaces/statecommand.interface';

@Service()
@EntityRepository()
export class StateCommandService extends Repository<StateCommandEntity> {
  public async findAllStateCommands(): Promise<StateCommand[]> {
    const stateCommands: StateCommand[] = await StateCommandEntity.find();
    return stateCommands;
  }

  public async findStateCommandById(stateCommandId: number): Promise<StateCommand> {
    const findStateCommand: StateCommand = await StateCommandEntity.findOne({ where: { id: stateCommandId } });
    if (!findStateCommand) throw new HttpException(409, "State Command doesn't exist");

    return findStateCommand;
  }

  public async createStateCommand(stateCommandData: StateCommand): Promise<StateCommand> {
    const createStateCommandData: StateCommand = await StateCommandEntity.create(stateCommandData).save();
    return createStateCommandData;
  }

  public async updateStateCommand(stateCommandId: number, stateCommandData: StateCommand): Promise<StateCommand> {
    const findStateCommand: StateCommand = await StateCommandEntity.findOne({ where: { id: stateCommandId } });
    if (!findStateCommand) throw new HttpException(409, "State Command doesn't exist");

    await StateCommandEntity.update(stateCommandId, stateCommandData);

    const updateStateCommand: StateCommand = await StateCommandEntity.findOne({ where: { id: stateCommandId } });
    return updateStateCommand;
  }

  public async deleteStateCommand(stateCommandId: number): Promise<StateCommand> {
    const findStateCommand: StateCommand = await StateCommandEntity.findOne({ where: { id: stateCommandId } });
    if (!findStateCommand) throw new HttpException(409, "State Command doesn't exist");

    await StateCommandEntity.delete({ id: stateCommandId });
    return findStateCommand;
  }
}
