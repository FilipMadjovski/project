import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './image.entity';
import { CreateImageInput, UpdateImageInput } from './image.dto';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  async getImages(): Promise<Image[]> {
    return await this.imageRepository.find();
  }

  async getImage(id: number): Promise<Image | undefined> {
    return await this.imageRepository.findOneBy({ id });
  }

  async createImage(input: CreateImageInput): Promise<Image> {
    const image = this.imageRepository.create(input);
    return await this.imageRepository.save(image);
  }

  async updateImage(
    id: number,
    input: UpdateImageInput,
  ): Promise<Image | undefined> {
    await this.imageRepository.update(id, input);
    return await this.imageRepository.findOneBy({ id });
  }

  async deleteImage(id: number): Promise<Image | undefined> {
    const image = await this.imageRepository.findOneBy({ id });
    if (image) {
      await this.imageRepository.remove(image);
    }
    return image;
  }
}
