import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Command } from '@entities/command.entity';
import { CommandService } from '@services/command.service';

export class CommandController {
  public commandService = Container.get(CommandService);

  public getAllGeneric = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const body = req.body;
      const findAllCommandCategoryData: Command[] = await this.commandService.findGeneric(body);
      res.status(200).json({ data: findAllCommandCategoryData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getFHQDepartments = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllCommandData: Command[] = await this.commandService.findFHQDepartments();
      res.status(200).json({ data: findAllCommandData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
  public getZonalCommand = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllCommandData: Command[] = await this.commandService.findZonalCommand();
      res.status(200).json({ data: findAllCommandData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
  public getStateCommands = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllCommandData: Command[] = await this.commandService.findStateCommands();
      res.status(200).json({ data: findAllCommandData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
  public getAreaCommands = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllCommandData: Command[] = await this.commandService.findAreaCommands();
      res.status(200).json({ data: findAllCommandData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
  public getDivisionalCommands = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllCommandData: Command[] = await this.commandService.findDivisionCommands();
      res.status(200).json({ data: findAllCommandData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
  public getCommands = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllCommandData: Command[] = await this.commandService.findAllCommand();
      res.status(200).json({ data: findAllCommandData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCommandById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const commandId = Number(req.params.id);
      const findOneCommandData: Command = await this.commandService.findCommandById(commandId);
      res.status(200).json({ data: findOneCommandData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCommand = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const commandData: Command = req.body;
      const createCommandData: Command = await this.commandService.createCommand(commandData);
      res.status(201).json({ data: createCommandData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateCommand = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const commandId = Number(req.params.id);
      const commandData: Command = req.body;
      const updateCommandData: Command = await this.commandService.updateCommand(commandId, commandData);
      res.status(200).json({ data: updateCommandData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteCommand = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const commandId = Number(req.params.id);
      const deleteCommandData: Command = await this.commandService.deleteCommand(commandId);
      res.status(200).json({ data: deleteCommandData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
