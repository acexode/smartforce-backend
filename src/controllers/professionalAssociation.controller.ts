import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

import { ProfessionalAssociationService } from '@services/professionalAssociation.service';
import { ProfessionalAssociation } from '@/entities/professionalAssociation.entity';

export class ProfessionalAssociationController {
  public professionalAssociation = Container.get(ProfessionalAssociationService);

  public getProfessionalAssociation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllProfessionalAssociationData: ProfessionalAssociation[] = await this.professionalAssociation.findAllProfessionalAssociation();
      res.status(200).json({ data: findAllProfessionalAssociationData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getProfessionalAssociationById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const professionalAssociationId = Number(req.params.id);
      const findOneProfessionalAssociationData: ProfessionalAssociation = await this.professionalAssociation.findProfessionalAssociationById(
        professionalAssociationId,
      );
      res.status(200).json({ data: findOneProfessionalAssociationData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createProfessionalAssociation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const professionalAssociationData: ProfessionalAssociation = req.body;
      const createProfessionalAssociationData: ProfessionalAssociation = await this.professionalAssociation.createProfessionalAssociation(
        professionalAssociationData,
      );
      res.status(201).json({ data: createProfessionalAssociationData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateProfessionalAssociation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const professionalAssociationId = Number(req.params.id);
      const professionalAssociationData: ProfessionalAssociation = req.body;
      const updateProfessionalAssociationData: ProfessionalAssociation = await this.professionalAssociation.updateProfessionalAssociation(
        professionalAssociationId,
        professionalAssociationData,
      );
      res.status(200).json({ data: updateProfessionalAssociationData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteProfessionalAssociation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const professionalAssociationId = Number(req.params.id);
      const deleteProfessionalAssociationData: ProfessionalAssociation = await this.professionalAssociation.deleteProfessionalAssociation(
        professionalAssociationId,
      );
      res.status(200).json({ data: deleteProfessionalAssociationData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
