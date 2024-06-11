import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { OfficerWelfareInformation } from '@entities/welfare.entity';
import { OfficerWelfareInformationService } from '@services/welfare.service';

export class OfficerWelfareInformationController {
  public officerWelfareInformationService = Container.get(OfficerWelfareInformationService);

  public getWelfareInformation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllWelfareInformationData: OfficerWelfareInformation[] = await this.officerWelfareInformationService.findAllWelfareInformation();
      res.status(200).json({ data: findAllWelfareInformationData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getWelfareInformationById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const welfareInformationId = Number(req.params.id);
      const findOneWelfareInformationData: OfficerWelfareInformation = await this.officerWelfareInformationService.findWelfareInformationById(
        welfareInformationId,
      );
      res.status(200).json({ data: findOneWelfareInformationData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createWelfareInformation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const welfareInformationData: OfficerWelfareInformation = req.body;
      const createWelfareInformationData: OfficerWelfareInformation = await this.officerWelfareInformationService.createWelfareInformation(
        welfareInformationData,
      );
      res.status(201).json({ data: createWelfareInformationData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateWelfareInformation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const welfareInformationId = Number(req.params.id);
      const welfareInformationData: OfficerWelfareInformation = req.body;
      const updateWelfareInformationData: OfficerWelfareInformation = await this.officerWelfareInformationService.updateWelfareInformation(
        welfareInformationId,
        welfareInformationData,
      );
      res.status(200).json({ data: updateWelfareInformationData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteWelfareInformation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const welfareInformationId = Number(req.params.id);
      const deleteWelfareInformationData: OfficerWelfareInformation = await this.officerWelfareInformationService.deleteWelfareInformation(
        welfareInformationId,
      );
      res.status(200).json({ data: deleteWelfareInformationData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
