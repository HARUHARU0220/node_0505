import express from "express";
const routing =express.Router()


routing.get("/",(req,res)=>{
    res.json({
        msg: "new order"
    })
})

routing.post("/", (req,res)=>{

    const newOrder = {
        id: req.body.orderId,
        password: req.body.orderPassword
    }

    res.json({
        msg: "create order",
        result: newOrder
    })
})

routing.put("/",(req,res)=>{
    res.json({
        msg:"update order"
    })
})

routing.delete("/",(req,res)=>{
    res.json({
        msg:"delete order"
    })
})

export default routing

