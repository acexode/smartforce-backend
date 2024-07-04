import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { CommandCategoryEntity } from '@entities/commandCategory.entity';
import { HttpException } from '@/exceptions/httpException';
import { CommandCategory } from '@entities/commandCategory.entity';

@Service()
@EntityRepository()
export class CommandCategoryService extends Repository<CommandCategoryEntity> {
  public async findAllCommandCategory(): Promise<CommandCategory[]> {
    const commandCategory: CommandCategory[] = await CommandCategoryEntity.find();
    return commandCategory;
  }

  public async findCommandCategoryById(commandCategoryId: number): Promise<CommandCategory> {
    const findCommandCategory: CommandCategory = await CommandCategoryEntity.findOne({ where: { id: commandCategoryId } });
    if (!findCommandCategory) throw new HttpException(409, "CommandCategory doesn't exist");

    return findCommandCategory;
  }

  public async createCommandCategory(commandCategoryData: CommandCategory): Promise<CommandCategory> {
    const createCommandCategoryData: CommandCategory = await CommandCategoryEntity.create(commandCategoryData).save();
    return createCommandCategoryData;
  }

  public async updateCommandCategory(commandCategoryId: number, commandCategoryData: CommandCategory): Promise<CommandCategory> {
    const findCommandCategory: CommandCategory = await CommandCategoryEntity.findOne({ where: { Id: commandCategoryId } });
    if (!findCommandCategory) throw new HttpException(409, "CommandCategory doesn't exist");

    await CommandCategoryEntity.update(commandCategoryId, commandCategoryData);

    const updateCommandCategory: CommandCategory = await CommandCategoryEntity.findOne({ where: { Id: commandCategoryId } });
    return updateCommandCategory;
  }

  public async deleteCommandCategory(commandCategoryId: number): Promise<CommandCategory> {
    const findCommandCategory: CommandCategory = await CommandCategoryEntity.findOne({ where: { Id: commandCategoryId } });
    if (!findCommandCategory) throw new HttpException(409, "CommandCategory doesn't exist");

    await CommandCategoryEntity.delete({ Id: commandCategoryId });
    return findCommandCategory;
  }
}
