import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://wwwabdelhalem0987654321_db_user:ONlAZir846i6X1bS@cluster0.bpp2tha.mongodb.net/?appName=Cluster0'), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
