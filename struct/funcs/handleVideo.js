const Discord=require("discord.js");
const ytdl=require("ytdl-core");

/**
 * requiring modules Discord and ytdl
 * defining an asynchronous function accepting resource,message,voice channel,client,playlist and type as arguments
 * storing resource in a varibale plus logging an error if failed
 * defining song using props title,url,author,type,info
 * getting queue by accessing guild id
 * pushing the song to queue, logging the success to a textchannel
 *  also define message to replace a certain song in queue with the specified song
 *  logging the message to the user
 * defining construct with various user friendly properties 
 * pushing the song to construct
 * throwing in a try block to log any errors faced and also join the voiceChannel and define the connection
 * Then start playing
 */

module.exports= async function(resource,msg,voiceChannel,client,playlist,type){
    const songInfo=await ytdl.getInfo(resource).catch(err => console.log(err));

    const song={
        title: Discord.Util.escapeMarkdown(songInfo.videoDetails.title),
        url: resource,
        author: msg.author,
        type: type,
        info: songInfo.videoDetails
    };

    const queue=client.queue.get(msg.guild.id);

    if(queue){
        queue.songs.push(song);
        queue.textChannel=msg.channel;
        if(playlist) return;
        let message;
        message=client.messsages.songAdded.replace("%TITLE%",song.title);
        return msg.channel.send(message);
    }

    const construct={
        textChannel: msg.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        prevSongs: [],
        volume: 50,
        bass: 1,
        nightCore: false,
        playing: false,
        paused: false,
        looping: false,
        songLooping: false,
        votes: 0,
        voters: [],
        votesNeeded: 100,
        time:0,
        endReason: null,
    };

    construct.songs.push(song);
    client.queue.set(msg.guild.id,construct);

    try{
        const connection=await voiceChannel.join();
        construct.connection=connection;
        client.funcs.play(msg.guild,construct.songs[0],client,0,true);
    } catch(error){
        client.queue.delete(msg.guild.id);
        return msg.channel.send(client.messsages.error+error);
    }
    return;
};