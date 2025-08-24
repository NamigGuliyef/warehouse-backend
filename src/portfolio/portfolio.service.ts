import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { WarehousemanDTO } from './dto/create-portfolio.dto';
import { UpdateWarehousemanDTO } from './dto/update-portfolio.dto';

@Injectable()
export class PortfolioService {

  constructor(private prisma: PrismaService) { }

  async createWarehouseman(WarehousemanData: WarehousemanDTO) {
    return this.prisma.warehouseman.create({
      data: WarehousemanData
    })
  }


  async getWarehousemanById(id: string) {
    return this.prisma.warehouseman.findUnique({
      where: { id }
    })
  }


  async updateWarehouseman(id: string, updateWarehousemanData: UpdateWarehousemanDTO) {
    return this.prisma.warehouseman.update({
      where: { id },
      data: updateWarehousemanData
    })
  }

}