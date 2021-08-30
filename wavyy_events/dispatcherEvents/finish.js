module.exports = async function (client, reason, guild) {
    //Here we recover and store the guild id from the queue
    const queue = client.queue.get(guild.id);
    queue.playing = false;

    if (reason === 'seek') {
        return (queue.playing = true);
    }

    if (!queue.songLooping) {
        if (queue.looping) {
            queue.songs.push(queue.songs[0]);
        }

        queue.time = 0;
        queue.votes = 0;
        queue.voters = [];
        if (reason !== "replay") {
            if (reason === "previous") queue.songs.unshift(queue.prevSongs.pop());
            if (reason !== "previous") queue.prevSongs.push(queue.songs.shift());
        }
    }
}