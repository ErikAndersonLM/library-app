import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache} from 'cache-manager';
import { v4 as uuidv4 } from 'uuid';
import { Author } from './entities/author.entity';

@Injectable()

export class AuthorService {

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}


  create(author:Author) {
    this.cacheManager.set("author-".concat(uuidv4()), author);
    return {success: true, message: "Author created with succesfully."};
  }

  async findAll() {11
    const allKeys:string[] = await this.cacheManager.store.keys() as string[];
    const authorKeys = await allKeys.filter(item => item.includes("author"));
    const authorInformations = await Promise.all(authorKeys.map(key => this.cacheManager.get(key)));
    return authorInformations;
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