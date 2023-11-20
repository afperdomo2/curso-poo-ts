export enum AccessType {
  PRIVATE = 'private access',
  PUBLIC = 'public accesss',
}

export interface Category {
  id: number;
  name: string;
  image: string;
  access?: AccessType;
  creationAt: Date;
  updatedAt: Date;
}
