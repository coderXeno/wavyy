module.exports={
    name: 'resume',
    alias: ["cnt"],
    usage: '',
    description: 'Resume the paused music Wavyy.',
    category: 'music',

    execute(msg,args,client,Discord,command){
        const queue=client.queue.get(msg.guild.id);
        
        if(!queue.paused)   return msg.channel.send(client.messages.notPaused);
        queue.paused=false;
        queue.connection.dispatcher.resume(true);

        return msg.channel.send(client.messages.resumed);
    }
};