import { Expose, Transform } from 'class-transformer';
import { User } from 'src/users/user.entity';

// @Expose() -> make sure that the outgoing response will
// display the following
export class ReportDto {
  @Expose()
  id: number;

  @Expose()
  price: number;

  @Expose()
  year: number;

  @Expose()
  lng: number;

  @Expose()
  lat: number;

  @Expose()
  make: string;

  @Expose()
  model: string;

  @Expose()
  mileage: number;

  @Expose()
  approved: boolean;

  // obj -> is a reference to the original report entity
  // take the user.id property received and store it inside the userId field
  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
