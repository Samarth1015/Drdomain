package main

import (
	"back/routes"
	"net/http"
	"github.com/gorilla/handlers"

	
)

func main() {
	route:=routes.Route();
	http.ListenAndServe(":8080", handlers.CORS(
		handlers.AllowedOrigins([]string{"*"}),
		handlers.AllowedMethods([]string{"GET","POST","PUT","DELETE","OPTIONS"}),
		handlers.AllowedHeaders([]string{"Content-Type","Authorization","X-Requested-With"}),
	)(route));
}
