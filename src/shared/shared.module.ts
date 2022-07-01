import { ConfigService } from './services/config.service';
import { Module, Global } from '@nestjs/common';

const providers = [ConfigService];

@Global()
@Module({
  providers,
  exports: [...providers],
})
export class SharedModule {}
