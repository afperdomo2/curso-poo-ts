import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
  validateOrReject,
} from 'class-validator';
import { AccessType, Category } from '../models/category.model';

export interface ICreateCategoryDto
  extends Omit<Category, 'id' | 'creationAt' | 'updatedAt'> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'Rop';
    dto.image = 'https://www.random-image.com';
    dto.access = AccessType.PRIVATE;
    await validateOrReject(dto);
    console.info('✅ Correct');
  } catch (error) {
    console.error(error);
  }
})();
