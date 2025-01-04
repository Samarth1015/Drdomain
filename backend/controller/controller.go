package controller

import (
	"back/database"
	"back/model"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	
)

func AddData(w http.ResponseWriter , r *http.Request){
	w.Header().Set("Content-Type","application/json")
	w.Header().Set("Allow-Control-Allow-Methods","POST")
	w.Header().Set("'Access-Control-Allow-Origin","*")
	fmt.Println("AddData")

	var data *model.Connect
	json.NewDecoder(r.Body).Decode(&data)
	

	database.Collection.InsertOne(context.Background(),data)
	json.NewEncoder(w).Encode("Thank you for contacting us!");

}