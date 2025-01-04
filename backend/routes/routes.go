package routes

import (
	"back/controller"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func Route() *mux.Router {
	route := mux.NewRouter()
	route.HandleFunc("/api/insert", controller.AddData).Methods("POST")
	route.HandleFunc("/api/get", func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode("Hello World");
	}).Methods("GET")
return route
}