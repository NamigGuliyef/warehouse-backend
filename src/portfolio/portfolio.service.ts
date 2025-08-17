import { Injectable } from '@nestjs/common';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PortfolioService {

  constructor(private prisma: PrismaService) { }


  async createPortfolio(createPortfolioData: CreatePortfolioDto): Promise<CreatePortfolioDto | { message: string }> {
    const portfolio = await this.prisma.portfolio.create({
      data: createPortfolioData,
    })

    if (portfolio) {
      return portfolio;
    }
    return { message: 'Portfolio artıq mövcuddur' };
  }
}