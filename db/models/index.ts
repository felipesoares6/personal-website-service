import path from "path";
import { Sequelize } from "sequelize";
import WorkExperience from "./work-experience.model";

const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, "../../../config.json"))[env];

interface Database {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
  WorkExperience: ReturnType<typeof WorkExperience>;
}

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable]!, config)
  : new Sequelize(config.database, config.username, config.password, config);

const db = {
  sequelize,
  Sequelize,
  WorkExperience: WorkExperience(sequelize),
} as Database;

Object.keys(db).forEach((modelName) => {
  if (
    db[modelName as keyof Database] &&
    "associate" in db[modelName as keyof Database]
  ) {
    (db[modelName as keyof Database] as any).associate(db);
  }
});

export default db;
