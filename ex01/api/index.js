import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.send("Bem-vindo ao Express de Arthur Levy")
})

app.listen(3000)