import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Ippis } from '@interfaces/ippis.interface';
import { IppisService } from '@services/ippis.service';

export class IppisController {
  public ippisService = Container.get(IppisService);

  public getIppiss = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllIppisData: Ippis[] = await this.ippisService.findAllIppis();
      res.status(200).json({ data: findAllIppisData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getIppisById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const ippisId = Number(req.params.id);
      const findOneIppisData: Ippis = await this.ippisService.findIppisById(ippisId);
      res.status(200).json({ data: findOneIppisData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createIppis = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const ippisData: Ippis = req.body;
      const createIppisData: Ippis = await this.ippisService.createIppis(ippisData);
      res.status(201).json({ data: createIppisData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateIppis = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const ippisId = Number(req.params.id);
      const ippisData: Ippis = req.body;
      const updateIppisData: Ippis = await this.ippisService.updateIppis(ippisId, ippisData);
      res.status(200).json({ data: updateIppisData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteIppis = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const ippisId = Number(req.params.id);
      const deleteIppisData: Ippis = await this.ippisService.deleteIppis(ippisId);
      res.status(200).json({ data: deleteIppisData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
