import { Express, Response } from "express"
import * as express from "express"

export const app: Express = express()

app.get("/api/v1", (_, res: Response) => {
	res.json({
		message: "API Version 1.0.0",
		success: true,
		status: 200,
	})
})


