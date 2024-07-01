import { Router } from 'express';
import { DepartmentController } from '@controllers/department.controller';
import { CreateDepartmentDto, UpdateDepartmentDto } from '@dtos/department.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class DepartmentRoute implements Routes {
  public path = '/org-structure/departments';
  public router = Router();
  public departmentController = new DepartmentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.departmentController.getDepartments);
    this.router.get(`${this.path}/:id(\\d+)`, this.departmentController.getDepartmentById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateDepartmentDto), this.departmentController.createDepartment);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateDepartmentDto, true), this.departmentController.updateDepartment);
    this.router.delete(`${this.path}/:id(\\d+)`, this.departmentController.deleteDepartment);
  }
}
