import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './decorators/roles.decorator';
import { Role } from '../enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    if (!user) {
      throw new ForbiddenException({
        message: 'Forbidden resource',
        error: 'Forbidden',
        statusCode: 403,
      });
    }
    const userRoles = user.roles || []; // Add this line to handle the case when user.roles is undefined
    const hasRequiredRoles = requiredRoles.some((role) => userRoles.includes(role)); // Use userRoles instead of user.roles
    if (!hasRequiredRoles) {
      throw new ForbiddenException({
        message: 'Forbidden resource',
        error: 'Forbidden',
        statusCode: 403,
      });
    }
    return true;
  }
}