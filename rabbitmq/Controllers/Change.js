exports.initiateChange = (req,res) =>{
    let channel = req.app.get('channel')
    
    let data = {
        status:true,
        message:'Sent to Queue'
    }

    channel.sendToQueue('detectChange',Buffer.from(JSON.stringify(data)))
    res.json({
        status:true,
        message:'Sent to Queue'
    })

}