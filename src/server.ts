import Fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import workExperienceRoutes from "./routes/work-experience.route";

const server: FastifyInstance = Fastify({});

// server.register(cors, {
//   origin: "http://localhost:5173", // Allow frontend domain
//   credentials: true, // Allow cookies
// });

// Register routes
server.register(workExperienceRoutes);

const start = async () => {
  try {
    await server.listen({ port: 3000, host: "0.0.0.0" });
    const address = server.server.address();
    console.log("Service is running on port", address);
  } catch (err) {
    console.log("error", err);
    server.log.error(err);
    process.exit(1);
  }
};

start();
