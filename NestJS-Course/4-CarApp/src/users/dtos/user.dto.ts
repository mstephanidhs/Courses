import { Expose } from 'class-transformer';
// Expose -> do share this property

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;
}
