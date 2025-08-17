import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { PortfolioModule } from './portfolio/portfolio.module';

@Module({
  imports: [PrismaModule, PortfolioModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
