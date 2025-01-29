import fs from "fs";
import path from "path";
import { DataTypes, Sequelize, Dialect } from "sequelize";

interface Config {
  use_env_variable?: string;
  database?: string;
  username?: string;
  password?: string;
  host?: string;
  dialect: string;
  [key: string]: any;
}

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, "../../config.json"))[
  env
] as Config & {
  dialect: Dialect;
};

interface DB {
  [key: string]: any;
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
}

const db: DB = {
  sequelize: null!,
  Sequelize: Sequelize,
};

let sequelize: Sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]!, config);
} else {
  sequelize = new Sequelize(
    config.database || "",
    config.username || "",
    config.password || "",
    config
  );
}

// Change directory path to models
const modelsPath = path.join(__dirname, "models");
fs.readdirSync(modelsPath)
  .filter((file: string) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".ts" &&
      file.indexOf(".test.ts") === -1
    );
  })
  .forEach((file: string) => {
    // Update model require path
    const model = require(path.join(modelsPath, file))(sequelize, DataTypes);
    if (model && model.name) {
      db[model.name] = model;
    }
  });

// Add null check for associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName] && db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

export default db;
