package database

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)
var url = "mongodb://localhost:27017"
var dbName = "Mohmad"
var collectionName = "connect"
var Collection *mongo.Collection

func init()  {
clientOption:=options.Client().ApplyURI(url);
client,err:=mongo.Connect(context.TODO(),clientOption)
if err!=nil{
	log.Fatal("some issue in connecting to mongo db")
	
}
fmt.Print("Connected to MongoDB")
database:=client.Database(dbName)
Collection=database.Collection(collectionName)


}