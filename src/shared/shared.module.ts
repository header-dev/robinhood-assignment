import { CacheService } from './cache.service';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';

@Module({
  imports: [CacheModule.register()],
  providers: [CacheService],
  exports: [CacheModule, CacheService],
})
export class SharedModule {}
