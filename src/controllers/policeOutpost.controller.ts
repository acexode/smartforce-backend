import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { PoliceOutpost } from '@interfaces/policeOutpost.interface';
import { PoliceOutpostService } from '@services/policeOutpost.service';

export class PoliceOutpostController {
  public policeOutpostService = Container.get(PoliceOutpostService);

  public getPoliceOutposts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllPoliceOutpostsData: PoliceOutpost[] = await this.policeOutpostService.findAllPoliceOutposts();
      res.status(200).json({ data: findAllPoliceOutpostsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getPoliceOutpostById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const policeOutpostId = Number(req.params.id);
      const findOnePoliceOutpostData: PoliceOutpost = await this.policeOutpostService.findPoliceOutpostById(policeOutpostId);
      res.status(200).json({ data: findOnePoliceOutpostData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createPoliceOutpost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const policeOutpostData: PoliceOutpost = req.body;
      const createPoliceOutpostData: PoliceOutpost = await this.policeOutpostService.createPoliceOutpost(policeOutpostData);
      res.status(201).json({ data: createPoliceOutpostData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updatePoliceOutpost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const policeOutpostId = Number(req.params.id);
      const policeOutpostData: PoliceOutpost = req.body;
      const updatePoliceOutpostData: PoliceOutpost = await this.policeOutpostService.updatePoliceOutpost(policeOutpostId, policeOutpostData);
      res.status(200).json({ data: updatePoliceOutpostData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deletePoliceOutpost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const policeOutpostId = Number(req.params.id);
      const deletePoliceOutpostData: PoliceOutpost = await this.policeOutpostService.deletePoliceOutpost(policeOutpostId);
      res.status(200).json({ data: deletePoliceOutpostData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
