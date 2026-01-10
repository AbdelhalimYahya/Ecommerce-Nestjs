import { Module } from "@nestjs/common";
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://wwwabdelhalem0987654321_db_user:ONlAZir846i6X1bS@cluster0.bpp2tha.mongodb.net/?appName=Cluster0"
const client = new MongoClient(uri);

@Module({
    providers: [
        {
            provide: "MONGODB",
            useFactory: async () => {
                await client.connect();
                return client.db();
            },
        },
    ],
    exports: [],
})
export class MongodbModule {}

// wwwabdelhalem0987654321_db_user
// ONlAZir846i6X1bS