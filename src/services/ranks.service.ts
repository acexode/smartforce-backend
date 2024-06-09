import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { RankEntity } from '@entities/ranks.entity';
import { HttpException } from '@/exceptions/httpException';
import { Rank } from '@interfaces/ranks.interface';

@Service()
@EntityRepository()
export class RankService extends Repository<RankEntity> {
  public async findAllRanks(): Promise<Rank[]> {
    const ranks: Rank[] = await RankEntity.find();
    return ranks;
  }

  public async findRankById(rankId: number): Promise<Rank> {
    const findRank: Rank = await RankEntity.findOne({ where: { id: rankId } });
    if (!findRank) throw new HttpException(409, "Rank doesn't exist");

    return findRank;
  }

  public async createRank(rankData: Rank): Promise<Rank> {
    const createRankData: Rank = await RankEntity.create(rankData).save();
    return createRankData;
  }

  public async updateRank(rankId: number, rankData: Rank): Promise<Rank> {
    const findRank: Rank = await RankEntity.findOne({ where: { id: rankId } });
    if (!findRank) throw new HttpException(409, "Rank doesn't exist");

    await RankEntity.update(rankId, rankData);

    const updateRank: Rank = await RankEntity.findOne({ where: { id: rankId } });
    return updateRank;
  }

  public async deleteRank(rankId: number): Promise<Rank> {
    const findRank: Rank = await RankEntity.findOne({ where: { id: rankId } });
    if (!findRank) throw new HttpException(409, "Rank doesn't exist");

    await RankEntity.delete({ id: rankId });
    return findRank;
  }
}
