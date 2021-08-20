import { HttpException, HttpStatus } from '@nestjs/common';
export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}
export class NOTFoundException extends HttpException {
  constructor() {
    super('not found', HttpStatus.NOT_FOUND);
  }
}
