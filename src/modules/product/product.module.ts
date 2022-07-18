import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product, ProductSchema } from '../../models/product.model';
import { User, UserSchema } from '../../models/user.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]), MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
