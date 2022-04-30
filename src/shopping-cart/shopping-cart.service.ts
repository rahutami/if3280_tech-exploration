import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { AddShoppingCartItemDto } from './dtos/add-shopping-cart-item.dto';
import { UpdateShoppingCartItem } from './dtos/update-shopping-cart-item.dto';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async addNew(item: AddShoppingCartItemDto){
    
  }

  async update(item: UpdateShoppingCartItem){

  }

  async delete(id: number){
    
  }
}
