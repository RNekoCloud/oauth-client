import * as express from "express" 
import { Express, Request, Response } from "express"

const paht = require("path")

const app: Express = express()
const port: number = 3000

app.use("/assets", express.static(path.join(__dirname, "dist")))

// Test route
app.get("/api", (_, res: Response) => {
	res.json({
		message: "Hello world",
	})
})

app.get("/verify/:token", (req: Request, res: Response) => {
	const token = req.params.token
	// Serving React Route
})

app.get("*", (_, res: Response) => {
	res.sendFile(path.join(__dirname "/dist/index.html"))
})

app.listen(port, (): void => {
	console.log(`Server is running on port ${port}`)
})
