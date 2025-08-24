import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { WarehousemanDTO } from './dto/create-portfolio.dto';
import { UpdateWarehousemanDTO } from './dto/update-portfolio.dto';
import { PortfolioService } from './portfolio.service';


@ApiTags("Portfolio")
@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) { }



  @ApiOperation({ summary: "Yeni anbardar profili yarat" })
  @Post('dashboard/warehouseman')
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({
    schema: {
      type: "object", properties: {
        firstName: { type: "string", maxLength: 100, example: "Namiq" },
        lastName: { type: "string", maxLength: 100, example: "Quliyev" },
        email: { type: "string", format: "email", example: "namiq.quliyev@example.com" },
        phone: { type: "string", maxLength: 15, example: "+994 50 123 45 67" },
        profBackground: { type: "string", example: "Logistics Specialist" },
        technologyFocus: { type: "string", example: "Supply Chain Management" },
        experienceYears: { type: "string", maxLength: 50, example: "5" },
        managedProducts: { type: "string", example: "5K" },
        solvedLogistics: { type: "string", minimum: 0, example: "10" },
        efficiencyRate: { type: "string", minimum: 0, maximum: 100, example: "85" },
      }
    }
  })
  async createWarehouseman(@Body() warehousemanData: WarehousemanDTO) {
    return this.portfolioService.createWarehouseman(warehousemanData);
  }



  @ApiOperation({ summary: "Anbardar profilini elde et" })
  @HttpCode(HttpStatus.OK)
  @Get('dashboard/warehouseman/:id')
  async getWarehousemanById(@Param('id') id: string) {
    return this.portfolioService.getWarehousemanById(id);
  }



  @ApiOperation({ summary: "Anbardar profilini yenile" })
  @HttpCode(HttpStatus.OK)
  @Patch('dashboard/warehouseman/:id')
  @ApiBody({
    schema: {
      type: "object", properties: {
        firstName: { type: "string", maxLength: 100, example: "Namiq" },
        lastName: { type: "string", maxLength: 100, example: "Quliyev" },
        email: { type: "string", format: "email", example: "namiq.quliyev@example.com" },
        phone: { type: "string", maxLength: 15, example: "+994 50 123 45 67" },
        profBackground: { type: "string", example: "Logistics Specialist" },
        technologyFocus: { type: "string", example: "Supply Chain Management" },
        experienceYears: { type: "string", maxLength: 50, example: "5" },
        managedProducts: { type: "string", example: "5K" },
        solvedLogistics: { type: "string", minimum: 0, example: "10" },
        efficiencyRate: { type: "string", minimum: 0, maximum: 100, example: "85" },
      }
    }
  })
  async updateWarehouseman(@Param('id') id: string, @Body() updateWarehousemanData: UpdateWarehousemanDTO) {
    return this.portfolioService.updateWarehouseman(id, updateWarehousemanData);
  }
} 