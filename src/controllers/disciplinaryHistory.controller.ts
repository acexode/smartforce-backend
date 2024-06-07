import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { DisciplinaryHistoryService } from '@services/disciplinaryHistory.service';
import { DisciplinaryHistory } from '@/entities/disclipinaryHistory.entity';

export class DisciplinaryHistoryController {
  public disciplinaryHistory = Container.get(DisciplinaryHistoryService);

  public getDisciplinaryHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllDisciplinaryHistoryData: DisciplinaryHistory[] = await this.disciplinaryHistory.findAllDisciplinaryHistory();
      res.status(200).json({ data: findAllDisciplinaryHistoryData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getDisciplinaryHistoryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const disciplinaryHistoryId = Number(req.params.id);
      const findOneDisciplinaryHistoryData: DisciplinaryHistory = await this.disciplinaryHistory.findDisciplinaryHistoryById(disciplinaryHistoryId);
      res.status(200).json({ data: findOneDisciplinaryHistoryData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createDisciplinaryHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const disciplinaryHistoryData: DisciplinaryHistory = req.body;
      const createDisciplinaryHistoryData: DisciplinaryHistory = await this.disciplinaryHistory.createDisciplinaryHistory(disciplinaryHistoryData);
      res.status(201).json({ data: createDisciplinaryHistoryData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateDisciplinaryHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const disciplinaryHistoryId = Number(req.params.id);
      const disciplinaryHistoryData: DisciplinaryHistory = req.body;
      const updateDisciplinaryHistoryData: DisciplinaryHistory = await this.disciplinaryHistory.updateDisciplinaryHistory(
        disciplinaryHistoryId,
        disciplinaryHistoryData,
      );
      res.status(200).json({ data: updateDisciplinaryHistoryData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteDisciplinaryHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const disciplinaryHistoryId = Number(req.params.id);
      const deleteDisciplinaryHistoryData: DisciplinaryHistory = await this.disciplinaryHistory.deleteDisciplinaryHistory(disciplinaryHistoryId);
      res.status(200).json({ data: deleteDisciplinaryHistoryData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
