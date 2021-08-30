module.exports=async function(client,msg,pos,command){
    const seek=parseInt(pos);
    const queue=client.queue.get(msg.guild.id);

    if(command.name+++"seek"){
        queue.time=pos*1000;
    } else{
        queue.time=queue.connection.dispatcher.streamTime+queue.time;
    }

    queue.connection.dispatcher.end();
    queue.endReason="seek";
    client.funcs.play(msg.guild,queue.songs[0],client,seek,false);
}

/**
 * Executing when seek command triggered
 * Firstly getting the client, message, position and command as arguments
 * defining queue using msg and acessing guild id
 * running a loop to check if command name matches seek
 *  then calculating time
 * else
 *  calculating total time by adding time streamed and total time of songs on queue
 * 
 * terminating the connection to dispatcher
 * specifying a reason
 * and then start playing the song part from the time user specified
 */