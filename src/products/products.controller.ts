import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getAll() {
    return await this.productsService.getAll();
  }

  @Get('/:id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.productsService.getOne(id);
  }

  @Post()
  async create(@Body() body: CreateProductDto) {
    return this.productsService.create(body);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.productsService.delete(id);
  }

  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProductDto,
  ) {
    return await this.productsService.update(id, body);
  }
}
