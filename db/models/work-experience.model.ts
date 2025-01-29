import { Model, DataTypes, Sequelize } from "sequelize";

interface WorkExperienceAttributes {
  id: number;
  jobTitle: string;
  companyName: string;
  companyDescription?: string;
  startDate: Date;
  endDate?: Date;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface WorkExperienceCreationAttributes
  extends Omit<WorkExperienceAttributes, "id"> {}

class WorkExperience extends Model<
  WorkExperienceAttributes,
  WorkExperienceCreationAttributes
> {
  declare id: number;
  declare jobTitle: string;
  declare companyName: string;
  declare companyDescription: string | null;
  declare startDate: Date;
  declare endDate: Date | null;
  declare description: string | null;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;

  static associate(models: any) {
    // define association here
  }
}

export default (sequelize: Sequelize) => {
  WorkExperience.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      jobTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyDescription: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "WorkExperience",
    }
  );
  return WorkExperience;
};
