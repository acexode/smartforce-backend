import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { UserEntity } from '@entities/users.entity';
import { HttpException } from '@/exceptions/httpException';
import { DataStoredInToken, RequestWithUser } from '@interfaces/auth.interface';
import { OfficerBioDataEntity } from '@/entities/officer.entity';
import { Roles } from '@/enums/role.enum';

const getAuthorization = req => {
  const cookie = req.cookies['Authorization'];
  if (cookie) return cookie;

  const header = req.header('Authorization');
  if (header) return header.split('Bearer ')[1];

  return null;
};

export const AuthMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const Authorization = getAuthorization(req);

    if (Authorization) {
      const { id } = (await verify(Authorization, SECRET_KEY)) as DataStoredInToken;
      const findUser = await OfficerBioDataEntity.findOne(id, { select: ['id', 'email', 'password', 'role'] });

      if (findUser) {
        req.user = findUser;
        next();
      } else {
        next(new HttpException(401, 'Wrong authentication token'));
      }
    } else {
      next(new HttpException(404, 'Authentication token missing'));
    }
  } catch (error) {
    next(new HttpException(401, 'Wrong authentication token'));
  }
};

export const AuthoriseRole = (Roles: Roles[]) => {
  return (req: RequestWithUser, res: Response, next: NextFunction) => {
    console.log(req.user, 'req user');
    try {
      const paramId = parseInt(req.params.id, 10);
      const officerId = req.body.officerId || (Array.isArray(req.body) && req.body[0]?.officerId);

      if (Roles.includes(req.user.role) || paramId === req.user.id || officerId === req.user.id) {
        return next();
      } else {
        return next(new HttpException(403, 'Unauthorized'));
      }
    } catch (error) {
      return next(new HttpException(401, 'Wrong authentication token'));
    }
  };
};
