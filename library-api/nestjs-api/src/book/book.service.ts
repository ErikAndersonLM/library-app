import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache} from 'cache-manager';
import { v4 as uuidv4 } from 'uuid';
import { Book } from 'src/book/entities/book.entity';


@Injectable()

export class BookService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  create(book: Book) {
    this.cacheManager.set("book-".concat(uuidv4()), book);
    
    return 'This action adds a new book';
  }

  findAll() {
    console.log("chegou aq");
    const result = this.cacheManager.get("book-all");
    return result;
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
