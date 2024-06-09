import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Formation } from '@interfaces/formation.interface';
import { FormationService } from '@services/formation.service';

export class FormationController {
  public formationService = Container.get(FormationService);

  public getFormations = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllFormationsData: Formation[] = await this.formationService.findAllFormations();
      res.status(200).json({ data: findAllFormationsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getFormationById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const formationId = Number(req.params.id);
      const findOneFormationData: Formation = await this.formationService.findFormationById(formationId);
      res.status(200).json({ data: findOneFormationData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createFormation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const formationData: Formation = req.body;
      const createFormationData: Formation = await this.formationService.createFormation(formationData);
      res.status(201).json({ data: createFormationData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateFormation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const formationId = Number(req.params.id);
      const formationData: Formation = req.body;
      const updateFormationData: Formation = await this.formationService.updateFormation(formationId, formationData);
      res.status(200).json({ data: updateFormationData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteFormation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const formationId = Number(req.params.id);
      const deleteFormationData: Formation = await this.formationService.deleteFormation(formationId);
      res.status(200).json({ data: deleteFormationData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
