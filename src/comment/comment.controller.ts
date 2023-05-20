import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { PageDto, PageOptionsDto } from 'src/shared/dtos';
import { Comment } from './comment';

@Controller('comment')
@UseInterceptors(ClassSerializerInterceptor)
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Post()
  async create(@Body() body: CreateCommentDto) {
    return this.commentService.save(body);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll(
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<Comment>> {
    return this.commentService.getComments(pageOptionsDto);
  }
}
