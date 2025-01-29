import { DataTypes, Model } from "sequelize";
import db from "..";

class WorkExperience extends Model {
  public id!: number;
  public jobTitle!: string;
  public companyName!: string;
  public companyDescription!: string;
  public startDate!: Date;
  public endDate!: Date | null;
  public description!: string;
}

WorkExperience.init(
  {
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
    sequelize: db.sequelize,
    modelName: "WorkExperience",
  }
);

export default WorkExperience;
