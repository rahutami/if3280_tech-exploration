import { Exclude } from 'class-transformer';
import { Product } from 'src/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: number;

  @ManyToMany(() => Product, (product) => product.boughtBy)
  @JoinTable({
    name: 'shopping_cart',
  })
  productsBought: Product[];

  @OneToMany(() => Product, (product) => product.uploadedBy)
  productsUploaded: Product;
}
