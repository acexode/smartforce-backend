import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { DivisionalHeadquarters } from '@interfaces/divisionalHQ.interface';
import { DivisionalHeadquartersService } from '@services/divisionalHQ.service';

export class DivisionalHeadquartersController {
  public divisionalHeadquartersService = Container.get(DivisionalHeadquartersService);

  public getDivisionalHeadquarters = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllDivisionalHeadquartersData: DivisionalHeadquarters[] = await this.divisionalHeadquartersService.findAllDivisionalHeadquarters();
      res.status(200).json({ data: findAllDivisionalHeadquartersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getDivisionalHeadquartersById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const divisionalHeadquartersId = Number(req.params.id);
      const findOneDivisionalHeadquartersData: DivisionalHeadquarters = await this.divisionalHeadquartersService.findDivisionalHeadquartersById(
        divisionalHeadquartersId,
      );
      res.status(200).json({ data: findOneDivisionalHeadquartersData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createDivisionalHeadquarters = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const divisionalHeadquartersData: DivisionalHeadquarters = req.body;
      const createDivisionalHeadquartersData: DivisionalHeadquarters = await this.divisionalHeadquartersService.createDivisionalHeadquarters(
        divisionalHeadquartersData,
      );
      res.status(201).json({ data: createDivisionalHeadquartersData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateDivisionalHeadquarters = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const divisionalHeadquartersId = Number(req.params.id);
      const divisionalHeadquartersData: DivisionalHeadquarters = req.body;
      const updateDivisionalHeadquartersData: DivisionalHeadquarters = await this.divisionalHeadquartersService.updateDivisionalHeadquarters(
        divisionalHeadquartersId,
        divisionalHeadquartersData,
      );
      res.status(200).json({ data: updateDivisionalHeadquartersData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteDivisionalHeadquarters = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const divisionalHeadquartersId = Number(req.params.id);
      const deleteDivisionalHeadquartersData: DivisionalHeadquarters = await this.divisionalHeadquartersService.deleteDivisionalHeadquarters(
        divisionalHeadquartersId,
      );
      res.status(200).json({ data: deleteDivisionalHeadquartersData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
