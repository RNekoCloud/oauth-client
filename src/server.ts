import express, { Express, Request, Response } from "express"

const app: Express = express()
const port: number = 3000

app.get("/api/v1", (req: Requst, res: Response) => {
	res.json({
		message: "API Version 1.0.0"
	})
})

app.listen(port, ():void => {
	console.log(`Server is running on port ${port}`)
})

