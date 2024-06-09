import { StateCommand } from '@/interfaces/statecommand.interface';
import { StateCommandService } from '@/services/statecommand.service';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

export class StateCommandController {
  public stateCommandService = Container.get(StateCommandService);

  public getStateCommands = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllStateCommandsData: StateCommand[] = await this.stateCommandService.findAllStateCommands();
      res.status(200).json({ data: findAllStateCommandsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getStateCommandById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const stateCommandId = Number(req.params.id);
      const findOneStateCommandData: StateCommand = await this.stateCommandService.findStateCommandById(stateCommandId);
      res.status(200).json({ data: findOneStateCommandData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createStateCommand = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const stateCommandData: StateCommand = req.body;
      const createStateCommandData: StateCommand = await this.stateCommandService.createStateCommand(stateCommandData);
      res.status(201).json({ data: createStateCommandData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateStateCommand = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const stateCommandId = Number(req.params.id);
      const stateCommandData: StateCommand = req.body;
      const updateStateCommandData: StateCommand = await this.stateCommandService.updateStateCommand(stateCommandId, stateCommandData);
      res.status(200).json({ data: updateStateCommandData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteStateCommand = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const stateCommandId = Number(req.params.id);
      const deleteStateCommandData: StateCommand = await this.stateCommandService.deleteStateCommand(stateCommandId);
      res.status(200).json({ data: deleteStateCommandData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
