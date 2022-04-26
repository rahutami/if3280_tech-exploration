import { User } from 'src/auth/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'name',
  })
  name: string;

  @Column()
  price: number;

  @Column({
    name: 'description',
  })
  description: string;

  @ManyToMany(() => User, (user) => user.products)
  users: User[];
}
