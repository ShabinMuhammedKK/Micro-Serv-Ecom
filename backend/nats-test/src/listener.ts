import nats from "node-nats-streaming";

console.clear()

const stan = nats.connect("gadgstore","123",{
    url:"http://localhost:4222",
})

stan.on("connect",()=>{
    console.log("listener connected to NATS");

    const subscription = stan.subscribe('order:created');

    subscription.on('message',(msg)=>{
        console.log("message recieved")
    })

})