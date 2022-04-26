import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entities/user.entity';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rahutami',
      database: 'socif_explore',
      entities: [
        User,
        Product
      ],
      synchronize: true,
    }),
    AuthModule,
    ProductsModule,
    ShoppingCartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
