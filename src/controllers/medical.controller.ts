import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

import { OfficerMedicalInfoService } from '@services/medical.service';
import { OfficerMedicalInfo } from '@/entities/medical.entity';

export class OfficerMedicalInfoController {
  public OfficerMedicalInfoService = Container.get(OfficerMedicalInfoService);

  public getAttributes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllAttributesData: OfficerMedicalInfo[] = await this.OfficerMedicalInfoService.findAllAttributes();
      res.status(200).json({ data: findAllAttributesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getAttributeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const attributeId = Number(req.params.id);
      const findOneAttributeData: OfficerMedicalInfo = await this.OfficerMedicalInfoService.findAttributeById(attributeId);
      res.status(200).json({ data: findOneAttributeData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createAttribute = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const attributeData: OfficerMedicalInfo = req.body;
      const createAttributeData: OfficerMedicalInfo = await this.OfficerMedicalInfoService.createAttribute(attributeData);
      res.status(201).json({ data: createAttributeData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateAttribute = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const attributeId = Number(req.params.id);
      const attributeData: OfficerMedicalInfo = req.body;
      const updateAttributeData: OfficerMedicalInfo = await this.OfficerMedicalInfoService.updateAttribute(attributeId, attributeData);
      res.status(200).json({ data: updateAttributeData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteAttribute = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const attributeId = Number(req.params.id);
      const deleteAttributeData: OfficerMedicalInfo = await this.OfficerMedicalInfoService.deleteAttribute(attributeId);
      res.status(200).json({ data: deleteAttributeData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
