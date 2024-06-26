import { OfficerBioData } from '@/entities/officer.entity';
import { RequestWithUser } from '@/interfaces/auth.interface';
import { OfficerBioDataService } from '@/services/officer.service';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

export class OfficerBioDataController {
  public OfficerBioData = Container.get(OfficerBioDataService);

  public getOfficerBioData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllOfficerBioDataData: OfficerBioData[] = await this.OfficerBioData.findAllOfficerBioData();
      res.status(200).json({ data: findAllOfficerBioDataData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getOfficerBioDataById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const OfficerBioDataId = Number(req.params.id);
      const findOneOfficerBioDataData: OfficerBioData = await this.OfficerBioData.findOfficerBioDataById(OfficerBioDataId);
      res.status(200).json({ data: findOneOfficerBioDataData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createOfficerBioData = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
    try {
      const OfficerBioDataData: OfficerBioData = req.body;
      const userId = req.user.id;
      const createOfficerBioDataData: OfficerBioData = await this.OfficerBioData.createOfficerBioData(OfficerBioDataData, userId);
      res.status(201).json({ data: createOfficerBioDataData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateOfficerBioData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const OfficerBioDataId = Number(req.params.id);
      const OfficerBioDataData: OfficerBioData = req.body;
      const updateOfficerBioDataData: OfficerBioData = await this.OfficerBioData.updateOfficerBioData(OfficerBioDataId, OfficerBioDataData);
      res.status(200).json({ data: updateOfficerBioDataData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteOfficerBioData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const OfficerBioDataId = Number(req.params.id);
      const deleteOfficerBioDataData: OfficerBioData = await this.OfficerBioData.deleteOfficerBioData(OfficerBioDataId);
      res.status(200).json({ data: deleteOfficerBioDataData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
