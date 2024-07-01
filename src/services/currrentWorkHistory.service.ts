import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { OfficerCurrentPostingEntity, OfficerCurrentPosting } from '@entities/currentWorkHistory.entity';
import { HttpException } from '@/exceptions/httpException';

@Service()
@EntityRepository()
export class OfficerCurrentPostingService extends Repository<OfficerCurrentPostingEntity> {
  public async findAllCurrentPostings(): Promise<OfficerCurrentPosting[]> {
    const currentPostings: OfficerCurrentPosting[] = await OfficerCurrentPostingEntity.find();
    return currentPostings;
  }

  public async findCurrentPostingById(currentPostingId: number): Promise<OfficerCurrentPosting> {
    const findCurrentPosting: OfficerCurrentPosting = await OfficerCurrentPostingEntity.findOne({ where: { officerId: currentPostingId } });
    if (!findCurrentPosting) throw new HttpException(409, "Current Posting doesn't exist");

    return findCurrentPosting;
  }

  public async createCurrentPosting(currentPostingData: OfficerCurrentPosting): Promise<OfficerCurrentPosting> {
    const createCurrentPostingData: OfficerCurrentPosting = await OfficerCurrentPostingEntity.create({
      ...currentPostingData,
      officer: { id: currentPostingData.officerId },
    }).save();
    return createCurrentPostingData;
  }

  public async updateCurrentPosting(currentPostingId: number, currentPostingData: OfficerCurrentPosting): Promise<OfficerCurrentPosting> {
    const findCurrentPosting: OfficerCurrentPosting = await OfficerCurrentPostingEntity.findOne({ where: { officerId: currentPostingId } });
    if (!findCurrentPosting) throw new HttpException(409, "Current Posting doesn't exist");

    await OfficerCurrentPostingEntity.update({ officer: { id: currentPostingId } }, currentPostingData);

    const updateCurrentPosting: OfficerCurrentPosting = await OfficerCurrentPostingEntity.findOne({ where: { officerId: currentPostingId } });
    return updateCurrentPosting;
  }

  public async deleteCurrentPosting(currentPostingId: number): Promise<OfficerCurrentPosting> {
    const findCurrentPosting: OfficerCurrentPosting = await OfficerCurrentPostingEntity.findOne({ where: { id: currentPostingId } });
    if (!findCurrentPosting) throw new HttpException(409, "Current Posting doesn't exist");

    await OfficerCurrentPostingEntity.delete({ id: currentPostingId });
    return findCurrentPosting;
  }
}
