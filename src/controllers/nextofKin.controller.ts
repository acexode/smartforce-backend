import { NextOfKin } from '@/entities/nextOfKin.entity';
import { RequestWithUser } from '@/interfaces/auth.interface';
import { NextOfKinService } from '@/services/nextofKin.service';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

export class NextOfKinController {
  public nextOfKin = Container.get(NextOfKinService);

  public getNextOfKin = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = req.user;
      const findAllNextOfKinData: NextOfKin[] = await this.nextOfKin.findAllNextOfKin(user.id);
      res.status(200).json({ data: findAllNextOfKinData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getNextOfKinById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const nextOfKinId = Number(req.params.id);
      const findOneNextOfKinData: NextOfKin[] = await this.nextOfKin.findNextOfKinById(nextOfKinId);
      res.status(200).json({ data: findOneNextOfKinData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createNextOfKin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const nextOfKinData: NextOfKin[] = req.body;
      const createNextOfKinData: NextOfKin[] = await this.nextOfKin.createNextOfKin(nextOfKinData);
      res.status(201).json({ data: createNextOfKinData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateNextOfKin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const nextOfKinId = Number(req.params.id);
      const nextOfKinData: NextOfKin[] = req.body;
      const updateNextOfKinData: NextOfKin[] = await this.nextOfKin.updateNextOfKin(nextOfKinId, nextOfKinData);
      res.status(200).json({ data: updateNextOfKinData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteNextOfKin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const nextOfKinId = Number(req.params.id);
      const deleteNextOfKinData: NextOfKin = await this.nextOfKin.deleteNextOfKin(nextOfKinId);
      res.status(200).json({ data: deleteNextOfKinData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
