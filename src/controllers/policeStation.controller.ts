import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { PoliceStation } from '@interfaces/policeStation.interface';
import { PoliceStationService } from '@services/policeStation.service';

export class PoliceStationController {
  public policeStationService = Container.get(PoliceStationService);

  public getPoliceStations = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllPoliceStationsData: PoliceStation[] = await this.policeStationService.findAllPoliceStations();
      res.status(200).json({ data: findAllPoliceStationsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getPoliceStationById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const policeStationId = Number(req.params.id);
      const findOnePoliceStationData: PoliceStation = await this.policeStationService.findPoliceStationById(policeStationId);
      res.status(200).json({ data: findOnePoliceStationData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createPoliceStation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const policeStationData: PoliceStation = req.body;
      const createPoliceStationData: PoliceStation = await this.policeStationService.createPoliceStation(policeStationData);
      res.status(201).json({ data: createPoliceStationData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updatePoliceStation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const policeStationId = Number(req.params.id);
      const policeStationData: PoliceStation = req.body;
      const updatePoliceStationData: PoliceStation = await this.policeStationService.updatePoliceStation(policeStationId, policeStationData);
      res.status(200).json({ data: updatePoliceStationData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deletePoliceStation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const policeStationId = Number(req.params.id);
      const deletePoliceStationData: PoliceStation = await this.policeStationService.deletePoliceStation(policeStationId);
      res.status(200).json({ data: deletePoliceStationData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
