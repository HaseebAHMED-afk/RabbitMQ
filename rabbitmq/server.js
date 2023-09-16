const express = require('express')
const setupRabbitMQ = require("./config/ampq");

const app = express()

app.use(express.json())



setupRabbitMQ()

app.get('/' ,  async (req,res) =>{
    res?.json({
        status:true,
        message:'Server is up and running....'
    })
})


const channel = require('./Routes/Change')
app.use('/channel' , channel)

const startServer = async () =>{

    let { channel } = await setupRabbitMQ()
    app.set('channel' , channel)

    app.listen(5000 , ()=>{
        console.log('Server started on port 5000');
    })

}


startServer();