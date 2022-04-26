import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Product])],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService]
})
export class ShoppingCartModule {}
