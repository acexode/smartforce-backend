import { Router } from 'express';
import { UserController } from '@controllers/users.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class UserRoute implements Routes {
  public path = '/users';
  public router = Router();
  public user = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.user.getUsers);
    this.router.get(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.user.getUserById);
    this.router.post(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], ValidationMiddleware(CreateUserDto), this.user.createUser);
    this.router.put(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], ValidationMiddleware(CreateUserDto, true), this.user.updateUser);
    this.router.delete(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.user.deleteUser);
  }
}
