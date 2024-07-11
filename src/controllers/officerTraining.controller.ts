import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { OfficerTraining } from '@entities/officerTraining.entity';
import { OfficerTrainingService } from '@services/officerTraining.service';
import { RequestWithUser } from '@/interfaces/auth.interface';

export class OfficerTrainingController {
  public officerTrainingService = Container.get(OfficerTrainingService);

  public getTrainings = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = req.user;
      const findAllTrainingsData: OfficerTraining[] = await this.officerTrainingService.findAllTrainings(user.id);
      res.status(200).json({ data: findAllTrainingsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getTrainingById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const trainingId = Number(req.params.id);
      const findOneTrainingData: OfficerTraining[] = await this.officerTrainingService.findTrainingById(trainingId);
      res.status(200).json({ data: findOneTrainingData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createTraining = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const trainingData: OfficerTraining[] = req.body;
      const createTrainingData: OfficerTraining[] = await this.officerTrainingService.createTraining(trainingData);
      res.status(201).json({ data: createTrainingData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateTraining = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const trainingId = Number(req.params.id);
      const trainingData: OfficerTraining[] = req.body;
      const updateTrainingData: OfficerTraining[] = await this.officerTrainingService.updateTraining(trainingId, trainingData);
      res.status(200).json({ data: updateTrainingData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteTraining = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const trainingId = Number(req.params.id);
      const deleteTrainingData: OfficerTraining = await this.officerTrainingService.deleteTraining(trainingId);
      res.status(200).json({ data: deleteTrainingData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
