import express from "express"

import cors from "cors"
import morgan from "morgan"

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

let latestData = null

app.post("/", (req, res) => {
  latestData = req.body
  res.json({status: `you just got a status!`})
})

app.get('/', (req, res) => {
  res.json(latestData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})