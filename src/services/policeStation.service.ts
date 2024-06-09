import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { PoliceStationEntity } from '@entities/policeStation.entity';
import { HttpException } from '@/exceptions/httpException';
import { PoliceStation } from '@interfaces/policeStation.interface';

@Service()
@EntityRepository()
export class PoliceStationService extends Repository<PoliceStationEntity> {
  public async findAllPoliceStations(): Promise<PoliceStation[]> {
    const policeStations: PoliceStation[] = await PoliceStationEntity.find();
    return policeStations;
  }

  public async findPoliceStationById(policeStationId: number): Promise<PoliceStation> {
    const findPoliceStation: PoliceStation = await PoliceStationEntity.findOne({ where: { id: policeStationId } });
    if (!findPoliceStation) throw new HttpException(409, "Police Station doesn't exist");

    return findPoliceStation;
  }

  public async createPoliceStation(policeStationData: PoliceStation): Promise<PoliceStation> {
    const createPoliceStationData: PoliceStation = await PoliceStationEntity.create(policeStationData).save();
    return createPoliceStationData;
  }

  public async updatePoliceStation(policeStationId: number, policeStationData: PoliceStation): Promise<PoliceStation> {
    const findPoliceStation: PoliceStation = await PoliceStationEntity.findOne({ where: { id: policeStationId } });
    if (!findPoliceStation) throw new HttpException(409, "Police Station doesn't exist");

    await PoliceStationEntity.update(policeStationId, policeStationData);

    const updatePoliceStation: PoliceStation = await PoliceStationEntity.findOne({ where: { id: policeStationId } });
    return updatePoliceStation;
  }

  public async deletePoliceStation(policeStationId: number): Promise<PoliceStation> {
    const findPoliceStation: PoliceStation = await PoliceStationEntity.findOne({ where: { id: policeStationId } });
    if (!findPoliceStation) throw new HttpException(409, "Police Station doesn't exist");

    await PoliceStationEntity.delete({ id: policeStationId });
    return findPoliceStation;
  }
}
