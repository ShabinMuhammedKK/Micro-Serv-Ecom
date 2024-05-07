import nats from "node-nats-streaming";

console.clear()


const stan = nats.connect("gadgstore","abc",{
    url:"http://localhost:4222",
})

stan.on("connect",()=>{
    console.log("publisher connected to NATS");


    const data = JSON.stringify({
        id:"123",
        name:"iphone",
        price: 29
    });

    stan.publish('order:created',data,()=>{
        console.log("event published")
    })
})