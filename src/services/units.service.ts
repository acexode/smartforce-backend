import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { UnitEntity } from '@entities/units.entity';
import { HttpException } from '@/exceptions/httpException';
import { Unit } from '@interfaces/units.interface';

@Service()
@EntityRepository()
export class UnitService extends Repository<UnitEntity> {
  public async findAllUnits(): Promise<Unit[]> {
    const units: Unit[] = await UnitEntity.find();
    return units;
  }

  public async findUnitById(unitId: number): Promise<Unit> {
    const findUnit: Unit = await UnitEntity.findOne({ where: { id: unitId } });
    if (!findUnit) throw new HttpException(409, "Unit doesn't exist");

    return findUnit;
  }

  public async createUnit(unitData: Unit): Promise<Unit> {
    const createUnitData: Unit = await UnitEntity.create(unitData).save();
    return createUnitData;
  }

  public async updateUnit(unitId: number, unitData: Unit): Promise<Unit> {
    const findUnit: Unit = await UnitEntity.findOne({ where: { id: unitId } });
    if (!findUnit) throw new HttpException(409, "Unit doesn't exist");

    await UnitEntity.update(unitId, unitData);

    const updateUnit: Unit = await UnitEntity.findOne({ where: { id: unitId } });
    return updateUnit;
  }

  public async deleteUnit(unitId: number): Promise<Unit> {
    const findUnit: Unit = await UnitEntity.findOne({ where: { id: unitId } });
    if (!findUnit) throw new HttpException(409, "Unit doesn't exist");

    await UnitEntity.delete({ id: unitId });
    return findUnit;
  }
}
