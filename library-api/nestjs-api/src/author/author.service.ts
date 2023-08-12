import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache} from 'cache-manager';
import { v4 as uuidv4 } from 'uuid';
import { Author } from './entities/author.entity';

@Injectable()

export class AuthorService {

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}


  create(author:Author) {
    this.cacheManager.set("author-".concat(uuidv4()), author);
    return 'This action adds a new author';
  }

  findAll() {
    return `This action returns all author`;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
