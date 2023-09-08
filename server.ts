import * as express from "express" 
import { Express, Request, Response } from "express"

const app: Express = express()
const port: number = 3000

// Test route
app.get("/api", (_, res: Response) => {
	res.json({
		message: "Hello world",
	})
})

app.get("/verify/:token", (req: Request, res: Response) => {
	const token = req.params.token
	res.json({
		message: token,
	})
})

app.listen(port, (): void => {
	console.log(`Server is running on port ${port}`)
})
