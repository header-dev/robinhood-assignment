import { Injectable } from '@nestjs/common';
import { AbstractService } from '../shared/abstract.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comment';
import { PageOptionsDto } from 'src/shared/dtos';
import { PageDto } from '../shared/dtos/page.dto';
import { PageMetaDto } from '../shared/dtos/page-meta.dto';

@Injectable()
export class CommentService extends AbstractService {
  constructor(@InjectRepository(Comment) private readonly commentRepository) {
    super(commentRepository);
  }

  public async getComments(
    pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<Comment>> {
    const queryBuilder = this.commentRepository.createQueryBuilder('comments');

    queryBuilder
      .leftJoinAndSelect('comments.user', 'users')
      .orderBy('comments.createdAt', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  }
}
