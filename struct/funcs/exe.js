module.exports=function(msg,args,client,Discord,command){
    const permissions=msg.channel.permissionsFor(msg.client.user);

    if(!permissions.has("EMBED_LINKS"))
        return msg.channel.send(client.messages.noPermsEmbed);

    if(!permissions.has("USE_EXTERNAL_EMOJIS"))
        return msg.channel.send(client.noPermsUseExternalEmojis);

    try{
        command.uses++;
        command.execute(msg,args,client,Discord,command);
    } catch(error){
        msg.reply(client.messages.errorExe);
        console.error(error);
    }
}

/**
 * accepting msg,client,Discord, command
 * storing permissions by accessing bot permissions from client
 * running loops to check if bot has required permissions
 *  if not prompting user to provide permissions
 * throwing in a try block to catch errors related to executing the specified command
 */