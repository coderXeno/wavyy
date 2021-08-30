module.exports=async function(client,error,guild){
    const queue=client.queue.get(guild.id);
    console.error(error);
    queue.voiceChannel.leave();
    client.queue.delete(guild.id);
    
    return queue.textChannel.send(client.messages.errorDispatcher + `\`${error}\``);
};

//say the bot runs into an error
//it then leaves the voice channel its currently in
//deleted the current guild id in the queue and 
//sends an error message in a text channel