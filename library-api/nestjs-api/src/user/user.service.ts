import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache} from 'cache-manager';
import { v4 as uuidv4 } from 'uuid';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  create(user:User) {
    this.cacheManager.set("user-".concat(uuidv4()), user);
    return {success: true, message: "Usuário created with succesfully."};
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
