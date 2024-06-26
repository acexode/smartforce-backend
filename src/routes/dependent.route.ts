import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { DependentsController } from '@/controllers/dependent.controller';
import { CreateDependentsDto, UpdateDependentsDto } from '@/dtos/dependent.dto';

export class DependentsRoute implements Routes {
  public path = '/officer/dependents';
  public router = Router();
  public dependents = new DependentsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.dependents.getDependents);
    this.router.get(`${this.path}/:id(\\d+)`, this.dependents.getDependentsById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateDependentsDto), this.dependents.createDependents);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateDependentsDto, true), this.dependents.updateDependents);
    this.router.delete(`${this.path}/:id(\\d+)`, this.dependents.deleteDependents);
  }
}
