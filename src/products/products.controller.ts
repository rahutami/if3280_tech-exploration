import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/current-user';
import { User } from 'src/auth/entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
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
  @UseGuards(JwtAuthGuard)
  async create(@Body() body: CreateProductDto, @CurrentUser() user) {
    return this.productsService.create(body, user);
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id', ParseIntPipe) id: number, @CurrentUser() user) {
    return await this.productsService.delete(id, user);
  }

  @Put('/:id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProductDto,
    @CurrentUser() user: User,
  ) {
    return await this.productsService.update(id, body, user);
  }
}
