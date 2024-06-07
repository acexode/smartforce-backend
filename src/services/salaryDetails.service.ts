import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { SalaryDetails, SalaryDetailsEntity } from '@entities/salaryDetails.entity';
import { HttpException } from '@/exceptions/httpException';

@Service()
@EntityRepository()
export class SalaryDetailsService extends Repository<SalaryDetailsEntity> {
  public async findAllSalaryDetails(): Promise<SalaryDetails[]> {
    const salaryDetails: SalaryDetails[] = await SalaryDetailsEntity.find();
    return salaryDetails;
  }

  public async findSalaryDetailsById(salaryDetailsId: number): Promise<SalaryDetails> {
    const findSalaryDetails: SalaryDetails = await SalaryDetailsEntity.findOne({ where: { id: salaryDetailsId } });
    if (!findSalaryDetails) throw new HttpException(409, "Salary details doesn't exist");

    return findSalaryDetails;
  }

  public async createSalaryDetails(salaryDetailsData: SalaryDetails): Promise<SalaryDetails> {
    const createSalaryDetailsData: SalaryDetails = await SalaryDetailsEntity.create(salaryDetailsData).save();
    return createSalaryDetailsData;
  }

  public async updateSalaryDetails(salaryDetailsId: number, salaryDetailsData: SalaryDetails): Promise<SalaryDetails> {
    const findSalaryDetails: SalaryDetails = await SalaryDetailsEntity.findOne({ where: { id: salaryDetailsId } });
    if (!findSalaryDetails) throw new HttpException(409, "Salary details doesn't exist");

    await SalaryDetailsEntity.update(salaryDetailsId, salaryDetailsData);

    const updateSalaryDetails: SalaryDetails = await SalaryDetailsEntity.findOne({ where: { id: salaryDetailsId } });
    return updateSalaryDetails;
  }

  public async deleteSalaryDetails(salaryDetailsId: number): Promise<SalaryDetails> {
    const findSalaryDetails: SalaryDetails = await SalaryDetailsEntity.findOne({ where: { id: salaryDetailsId } });
    if (!findSalaryDetails) throw new HttpException(409, "Salary details doesn't exist");

    await SalaryDetailsEntity.delete({ id: salaryDetailsId });
    return findSalaryDetails;
  }
}
