const express = require("express")
PORT = 8080
const app = express()
app.use(express.static("www"))
app.use(express.json())
const router = express.Router()
app.use("/api", router)
router.get("/hello", (req,res) => {
	res.json({"msg":"hello world!!!"})
})

router.get("/test", (req,res) => {
	res.json({"msg":"this is a test."})
})



app.listen(PORT, () => {
	console.log("Server is up and running!!")
})
