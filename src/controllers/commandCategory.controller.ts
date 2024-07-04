import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { CommandCategory } from '@entities/commandCategory.entity';
import { CommandCategoryService } from '@services/commandCategory.service';

export class CommandCategoryController {
  public commandCategoryService = Container.get(CommandCategoryService);

  public getAllFormation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllCommandCategoryData: CommandCategory[] = await this.commandCategoryService.findAllFormation();
      res.status(200).json({ data: findAllCommandCategoryData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
  public getCommandCategories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllCommandCategoryData: CommandCategory[] = await this.commandCategoryService.findAllCommandCategory();
      res.status(200).json({ data: findAllCommandCategoryData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCommandCategoryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const commandCategoryId = Number(req.params.id);
      const findOneCommandCategoryData: CommandCategory = await this.commandCategoryService.findCommandCategoryById(commandCategoryId);
      res.status(200).json({ data: findOneCommandCategoryData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCommandCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const commandCategoryData: CommandCategory = req.body;
      const createCommandCategoryData: CommandCategory = await this.commandCategoryService.createCommandCategory(commandCategoryData);
      res.status(201).json({ data: createCommandCategoryData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateCommandCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const commandCategoryId = Number(req.params.id);
      const commandCategoryData: CommandCategory = req.body;
      const updateCommandCategoryData: CommandCategory = await this.commandCategoryService.updateCommandCategory(
        commandCategoryId,
        commandCategoryData,
      );
      res.status(200).json({ data: updateCommandCategoryData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteCommandCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const commandCategoryId = Number(req.params.id);
      const deleteCommandCategoryData: CommandCategory = await this.commandCategoryService.deleteCommandCategory(commandCategoryId);
      res.status(200).json({ data: deleteCommandCategoryData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
