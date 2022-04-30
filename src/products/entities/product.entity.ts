import { User } from 'src/auth/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';

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

  @ManyToMany(() => User, (user) => user.productsBought)
  boughtBy: User[];

  @Column({
    name: 'uploader_id',
  })
  uploaderId: number;

  @ManyToOne(() => User, (user) => user.productsUploaded)
  @JoinColumn([
    { name: 'uploader_id', referencedColumnName: 'id' },
  ])
  uploadedBy: User;
}
