import { Dependents } from '@/entities/dependent.entity';
import { DependentsService } from '@/services/dependent.service';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

export class DependentsController {
  public dependents = Container.get(DependentsService);

  public getDependents = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllDependentsData: Dependents[] = await this.dependents.findAllDependents();
      res.status(200).json({ data: findAllDependentsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getDependentsById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const dependentsId = Number(req.params.id);
      const findOneDependentsData: Dependents = await this.dependents.findDependentsById(dependentsId);
      res.status(200).json({ data: findOneDependentsData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createDependents = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const dependentsData: Dependents = req.body;
      const createDependentsData: Dependents = await this.dependents.createDependents(dependentsData);
      res.status(201).json({ data: createDependentsData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateDependents = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const dependentsId = Number(req.params.id);
      const dependentsData: Dependents = req.body;
      const updateDependentsData: Dependents = await this.dependents.updateDependents(dependentsId, dependentsData);
      res.status(200).json({ data: updateDependentsData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteDependents = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const dependentsId = Number(req.params.id);
      const deleteDependentsData: Dependents = await this.dependents.deleteDependents(dependentsId);
      res.status(200).json({ data: deleteDependentsData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
