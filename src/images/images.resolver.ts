import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ImageService } from './images.service';
import { CreateImageInput, UpdateImageInput } from './image.dto';

@Resolver('Image')
export class ImagesResolver {
  constructor(private readonly imageService: ImageService) {}

  @Query('images')
  async getImages() {
    return await this.imageService.getImages();
  }

  @Query('image')
  async getImage(@Args('id') id: number) {
    return await this.imageService.getImage(id);
  }

  @Mutation('createImage')
  async createImage(@Args('input') input: CreateImageInput) {
    return await this.imageService.createImage(input);
  }

  @Mutation('updateImage')
  async updateImage(
    @Args('id') id: number,
    @Args('input') input: UpdateImageInput,
  ) {
    return await this.imageService.updateImage(id, input);
  }

  @Mutation('deleteImage')
  async deleteImage(@Args('id') id: number) {
    return await this.imageService.deleteImage(id);
  }
}
