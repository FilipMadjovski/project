import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './products.service';
import { CreateProductInput, UpdateProductInput } from './product.dto';

@Resolver('Product')
export class ProductsResolver {
  constructor(private readonly productService: ProductService) {}

  @Query('products')
  async getProducts() {
    return await this.productService.getProducts();
  }

  @Query('product')
  async getProduct(@Args('id') id: number) {
    return await this.productService.getProduct(id);
  }

  @Mutation('createProduct')
  async createProduct(@Args('input') input: CreateProductInput) {
    return await this.productService.createProduct(input);
  }

  @Mutation('updateProduct')
  async updateProduct(
    @Args('id') id: number,
    @Args('input') input: UpdateProductInput,
  ) {
    return await this.productService.updateProduct(id, input);
  }

  @Mutation('deleteProduct')
  async deleteProduct(@Args('id') id: number) {
    return await this.productService.deleteProduct(id);
  }
}
