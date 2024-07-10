import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { Service } from 'typedi';
import { EntityRepository, Repository } from 'typeorm';
import { SECRET_KEY } from '@config';
import { HttpException } from '@/exceptions/httpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { OfficerBioData, OfficerBioDataEntity } from '@/entities/officer.entity';

const createToken = (OfficerBioData: OfficerBioData): TokenData => {
  const dataStoredInToken: DataStoredInToken = { id: OfficerBioData.id };
  const secretKey: string = SECRET_KEY;
  const expiresIn: number = 60 * 60;

  return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
};

const createCookie = (tokenData: TokenData): string => {
  return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
};

@Service()
@EntityRepository()
export class AuthService extends Repository<OfficerBioDataEntity> {
  public async signup(OfficerBioDataData: OfficerBioData): Promise<OfficerBioData> {
    console.log(OfficerBioDataData);
    const findOfficerBioData: OfficerBioData = await OfficerBioDataEntity.findOne({ where: { email: OfficerBioDataData.email } });
    if (findOfficerBioData) throw new HttpException(409, `This email ${OfficerBioDataData.email} already exists`);

    const hashedPassword = await hash(OfficerBioDataData.password, 10);
    const createOfficerBioDataData: OfficerBioData = await OfficerBioDataEntity.create({ ...OfficerBioDataData, password: hashedPassword }).save();
    return createOfficerBioDataData;
  }

  public async login(OfficerBioDataData: OfficerBioData): Promise<{ cookie: string; officer: OfficerBioData; token: any }> {
    const officer: OfficerBioData = await OfficerBioDataEntity.findOne({
      where: { email: OfficerBioDataData.email },
      select: ['id', 'email', 'password', 'firstName', 'lastName', 'otherName', 'role'],
    });
    if (!officer) throw new HttpException(409, `This email ${OfficerBioDataData.email} was not found`);

    const isPasswordMatching: boolean = await compare(OfficerBioDataData.password, officer.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Password not matching');

    const token = createToken(officer);
    const cookie = createCookie(token);
    console.log(token, cookie);

    return { cookie, officer, token };
  }

  public async logout(OfficerBioDataData: OfficerBioData): Promise<OfficerBioData> {
    const officer: OfficerBioData = await OfficerBioDataEntity.findOne({ where: { email: OfficerBioDataData.email } });
    if (!officer) throw new HttpException(409, "Officer doesn't exist");

    return officer;
  }
}
