import db from "../../db/models";
import { ICreateWorkExperience } from "../types/work-experience.type";

class WorkExperienceService {
  async getAll() {
    return db.WorkExperience.findAll();
  }

  async getById(id: number) {
    return db.WorkExperience.findByPk(id);
  }

  async create(data: ICreateWorkExperience) {
    return db.WorkExperience.create(data);
  }

  async update(id: number, data: ICreateWorkExperience) {
    const workExperience = await db.WorkExperience.findByPk(id);

    if (!workExperience) {
      throw new Error("Work experience not found");
    }

    return workExperience.update(data);
  }

  async delete(id: number) {
    const workExperience = await db.WorkExperience.findByPk(id);

    if (!workExperience) {
      throw new Error("Work experience not found");
    }

    return workExperience.destroy();
  }
}

export default new WorkExperienceService();
