module.exports={
    name: 'replay',
    alias: ["rp"],
    usage: '',
    description: 'Replay the currently play song Wavyy.',
    category: 'music',

    async execute(msg,args,client,Discord,command){
        const queue=client.queue.get(msg.guild.id);
        queue.endReason="replay";
        queue.connection.dispatcher.end();
    }
}