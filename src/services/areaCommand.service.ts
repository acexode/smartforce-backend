import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { AreaCommandEntity } from '@entities/areaCommand.entity';
import { HttpException } from '@/exceptions/httpException';
import { AreaCommand } from '@interfaces/areaCommand.interface';

@Service()
@EntityRepository()
export class AreaCommandService extends Repository<AreaCommandEntity> {
  public async findAllAreaCommands(): Promise<AreaCommand[]> {
    const areaCommands: AreaCommand[] = await AreaCommandEntity.find();
    return areaCommands;
  }

  public async findAreaCommandById(areaCommandId: number): Promise<AreaCommand> {
    const findAreaCommand: AreaCommand = await AreaCommandEntity.findOne({ where: { id: areaCommandId } });
    if (!findAreaCommand) throw new HttpException(409, "Area Command doesn't exist");

    return findAreaCommand;
  }

  public async createAreaCommand(areaCommandData: AreaCommand): Promise<AreaCommand> {
    const createAreaCommandData: AreaCommand = await AreaCommandEntity.create(areaCommandData).save();
    return createAreaCommandData;
  }

  public async updateAreaCommand(areaCommandId: number, areaCommandData: AreaCommand): Promise<AreaCommand> {
    const findAreaCommand: AreaCommand = await AreaCommandEntity.findOne({ where: { id: areaCommandId } });
    if (!findAreaCommand) throw new HttpException(409, "Area Command doesn't exist");

    await AreaCommandEntity.update(areaCommandId, areaCommandData);

    const updateAreaCommand: AreaCommand = await AreaCommandEntity.findOne({ where: { id: areaCommandId } });
    return updateAreaCommand;
  }

  public async deleteAreaCommand(areaCommandId: number): Promise<AreaCommand> {
    const findAreaCommand: AreaCommand = await AreaCommandEntity.findOne({ where: { id: areaCommandId } });
    if (!findAreaCommand) throw new HttpException(409, "Area Command doesn't exist");

    await AreaCommandEntity.delete({ id: areaCommandId });
    return findAreaCommand;
  }
}
