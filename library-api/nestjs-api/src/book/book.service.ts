import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class BookService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  create() {
    this.cacheManager.set('1', { book: 'Book Name' });
    return 'This action adds a new book';
  }

  findAll() {
    return `This action returns all book`;
  }

  findOne(id: string) {
    const resultCache = this.cacheManager.get(id);
    if(resultCache) {
      return resultCache;
    }
    return `This book key not exist on Redis.`;
  }

  update(id: number) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
