import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  approved: boolean;

  @Column()
  price: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  lng: number;

  @Column()
  lat: number;

  @Column()
  mileage: number;

  // ManyToOne: make changes to the database, more specifically it will add a new
  // column (named "user_id") to the reports table associated with the id of the
  // user (obviously -.-')
  @ManyToOne(() => User, (user) => user.reports)
  user: User;
}
