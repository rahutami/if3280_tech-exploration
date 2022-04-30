import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>){}

  async getAll(){
    return await this.productRepository.find();
  }

  async getOne(id: number){
    const productEntity = await this.productRepository.findOne(id);

    if(!productEntity) throw new NotFoundException()

    return productEntity;
  }

  async create(product: CreateProductDto, currentUser){
    const productEntity = this.productRepository.create({...product, uploaderId: currentUser.userId})

    return await this.productRepository.save(productEntity);
  }

  async delete(id: number, user){
    const productEntity = await this.productRepository.findOne({id, uploadedBy: user.userId});

    if (!productEntity) throw new NotFoundException();

    return await this.productRepository.delete({id});
  }

  async update(id: number, product: UpdateProductDto, user){
    const productEntity = await this.productRepository.findOne({
      id,
      uploadedBy: user.userId,
    });

    if (!productEntity) throw new NotFoundException();

    return await this.productRepository.save({
      id,
      ...product
    })
  }
}
