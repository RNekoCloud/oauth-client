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

if (!proccess.env["VITE"]) {
	const frontEndFiles = proccess.cwd() + "/dist"
	app.use(express.static(frontEndFiles))
	app.get("/*", (_, res: Response) => {
		res.send(frontEndFiles + "./index.html")
	})

	app.listen(proccess.env["PORT"])
}


