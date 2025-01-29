export interface IWorkExperience {
  id?: number;
  jobTitle: string;
  companyName: string;
  companyDescription?: string;
  startDate: Date;
  endDate?: Date;
  description?: string;
}

export interface ICreateWorkExperience extends Omit<IWorkExperience, "id"> {}
