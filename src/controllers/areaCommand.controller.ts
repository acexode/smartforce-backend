import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { AreaCommand } from '@interfaces/areaCommand.interface';
import { AreaCommandService } from '@services/areaCommand.service';

export class AreaCommandController {
  public areaCommandService = Container.get(AreaCommandService);

  public getAreaCommands = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllAreaCommandsData: AreaCommand[] = await this.areaCommandService.findAllAreaCommands();
      res.status(200).json({ data: findAllAreaCommandsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getAreaCommandById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const areaCommandId = Number(req.params.id);
      const findOneAreaCommandData: AreaCommand = await this.areaCommandService.findAreaCommandById(areaCommandId);
      res.status(200).json({ data: findOneAreaCommandData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createAreaCommand = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const areaCommandData: AreaCommand = req.body;
      const createAreaCommandData: AreaCommand = await this.areaCommandService.createAreaCommand(areaCommandData);
      res.status(201).json({ data: createAreaCommandData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateAreaCommand = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const areaCommandId = Number(req.params.id);
      const areaCommandData: AreaCommand = req.body;
      const updateAreaCommandData: AreaCommand = await this.areaCommandService.updateAreaCommand(areaCommandId, areaCommandData);
      res.status(200).json({ data: updateAreaCommandData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteAreaCommand = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const areaCommandId = Number(req.params.id);
      const deleteAreaCommandData: AreaCommand = await this.areaCommandService.deleteAreaCommand(areaCommandId);
      res.status(200).json({ data: deleteAreaCommandData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
