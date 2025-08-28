import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { WarehousemanDTO } from './dto/create-portfolio.dto';
import { CreateSkillDTO } from './dto/create-skill.dto';
import { CreateWorkExperienceDTO } from './dto/create-workexperience.dto';
import { UpdateWarehousemanDTO } from './dto/update-portfolio.dto';
import { UpdateSkillDTO } from './dto/update-skill.dto';
import { UpdateWorkExperienceDTO } from './dto/update-workexperience.dto';
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


  // İş təcrübəsi

  @ApiOperation({ summary: "Yeni iş təcrübəsi əlavə et" })
  @Post('dashboard/work-experience')
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({
    schema: {
      type: "object", properties: {
        company: { type: "string", maxLength: 100, example: "ABC Logistics" },
        position: { type: "string", maxLength: 100, example: "Warehouse Manager" },
        period: { type: "string", maxLength: 50, example: "2018-2022" },
        description: { type: "string", example: "Managed warehouse operations and logistics." },
        location: { type: "string", maxLength: 100, example: "Baku, Azerbaijan" },
        warehousemanId: { type: "string", example: "1234567890" },
      }
    }
  })
  async createWorkExperience(@Body() createWorkExperienceDTO: CreateWorkExperienceDTO) {
    return this.portfolioService.createWorkExperience(createWorkExperienceDTO);
  }



  @ApiOperation({ summary: "İş təcrübəsini əldə et" })
  @Get('dashboard/work-experience/:id')
  @HttpCode(HttpStatus.OK)
  async getWorkExperienceById(@Param('id') id: string) {
    return this.portfolioService.getWorkExperienceById(id);
  }


  @ApiOperation({ summary: "Bütün iş təcrübələrini əldə et" })
  @Get('dashboard/work-experience')
  @HttpCode(HttpStatus.OK)
  async getAllWorkExperiences() {
    return this.portfolioService.getAllWorkExperiences();
  }



  @ApiOperation({ summary: "İş təcrübəsini yenilə" })
  @Patch('dashboard/work-experience/:id')
  @HttpCode(HttpStatus.OK)
  @ApiBody({
    schema: {
      type: "object", properties: {
        company: { type: "string", maxLength: 100, example: "ABC Logistics" },
        position: { type: "string", maxLength: 100, example: "Warehouse Manager" },
        period: { type: "string", maxLength: 50, example: "2018-2022" },
        description: { type: "string", example: "Managed warehouse operations and logistics." },
        location: { type: "string", maxLength: 100, example: "Baku, Azerbaijan" },
        warehousemanId: { type: "string", example: "1234567890" },
      }
    }
  })
  async updateWorkExperience(@Param('id') id: string, @Body() updateWorkExperienceDTO: UpdateWorkExperienceDTO) {
    return this.portfolioService.updateWorkExperience(id, updateWorkExperienceDTO);
  }


  @ApiOperation({ summary: "İş təcrübəsini sil" })
  @Delete('dashboard/work-experience/:id')
  @HttpCode(HttpStatus.OK)
  async deleteWorkExperience(@Param('id') id: string) {
    return this.portfolioService.deleteWorkExperience(id);
  }



  // Bacarıqlar

  @ApiOperation({ summary: "Yeni bacarıq əlavə et" })
  @Post('dashboard/skills')
  @HttpCode(HttpStatus.CREATED)
  async createSkill(@Body() createSkillDTO: CreateSkillDTO) {
    return this.portfolioService.createSkill(createSkillDTO);
  }


  @ApiOperation({ summary: "Bacarıq əldə et" })
  @Get('dashboard/skills/:id')
  @HttpCode(HttpStatus.OK)
  async getSkillById(@Param('id') id: string) {
    return this.portfolioService.getSkillById(id);
  }


  @ApiOperation({ summary: "Bütün bacarıqları əldə et" })
  @Get('dashboard/skills')
  @HttpCode(HttpStatus.OK)
  async getAllSkills() {
    return this.portfolioService.getAllSkills();
  }


  @ApiOperation({ summary: "Bacarıq yenilə" })
  @Patch('dashboard/skills/:id')
  @HttpCode(HttpStatus.OK)
  async updateSkill(@Param('id') id: string, @Body() updateSkillDTO: UpdateSkillDTO) {
    return this.portfolioService.updateSkill(id, updateSkillDTO);
  }


  @ApiOperation({ summary: "Bacarıq sil" })
  @Delete('dashboard/skills/:id')
  @HttpCode(HttpStatus.OK)
  async deleteSkill(@Param('id') id: string) {
    return this.portfolioService.deleteSkill(id);
  }


}