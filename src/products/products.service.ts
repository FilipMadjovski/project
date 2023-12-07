import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductInput, UpdateProductInput } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return await this.productRepository.findOneBy({ id });
  }

  async createProduct(input: CreateProductInput): Promise<Product> {
    const product = this.productRepository.create(input);
    return await this.productRepository.save(product);
  }

  async updateProduct(
    id: number,
    input: UpdateProductInput,
  ): Promise<Product | undefined> {
    await this.productRepository.update(id, input);
    return await this.productRepository.findOneBy({ id });
  }

  async deleteProduct(id: number): Promise<Product | undefined> {
    const product = await this.productRepository.findOneBy({ id });
    if (product) {
      await this.productRepository.remove(product);
    }
    return product;
  }
}
