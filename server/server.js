import express from "express";
import morgan from "morgan";
import fetch from "node-fetch";
const { OPENAI_API_KEY } = process.env;

const app = express();
const PORT = 8000;

app
	.use(express.json())
	.use(morgan("dev"))

	.post("/api/chat", async (req, res) => {
		const userInput = req.body.messages;
		try {
			const response = await fetch(
				"https://api.openai.com/v1/chat/completions",
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${OPENAI_API_KEY}`,
						"Content-type": "application/json",
					},
					body: JSON.stringify({
						model: "gpt-3.5-turbo",
						messages: [{ role: "user", content: userInput }],
						max_tokens: 100,
					}),
				}
			);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error("Error:", error);
		}
	})
	.get("*", (req, res) => {
		res.status(404).json({
			status: 404,
			message: "something went wrong",
		});
	});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
