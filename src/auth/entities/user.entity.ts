import { Product } from 'src/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToMany(() => Product, (product) => product.users)
  @JoinTable({
    name: "shopping_cart"
  })
  products: Product[];
}
