const { response, request } = require("express")
const express = require("express")
const uuid = require("uuid")
const cors = require("cors")
const port = 3001

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (request, response) => {
    response.send("Teste")
})

// const orders = []

// const checkUserId = (request, response, next) => {
//     const { id } = request.params
//     const index = orders.findIndex(order => order.id === id)
//     if (index < 0) return response.status(404).json({ error: "Order not found" })

//     request.userIndex = index
//     request.userId = id

//     next()
// }

// app.get("/order", (request, response) => {
//     return response.json(orders)
// })

// app.get("/order/:id", checkUserId, (request, response) => {
//     const index = request.userIndex

//     return response.json(orders[index])
// })

// app.post("/order", (request, response) => {
//     const { order, clientName, price } = request.body
//     const newOrder = { id: uuid.v4(), order, clientName, price, status: "Em preparação" }

//     orders.push(newOrder)

//     return response.status(201).json(newOrder)
// })

// app.put("/order/:id", checkUserId, (request, response) => {
//     const { order, clientName, price } = request.body
//     const index = request.userIndex
//     const id = request.userId

//     const updateOrder = { id, order, clientName, price, status: "Em preparação" }

//     orders[index] = updateOrder

//     return response.json(updateOrder)
// })

// app.delete("/order/:id", checkUserId, (request, response) => {
//     const index = request.userIndex

//     orders.splice(index, 1)

//     return response.json({ message: "Deleted Order" })
// })

// app.patch("/order/:id", checkUserId, (request, response) => {
//     const index = request.userIndex

//     orders[index].status = "Pronto"

//     return response.json(orders[index])
// })


app.listen(process.env.PORT || port, () => {
    console.log(`🚀️ Server started!`)
})