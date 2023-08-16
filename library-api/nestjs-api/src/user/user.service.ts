import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache} from 'cache-manager';
import { v4 as uuidv4 } from 'uuid';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  create(user:User) {
    this.cacheManager.set((user.email), user);
    return {success: true, message: "Usuário created with succesfully."};
  }

  async verifyLogin(user:User) {
    const result:User = await this.cacheManager.get(user.email);
    if(result){
      const resultPassword = result.password === user.password;
      return {success: resultPassword, message: resultPassword ? "Usuário logado" : "Senha incorreta.", emailUser: user.email};
    }
    return {success: false, message: "Usuário não existe"};
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
