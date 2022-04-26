import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async addNew(){

  }

  async update(){

  }

  async delete(){
    
  }
}
