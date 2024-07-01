import { Request } from 'express';
import { OfficerBioData } from '@/entities/officer.entity';

export interface DataStoredInToken {
  id: number;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithUser extends Request {
  user: OfficerBioData;
}
