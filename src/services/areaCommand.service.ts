import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { AreaCommandEntity } from '@entities/areaCommand.entity';
import { HttpException } from '@/exceptions/httpException';
import { AreaCommand } from '@interfaces/areaCommand.interface';
const fs = require('fs');
const path = require('path');

@Service()
@EntityRepository()
export class AreaCommandService extends Repository<AreaCommandEntity> {
  constructor() {
    super();
    // console.log('hello');

    // Replace 'your_folder_path' with the path to your folder containing JSON files
    // const folderPath = path.join(__dirname, 'states');
    // console.log('directory');
    // fs.readdir(folderPath, (err, files) => {
    //   if (err) {
    //     return console.error('Unable to scan directory: ' + err);
    //   }

    //   const jsonFiles = files.filter(file => path.extname(file).toLowerCase() === '.json');

    //   jsonFiles.forEach(file => {
    //     console.log(file);
    //   });
    // });
  }
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
