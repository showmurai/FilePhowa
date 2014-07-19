package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.String(200, "pong")
	})
	r.GET("/someGet", getting)
	r.POST("/somePost", posting)
	r.PUT("/somePut", putting)
	r.DELETE("/someDelete", deleting)
	r.PATCH("/somePatch", patching)
	r.HEAD("/someHead", head)
	r.OPTIONS("/someOptions", options)

	// Listen and server on 0.0.0.0:8080
	r.Run(":9999")
}
