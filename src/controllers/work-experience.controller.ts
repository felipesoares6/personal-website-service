import { FastifyRequest, FastifyReply } from "fastify";
import workExperienceService from "../services/work-experience.service";
import { ICreateWorkExperience } from "../types/work-experience.type";

class WorkExperienceController {
  async getAll(request: FastifyRequest, reply: FastifyReply) {
    const experiences = await workExperienceService.getAll();
    return experiences;
  }

  async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    const experience = await workExperienceService.getById(
      parseInt(request.params.id)
    );
    return experience;
  }

  async create(
    request: FastifyRequest<{ Body: ICreateWorkExperience }>,
    reply: FastifyReply
  ) {
    const experience = await workExperienceService.create(request.body);
    return experience;
  }

  async update(
    request: FastifyRequest<{
      Params: { id: string };
      Body: ICreateWorkExperience;
    }>,
    reply: FastifyReply
  ) {
    const experience = await workExperienceService.update(
      parseInt(request.params.id),
      request.body
    );
    return experience;
  }

  async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    const experience = await workExperienceService.delete(
      parseInt(request.params.id)
    );
    return experience;
  }
}

export default new WorkExperienceController();
