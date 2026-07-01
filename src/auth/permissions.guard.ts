import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from './require-permission.decorator';
import { Permission, RolePermissions } from './permissions';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.getAllAndOverride<Permission[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredPermissions?.length) return true;

    const request = context
      .switchToHttp()
      .getRequest<{ user?: { role?: string } }>();
    const user = request.user;
    if (!user) return false;

    const userRole: string = user.role ?? '';
    const userPermissions = RolePermissions[userRole] ?? [];

    if (userPermissions.includes(Permission.ALL)) return true;
    return requiredPermissions.every((p) => userPermissions.includes(p));
  }
}
