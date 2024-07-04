import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { CommandEntity } from '@entities/command.entity';
import { HttpException } from '@/exceptions/httpException';
import { Command } from '@entities/command.entity';

@Service()
@EntityRepository()
export class CommandService extends Repository<CommandEntity> {
  public async findAllCommand(): Promise<Command[]> {
    const command: Command[] = await CommandEntity.find();
    return command;
  }

  public async findCommandById(commandId: number): Promise<Command> {
    const findCommand: Command = await CommandEntity.findOne({ where: { id: commandId } });
    if (!findCommand) throw new HttpException(409, "Command doesn't exist");

    return findCommand;
  }

  public async createCommand(commandData: Command): Promise<Command> {
    const createCommandData: Command = await CommandEntity.create(commandData).save();
    return createCommandData;
  }

  public async updateCommand(commandId: number, commandData: Command): Promise<Command> {
    const findCommand: Command = await CommandEntity.findOne({ where: { Id: commandId } });
    if (!findCommand) throw new HttpException(409, "Command doesn't exist");

    await CommandEntity.update(commandId, commandData);

    const updateCommand: Command = await CommandEntity.findOne({ where: { Id: commandId } });
    return updateCommand;
  }

  public async deleteCommand(commandId: number): Promise<Command> {
    const findCommand: Command = await CommandEntity.findOne({ where: { Id: commandId } });
    if (!findCommand) throw new HttpException(409, "Command doesn't exist");

    await CommandEntity.delete({ Id: commandId });
    return findCommand;
  }
}
