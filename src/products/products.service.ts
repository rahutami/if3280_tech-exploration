import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  async create(product: CreateProductDto){
    const productEntity = this.productRepository.create(product)

    return await this.productRepository.save(productEntity);
  }

  async delete(id: number){
    const productEntity = await this.productRepository.findOne(id);

    if (!productEntity) throw new NotFoundException();

    return await this.productRepository.delete({id});
  }

  async update(id: number, product: UpdateProductDto){
    const productEntity = await this.productRepository.findOne(id);

    if (!productEntity) throw new NotFoundException();

    return await this.productRepository.save({
      id,
      ...product
    })
  }
}
