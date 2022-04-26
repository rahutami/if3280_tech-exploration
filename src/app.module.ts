import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

@Module({
  imports: [AuthModule, ProductsModule, ShoppingCartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
