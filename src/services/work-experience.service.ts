import WorkExperience from "../../db/models/work-experience";
import { ICreateWorkExperience } from "../types/work-experience.type";

class WorkExperienceService {
  async getAll() {
    return WorkExperience.findAll();
  }

  async getById(id: number) {
    return WorkExperience.findByPk(id);
  }

  async create(data: ICreateWorkExperience) {
    return WorkExperience.create(data);
  }

  async update(id: number, data: ICreateWorkExperience) {
    const workExperience = await WorkExperience.findByPk(id);

    if (!workExperience) {
      throw new Error("Work experience not found");
    }

    return workExperience.update(data);
  }

  async delete(id: number) {
    const workExperience = await WorkExperience.findByPk(id);

    if (!workExperience) {
      throw new Error("Work experience not found");
    }

    return workExperience.destroy();
  }
}

export default new WorkExperienceService();
