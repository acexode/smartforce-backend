import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { DepartmentEntity } from '@entities/department.entity';
import { HttpException } from '@/exceptions/httpException';
import { Department } from '@interfaces/department.interface';

@Service()
@EntityRepository()
export class DepartmentService extends Repository<DepartmentEntity> {
  public async findAllDepartments(): Promise<Department[]> {
    const departments: Department[] = await DepartmentEntity.find();
    return departments;
  }

  public async findDepartmentById(departmentId: number): Promise<Department> {
    const findDepartment: Department = await DepartmentEntity.findOne({ where: { id: departmentId } });
    if (!findDepartment) throw new HttpException(409, "Department doesn't exist");

    return findDepartment;
  }

  public async createDepartment(departmentData: Department): Promise<Department> {
    const createDepartmentData: Department = await DepartmentEntity.create(departmentData).save();
    return createDepartmentData;
  }

  public async updateDepartment(departmentId: number, departmentData: Department): Promise<Department> {
    const findDepartment: Department = await DepartmentEntity.findOne({ where: { id: departmentId } });
    if (!findDepartment) throw new HttpException(409, "Department doesn't exist");

    await DepartmentEntity.update(departmentId, departmentData);

    const updateDepartment: Department = await DepartmentEntity.findOne({ where: { id: departmentId } });
    return updateDepartment;
  }

  public async deleteDepartment(departmentId: number): Promise<Department> {
    const findDepartment: Department = await DepartmentEntity.findOne({ where: { id: departmentId } });
    if (!findDepartment) throw new HttpException(409, "Department doesn't exist");

    await DepartmentEntity.delete({ id: departmentId });
    return findDepartment;
  }
}
