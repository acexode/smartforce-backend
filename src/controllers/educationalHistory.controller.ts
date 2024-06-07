import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

import { EducationalHistoryService } from '@services/educationalHistory.service';
import { EducationalHistory } from '@/entities/educationalHistory.entity';

export class EducationalHistoryController {
  public educationalHistory = Container.get(EducationalHistoryService);

  public getEducationalHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllEducationalHistoryData: EducationalHistory[] = await this.educationalHistory.findAllEducationalHistory();
      res.status(200).json({ data: findAllEducationalHistoryData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getEducationalHistoryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const educationalHistoryId = Number(req.params.id);
      const findOneEducationalHistoryData: EducationalHistory = await this.educationalHistory.findEducationalHistoryById(educationalHistoryId);
      res.status(200).json({ data: findOneEducationalHistoryData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createEducationalHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const educationalHistoryData: EducationalHistory = req.body;
      const createEducationalHistoryData: EducationalHistory = await this.educationalHistory.createEducationalHistory(educationalHistoryData);
      res.status(201).json({ data: createEducationalHistoryData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateEducationalHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const educationalHistoryId = Number(req.params.id);
      const educationalHistoryData: EducationalHistory = req.body;
      const updateEducationalHistoryData: EducationalHistory = await this.educationalHistory.updateEducationalHistory(
        educationalHistoryId,
        educationalHistoryData,
      );
      res.status(200).json({ data: updateEducationalHistoryData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteEducationalHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const educationalHistoryId = Number(req.params.id);
      const deleteEducationalHistoryData: EducationalHistory = await this.educationalHistory.deleteEducationalHistory(educationalHistoryId);
      res.status(200).json({ data: deleteEducationalHistoryData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
