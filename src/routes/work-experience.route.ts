import { FastifyInstance } from "fastify";
import WorkExperienceController from "../controllers/work-experience.controller";

export default async function workExperienceRoutes(fastify: FastifyInstance) {
  fastify.get("/work-experience", WorkExperienceController.getAll);
  fastify.get("/work-experience/:id", WorkExperienceController.getById);
  fastify.post("/work-experience", WorkExperienceController.create);
  fastify.put("/work-experience/:id", WorkExperienceController.update);
  fastify.delete("/work-experience/:id", WorkExperienceController.delete);
}
