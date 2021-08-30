const {emojis}=require("../../config.js");

//  Scroll down below to get detailed descriptions of what I have done

/**
 * Basically exporting emojis and tasks to do when certain event commands are triggered
 * A Red X when pause button pressed while music is already paused 
 * A Red X when someone tries to vote for multiple times from the same account before the cooldown ends
 * A megaphone which announces the song before it starts playing
 * A green check mark if user decides to stop the auto announce songs prop
 * A green check mark if user decides to rerun the auto announce songs prop
 * A volume high emoji when user applies a specfied bass level
 * A green check mark if bass level is set to false
 * A green check mark if bass level is set by user
 * A Red X mark when user defines an invalid boolean value 
 * A Red X mark if user selects the option of cancelling video
 * A Red X mark if user tries to skip to the song already playing!
 * A green check mark if user adds a channel to the blacklist
 * A Red X if user tries to add a pre existing blacklisted channel once again 
 * A green check mark if user removes a channel from blacklist
 * A red X for correct usage and display the correct usage
 * A lousdspeaker emoji for displaying the current bass level
 * A speaker emoji for displaying the current default volume
 * A speaker emoji for displaying the correct nightcore setting
 * Displaying the current prefix
 * A loudSound wmoji for The current volume level 
 * A Red X for displaying the minimum limit for volume
 * A Red X for displaying whether a user enters an invalid volume level
 * A green check mark to confirm the change to the new specified level
 * A Red X for turning on Developer Mode! That's only for me lol!
 * A red X to display message to disable nightcore 
 * Display the dispatcher error
 * A Red X to display the error occurred
 * A Red X to show error connecting to voice channel
 * Display error detected!
 * A Red X to show that an error occurred with the dispactcher while playing the music
 * A Red X to show error while using a command
 * Command Alias 
 * Display prefix and help together to the user to prompt them to run help for info
 * help 
 * No one using the bot so auto disconnect the bot from the voice channel
 * A loading emoji to confirm that specified song is loading
 * A Repeat Emoji if user specifies to rewind the entire queue
 * A Repeat Song emoji if user specifies to rewind a specific song
 * A Red X if max bass level exceeded!
 * A Red X if max volume level exceeded!
 * A Red X if user fails to mention a channel but specifies a command where mentioning a channel is mandatory
 * A green check if Nightcore specified to (true/false).
 * A Repeat emoji if user specifies not to loop the queue anymore
 * A Repeat emoji if user specifies not to loop the song anymore
 * A Repeatsong emoji if bot faces errors connecting to voice channels due to lack of permissions
 * A Red X if bot faces embedding links due to lack of permissions
 * A Red X if bot faces errors managing server roles due to lack of permissions
 * A Red X if bot faces errors speaking in voice channels due to lack of permissions
 * A Repeatsong emoji if bot faces errors in embedding external emojis due to lack of permissions
 * A Red X if bot couldnt find a previous song
 * A Red X if user doesnt use a link or search
 * A Red X if bot cant find the song the user specified
 * A Red X if no song is playing
 * A Red X if song doesnt exist
 * A Red X if queue is empty
 * A Notes emoji if bot starts to play the specified song
 * Now Playing
 * A paused emoji for when paused
 * A new song gets added to the queue
 * The specified bass is negative or invalid
 * The specified volume is negative or invalid
 * A number input by the user and selecting the result
 * Prompt the user to provide a song position in queue
 * Playing the song and title
 * display songs in queue
 * user specifies a position that is not in the queue
 * song queue
 * The full limit daily is reached
 * Resuming music after pause
 * Removed a specified song from queue
 * The seeking point is specified invalid
 * The seeking point for a song specified greater than length of the song LOL
 * Setting the volume to specified point
 * Shuffling positions of songs in queue
 * Skipping a song
 * A song specified through title gets added to the queue
 * song selection
 * Start Playing the song
 * stop the music
 * invalid number entered
 * bot in a channel, user in another, bot specifies error of different channels
 */

module.exports={
    emojis: emojis,

    alreadyPaused: emojis.redx + "The music is already paused!!",

    alreadyVoted: emojis.redx+ "You have already voted to skip!",

    announceSongs: emojis.megaPhone+"Current Setting:",

    announceSongsFalse: emojis.green_check_mark+"announcesongs now set to `false`!",

    announceSongsTrue: green_check_mark+ +"announcesongs now set to `true`!",

    bassApplied: emojis.volumeHigh +"The bass level **%BASS%** has been applied!!",

    bassFalse: emojis.green_check_mark+"Bass is now false!",

    bassLevel: emojis.green_check_mark+"Bass level is now",

    boolean: emojis.redx+"Please define a correct value! (true/false)",

    cancellingVideoSelection: emojis.redx+"Cancelling video selection",

    cantSkipToCurrent: emojis.redx+"You cant skip to the song currently playing",

    channelAdded: emojis.green_check_mark+"Channel %CHANNEL% added to the blacklist",

    channelAlreadyBlackListed: emojis.redx+"That channel is already blacklisted!",

    channelFull: emojis.redx+"Your voice channel is full",

    channelNotBlackListed: emojis.redx+"Nicee..That channel is not blacklisted!",

    channelRemoved: emojis.green_check_mark +"Channel %CHANNEL% has been removed from the blacklist",

    correctUsage: emojis.redx+" correct usage: ",

    currentBass: emojis.loudSound + "The current bass is: ",

    currentDefaultBass: emojis.speaker +"Correct default bass level: ",

    currentDefaultVolume: emojis.speaker +"Current Default volume is: ",

    currentNightCore: emojis.speaker +"Correct Nightcore setting",

    currentPrefix: "Current prefix: ",

    currentVolume: emojis.loudSound +"The current Volume is: ",

    defaultVolumeMax: emojis.redx+ "The default volume must not be below `100` for quality and safety reasons",

    defaultVolumeNumber: emojis.redx+ "I'm sorry, but the default volume has to be a valid __number__",

    defaultVolumeSet: emojis.green_check_mark +"Default Volume set to",

    devMode: emojis.redx+ "Dev mode has been turned o! Commands are available only to devs",

    disableNightCore: emojis.redx +"Please disable Nightcore in order to use this command!",

    dispatcherError: "Error with the dispatcher: ",

    error: emojis.redx+"An error occurred.\n Error: ",

    errorConnecting: "Error with connecting to voice channel!",

    errorDetected: "Error detected!",

    errorDispatcher: emojis.redx+ "An error has occurred while playing the music! The queue was deleted.\nError:",

    errorExe: emojis.redx+ "there was an error trying to execute that command",

    helpCmdFooter: "Command Alias: ",

    helpFooter: ' "5PREFIX%help <command>" to see more information about a command ',

    helpTitle: "help",

    leftAlone: "I have left the channel as no one was playing songs..sniff..sniff",

    loadingSongs: emojis.loading+"Loading song",

    looping: emojis.repeat +"Looping the whole queue now!",

    loopingSong: emojis.repeatSong+"Looping %TITLE% now!",

    maxBass: emojis.redx +"The max bass is `100`!",

    maxVolume: emojis.redx+ "The max volume is `100`!",

    mentionChannel: emojis.redx+ "Please mention a channel",

    nightCoreApplied: emojis.green_check_mark +"Nightcore is now **%BOOLEAN5** this will be applied when the next song starts playing!",

    noLooping: emojis.repeat +"No longer looping the queue!",

    noLoopingSong: emojis.repeatSong + "No Longer looping the song!",

    noPermsConnect: emojis.repeatSong + "I cannot connect to your voice channel, make sure I have the proper permissions!!!!",

    noPermsEmbed: emojis.redx +"I cannot send (Embed links), make sure I have the proper permissions",

    noPermsManageRoles: emojis.redx+"I cannot create (Manage roles), make sure I have the proper permissions! I will need this permission to create a `Music Lover` role since I did not get one",

    noPermsManageSettings: emojis.redx +"You need the `MANAGE_SERVER` permission to change the settings!",

    noPermsSpeak: emojis.redx+"I cannot speak in your voice channel, make sure I have the proper permissions!",

    noPermsUseExternalEmojis: emojis.redx+"I cannot embed external emojis, make sure I have the right permissions",

    noPreviousSongs: emojis.redx + "No previous songs!",

    noQuery: emojis.redx +"you need to use a link or search for a song!",

    noResults: emojis.redx+"I could not obtain any search results for the song you stated",

    noServerQueue: emojis.redx+ "There is nothing playing",

    noSongs: emojis.redx+ "That song does not exist!",

    noSongsInQueue: emojis.redx+"There are no songs in the queue!",

    noPlayingDesc: emojis.notes+"**Now Playing: **",

    notEnoughVotes: emojis.redx+"Not enough votes!",

    notPaused: emojis.redx+ "The music is not paused!",

    noVoiceChannel: emojis.redx+"I'm sorry but you need to be in a voice channel",

    nowPlaying: "__Now Playing__",

    paused: emojis.pause+"Paused the song!!",

    playlistAdded: emojis.green_check_mark+"**%TITLE%** has been added to the queue!",

    positiveBass: emojis.redx+ "The bass needs to be a positive number",

    positiveVolume: emojis.redx+"The volume needs to be a positive number",

    provideANumber: "Please provide a number ranging from 1-10 to select ne of the results.",

    provideASong: emojis.redx+"Please provide a song position in queue for me to remove!",

    queueDesc: "**Now Playing: ** %SONG%<a:aNotes:674602408105476106>\n:arrow_down: Next in queue :arrow_down:",

    queueFooter: "songs in the queue!",

    queueLength: emojis.redx+"There are only %SONGS% song(s) in the queue!",

    queueTitle: "__Song queue__",

    quotaReached: emojis.redx+"Quota reached please try again after midnight IST",

    removed: emojis.garbage+"removed %SONG% from the queue!",

    resumed: emojis.resume+"Resumed the music!",

    seekingPointPositive: emojis.redx+"The seeking point needs to be a positive number",

    seekMax: emojis.redx+"The length of this song is %LENGTH% seconds! You can't seek further than that!",

    setVolume: emojis.volumeHigh+"I set the volume to: ",

    shuffled: emojis.shuffle +"Queue Shuffled!",

    skipped: emojis.skip +"Skipped the song!",

    songAdded: emojis.green_check_mark+"%TITLE% has been added to the queue!",

    songsAdded: emojis.green_check_mark+"%AMOUNT% songs added to the queue!",

    songSelection: "__Song Selection__",

    startPlaying: emojis.notes+"Start playing: ",

    stop: emojis.stop+"Stopped the music!",

    validNumber: emojis.redx+"I'm sorry, but you need to enter a valid __number__",

    wrongVoiceChannel: emojis.redx+"I'm sorry but you need to be in the same channel as I am to use this command!",
}