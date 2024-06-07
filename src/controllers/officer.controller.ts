import { IPPISOfficersInfo } from '@/entities/officer.entity';
import { IPPISOfficersInfoService } from '@/services/officer.service';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

export class IPPISOfficersInfoController {
  public ippisOfficersInfo = Container.get(IPPISOfficersInfoService);

  public getIPPISOfficersInfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllIPPISOfficersInfoData: IPPISOfficersInfo[] = await this.ippisOfficersInfo.findAllIPPISOfficersInfo();
      res.status(200).json({ data: findAllIPPISOfficersInfoData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getIPPISOfficersInfoById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const ippisOfficersInfoId = Number(req.params.id);
      const findOneIPPISOfficersInfoData: IPPISOfficersInfo = await this.ippisOfficersInfo.findIPPISOfficersInfoById(ippisOfficersInfoId);
      res.status(200).json({ data: findOneIPPISOfficersInfoData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createIPPISOfficersInfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const ippisOfficersInfoData: IPPISOfficersInfo = req.body;
      const createIPPISOfficersInfoData: IPPISOfficersInfo = await this.ippisOfficersInfo.createIPPISOfficersInfo(ippisOfficersInfoData);
      res.status(201).json({ data: createIPPISOfficersInfoData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateIPPISOfficersInfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const ippisOfficersInfoId = Number(req.params.id);
      const ippisOfficersInfoData: IPPISOfficersInfo = req.body;
      const updateIPPISOfficersInfoData: IPPISOfficersInfo = await this.ippisOfficersInfo.updateIPPISOfficersInfo(
        ippisOfficersInfoId,
        ippisOfficersInfoData,
      );
      res.status(200).json({ data: updateIPPISOfficersInfoData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteIPPISOfficersInfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const ippisOfficersInfoId = Number(req.params.id);
      const deleteIPPISOfficersInfoData: IPPISOfficersInfo = await this.ippisOfficersInfo.deleteIPPISOfficersInfo(ippisOfficersInfoId);
      res.status(200).json({ data: deleteIPPISOfficersInfoData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
