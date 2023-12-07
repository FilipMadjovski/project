import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'; // Import the new ApolloDriver

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apolloConfig: ApolloDriverConfig = {
    driver: ApolloDriver,
    // Your ApolloServer options go here
    // For example, if you had autoSchemaFile in your previous configuration:
    autoSchemaFile: 'schema.gql',
  };

  await app.register(ApolloDriver.register(apolloConfig));

  await app.listen(3000);
}

bootstrap();
