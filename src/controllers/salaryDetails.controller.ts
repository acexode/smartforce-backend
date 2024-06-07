import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

import { SalaryDetailsService } from '@services/salaryDetails.service';
import { SalaryDetails } from '@/entities/salaryDetails.entity';

export class SalaryDetailsController {
  public salaryDetails = Container.get(SalaryDetailsService);

  public getSalaryDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllSalaryDetailsData: SalaryDetails[] = await this.salaryDetails.findAllSalaryDetails();
      res.status(200).json({ data: findAllSalaryDetailsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getSalaryDetailsById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const salaryDetailsId = Number(req.params.id);
      const findOneSalaryDetailsData: SalaryDetails = await this.salaryDetails.findSalaryDetailsById(salaryDetailsId);
      res.status(200).json({ data: findOneSalaryDetailsData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createSalaryDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const salaryDetailsData: SalaryDetails = req.body;
      const createSalaryDetailsData: SalaryDetails = await this.salaryDetails.createSalaryDetails(salaryDetailsData);
      res.status(201).json({ data: createSalaryDetailsData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateSalaryDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const salaryDetailsId = Number(req.params.id);
      const salaryDetailsData: SalaryDetails = req.body;
      const updateSalaryDetailsData: SalaryDetails = await this.salaryDetails.updateSalaryDetails(salaryDetailsId, salaryDetailsData);
      res.status(200).json({ data: updateSalaryDetailsData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteSalaryDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const salaryDetailsId = Number(req.params.id);
      const deleteSalaryDetailsData: SalaryDetails = await this.salaryDetails.deleteSalaryDetails(salaryDetailsId);
      res.status(200).json({ data: deleteSalaryDetailsData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
