import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { WarehousemanDTO } from './dto/create-portfolio.dto';
import { UpdateSkillDTO, UpdateWarehousemanDTO } from './dto/update-portfolio.dto';
import { CreateWorkExperienceDTO } from './dto/create-workexperience.dto';
import { UpdateWorkExperienceDTO } from './dto/update-workexperience.dto';
import { CreateSkillDTO } from './dto/create-skill.dto';

@Injectable()
export class PortfolioService {

  constructor(private prisma: PrismaService) { }

  async createWarehouseman(WarehousemanData: WarehousemanDTO) {
    return this.prisma.warehouseman.create({
      data: WarehousemanData
    })
  }


  // Anbardar profili əldə et
  async getWarehousemanProfile() {
    return this.prisma.warehouseman.findMany()
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


  async createWorkExperience(createWorkExperienceData: CreateWorkExperienceDTO) {
    return this.prisma.workExperience.create({
      data: createWorkExperienceData
    })
  }


  async getWorkExperienceById(id: string) {
    return this.prisma.workExperience.findUnique({
      where: { id }
    })
  }


  async getAllWorkExperiences() {
    return this.prisma.workExperience.findMany()
  }


  async updateWorkExperience(id: string, updateWorkExperienceData: UpdateWorkExperienceDTO) {
    return this.prisma.workExperience.update({
      where: { id },
      data: updateWorkExperienceData
    })
  }


  async deleteWorkExperience(id: string) {
    return this.prisma.workExperience.delete({
      where: { id }
    })
  }


  // Bacarıqlar

  async createSkill(createSkillData: CreateSkillDTO) {
    return this.prisma.skills.create({
      data: createSkillData
    })
  }


  async getSkillById(id: string) {
    return this.prisma.skills.findUnique({
      where: { id }
    })
  }


  async getAllSkills() {
    return this.prisma.skills.findMany()
  }


  async updateSkill(id: string, updateSkillData: UpdateSkillDTO) {
    return this.prisma.skills.update({
      where: { id },
      data: updateSkillData
    })
  }


  async deleteSkill(id: string) {
    return this.prisma.skills.delete({
      where: { id }
    })
  }


}