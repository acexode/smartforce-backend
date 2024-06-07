import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

import { APERService } from '@services/aper.service';
import { APER } from '@/entities/aper.entity';

export class APERController {
  public aper = Container.get(APERService);

  public getAPER = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllAPERData: APER[] = await this.aper.findAllAPER();
      res.status(200).json({ data: findAllAPERData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getAPERById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const aperId = Number(req.params.id);
      const findOneAPERData: APER = await this.aper.findAPERById(aperId);
      res.status(200).json({ data: findOneAPERData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createAPER = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const aperData: APER = req.body;
      const createAPERData: APER = await this.aper.createAPER(aperData);
      res.status(201).json({ data: createAPERData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateAPER = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const aperId = Number(req.params.id);
      const aperData: APER = req.body;
      const updateAPERData: APER = await this.aper.updateAPER(aperId, aperData);
      res.status(200).json({ data: updateAPERData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteAPER = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const aperId = Number(req.params.id);
      const deleteAPERData: APER = await this.aper.deleteAPER(aperId);
      res.status(200).json({ data: deleteAPERData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
