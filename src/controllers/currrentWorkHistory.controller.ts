import { CurrentWorkHistory } from '@/entities/currentWorkHistory.entity';
import { CurrentWorkHistoryService } from '@/services/currrentWorkHistory.service';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

export class CurrentWorkHistoryController {
  public currentWorkHistory = Container.get(CurrentWorkHistoryService);

  public getCurrentWorkHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllCurrentWorkHistoryData: CurrentWorkHistory[] = await this.currentWorkHistory.findAllCurrentWorkHistory();
      res.status(200).json({ data: findAllCurrentWorkHistoryData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCurrentWorkHistoryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const currentWorkHistoryId = Number(req.params.id);
      const findOneCurrentWorkHistoryData: CurrentWorkHistory = await this.currentWorkHistory.findCurrentWorkHistoryById(currentWorkHistoryId);
      res.status(200).json({ data: findOneCurrentWorkHistoryData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCurrentWorkHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const currentWorkHistoryData: CurrentWorkHistory = req.body;
      const createCurrentWorkHistoryData: CurrentWorkHistory = await this.currentWorkHistory.createCurrentWorkHistory(currentWorkHistoryData);
      res.status(201).json({ data: createCurrentWorkHistoryData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateCurrentWorkHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const currentWorkHistoryId = Number(req.params.id);
      const currentWorkHistoryData: CurrentWorkHistory = req.body;
      const updateCurrentWorkHistoryData: CurrentWorkHistory = await this.currentWorkHistory.updateCurrentWorkHistory(
        currentWorkHistoryId,
        currentWorkHistoryData,
      );
      res.status(200).json({ data: updateCurrentWorkHistoryData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteCurrentWorkHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const currentWorkHistoryId = Number(req.params.id);
      const deleteCurrentWorkHistoryData: CurrentWorkHistory = await this.currentWorkHistory.deleteCurrentWorkHistory(currentWorkHistoryId);
      res.status(200).json({ data: deleteCurrentWorkHistoryData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
