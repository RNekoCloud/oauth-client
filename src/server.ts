import { Express, Request, Response } from "express"
import * as express from "express"

const path = require("path")

const app: Express = express()
const port: number = 3000

app.get("/api/v1", (req: Request, res: Response) => {
	res.json({
		message: "API Version 1.0.0",
		success: true,
		status: 200
	})
})

app.listen(port, ():void => {
	console.log(`Server is running on port ${port}`)
})

