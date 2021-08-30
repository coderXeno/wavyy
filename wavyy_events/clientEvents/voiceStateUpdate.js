const { execute } = require("./ready");

module.exports={
    name: 'voiceStateUpdate',
    async execute(client,oldState,newState){
        if(oldState.channel===null) return newState.setSelfDeaf(true);
        let change=false;

        const queue=client.queue.get(newState.guild.id);

        if(!queue) return;
        if(newState.member.id===client.user.id && oldState.member.id ===client.user.id){
            if(newState.member.voice.channel===null){
                queue.songs=[];
                queue.looping=false;
                queue.endReason="manual disconnect";
                return client.queue.delete(newState.guild.id);
            }
            if(newState.member.voice.channel!== queue.voiceChannel){
                change=true; //bot switches over from one voice channel to other
                queue.voiceChannel=newState.member.voice.channel; //storing the new voice channel in the queue
                queue.connection=newState.connection;
            }
        }

        if(oldState.channel.members.size===1 && oldState.channel===queue.voiceChannel || change){
            setTimeout(()=>{
                if(!queue || queue.connection.dispatcher || queue.connection.dispatcher==null) return;
                if(queue.voiceChannel.members.size===1){
                    queue.textChannel.send(client.messages.leftAlone);
                    queue.songs=[];
                    queue.looping=false;
                    queue.endReason="Timeout";
                    queue.connection.dispatcher.end();//terminating the connection with reason timeout and looping set to false and songs queue set back to 0
                }
            },120000);
        }
    }
}