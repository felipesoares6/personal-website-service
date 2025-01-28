import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";

const server: FastifyInstance = Fastify({});

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          pong: {
            type: "string",
          },
        },
      },
    },
  },
};

server.get("/ping", opts, async (request, reply) => {
  return { pong: "it worked!" };
});

const start = async () => {
  try {
    await server.listen({ port: 3000, host: "0.0.0.0" });

    const address = server.server.address();
    console.log("Service is running on port", address);
    const port = typeof address === "string" ? address : address?.port;
  } catch (err) {
    console.log("error", err);
    server.log.error(err);
    process.exit(1);
  }
};

start();
