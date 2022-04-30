import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

@Controller('shopping-cart')
export class ShoppingCartController {
  @Get()
  async getShoppingCart(){

  }

  @Post()
  async addItem(){

  }

  @Put('/:id')
  async editItem(@Param('id', ParseIntPipe) id: number){

  }

  @Delete()
  async deleteItem(){

  }
}
