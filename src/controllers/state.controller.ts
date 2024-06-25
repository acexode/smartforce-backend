import { States } from '@/interfaces/statecommand.interface';
import { StateService } from '@/services/states.service';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

export class StatesController {
  public StatesService = Container.get(StateService);

  public getState = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllStatessData: States[] = await this.StatesService.findAllStates();
      res.status(200).json({ data: findAllStatessData, message: 'All States' });
    } catch (error) {
      next(error);
    }
  };

  public createState = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const StatesData: States = req.body;
      const createStatesData: States = await this.StatesService.createState(StatesData);
      res.status(201).json({ data: createStatesData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}
