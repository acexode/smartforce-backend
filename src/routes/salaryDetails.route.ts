import { Router } from 'express';
import { SalaryDetailsController } from '@controllers/salaryDetails.controller';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { CreateSalaryDetailsDto, UpdateSalaryDetailsDto } from '@/dtos/salary.dto';
import { AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class SalaryDetailsRoute implements Routes {
  public path = '/officer/salary-details';
  public router = Router();
  public salaryDetails = new SalaryDetailsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,AuthoriseRole([Roles.Admin,Roles.dataEntry]), this.salaryDetails.getSalaryDetails);
    this.router.get(`${this.path}/:id(\\d+)`,AuthoriseRole([Roles.Admin,Roles.dataEntry,Roles.Officer]), this.salaryDetails.getSalaryDetailsById);
    this.router.post(`${this.path}`,AuthoriseRole([Roles.Admin,Roles.dataEntry]), ValidationMiddleware(CreateSalaryDetailsDto), this.salaryDetails.createSalaryDetails);
    this.router.put(`${this.path}/:id(\\d+)`,AuthoriseRole([Roles.Admin,Roles.dataEntry]), ValidationMiddleware(UpdateSalaryDetailsDto, true), this.salaryDetails.updateSalaryDetails);
    this.router.delete(`${this.path}/:id(\\d+)`,AuthoriseRole([Roles.Admin]), this.salaryDetails.deleteSalaryDetails);
  }
}
