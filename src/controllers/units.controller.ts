import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Unit } from '@interfaces/units.interface';
import { UnitService } from '@services/units.service';

export class UnitController {
  public unitService = Container.get(UnitService);

  public getUnits = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllUnitsData: Unit[] = await this.unitService.findAllUnits();
      res.status(200).json({ data: findAllUnitsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getUnitById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const unitId = Number(req.params.id);
      const findOneUnitData: Unit = await this.unitService.findUnitById(unitId);
      res.status(200).json({ data: findOneUnitData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createUnit = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const unitData: Unit = req.body;
      const createUnitData: Unit = await this.unitService.createUnit(unitData);
      res.status(201).json({ data: createUnitData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateUnit = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const unitId = Number(req.params.id);
      const unitData: Unit = req.body;
      const updateUnitData: Unit = await this.unitService.updateUnit(unitId, unitData);
      res.status(200).json({ data: updateUnitData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteUnit = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const unitId = Number(req.params.id);
      const deleteUnitData: Unit = await this.unitService.deleteUnit(unitId);
      res.status(200).json({ data: deleteUnitData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
