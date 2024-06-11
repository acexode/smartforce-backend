import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { OfficerCurrentPosting } from '@entities/currentWorkHistory.entity';
import { OfficerCurrentPostingService } from '@services/currrentWorkHistory.service';

export class OfficerCurrentPostingController {
  public officerCurrentPostingService = Container.get(OfficerCurrentPostingService);

  public getCurrentPostings = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllCurrentPostingsData: OfficerCurrentPosting[] = await this.officerCurrentPostingService.findAllCurrentPostings();
      res.status(200).json({ data: findAllCurrentPostingsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCurrentPostingById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const currentPostingId = Number(req.params.id);
      const findOneCurrentPostingData: OfficerCurrentPosting = await this.officerCurrentPostingService.findCurrentPostingById(currentPostingId);
      res.status(200).json({ data: findOneCurrentPostingData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCurrentPosting = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const currentPostingData: OfficerCurrentPosting = req.body;
      const createCurrentPostingData: OfficerCurrentPosting = await this.officerCurrentPostingService.createCurrentPosting(currentPostingData);
      res.status(201).json({ data: createCurrentPostingData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateCurrentPosting = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const currentPostingId = Number(req.params.id);
      const currentPostingData: OfficerCurrentPosting = req.body;
      const updateCurrentPostingData: OfficerCurrentPosting = await this.officerCurrentPostingService.updateCurrentPosting(
        currentPostingId,
        currentPostingData,
      );
      res.status(200).json({ data: updateCurrentPostingData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteCurrentPosting = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const currentPostingId = Number(req.params.id);
      const deleteCurrentPostingData: OfficerCurrentPosting = await this.officerCurrentPostingService.deleteCurrentPosting(currentPostingId);
      res.status(200).json({ data: deleteCurrentPostingData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
