import express from "express"

const app = express()
const PORT = 4000

app.get('/', (req,res)=> {
    res.send("server is running fine")
})

app.listen(PORT, ()=> {
    console.log(`app running on port ${PORT}`)
})