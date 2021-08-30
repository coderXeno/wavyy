const {Client,Collection,Intents}=require("discord.js");
const fs=require("fs");
const path=require("path");
const events=require("../wavyy_events/events.js");
const myIntents=new Intents();

myIntents.add(
    1<<0,
    1<<7,
    1<<9
);

module.exports=class extends Client{
    constructor(){
        super({
            disableEveryone: true,
            disabledEvents: ["TYPING_START"],
            ws: {
                intents: myIntents
            }
        });

        this.commands=new Collection();
        this.commandAliases=new Collection();
        this.settingCmd=new Collection();
        this.queue=new Map();
        this.funcs={};
        this.dispatcher={};
        this.config=require("../config");
        this.messages=require("./config/messages");
        
        this.dispatcher.finish=require("../wavyy_events/dispatcherEvents/finish");
        this.dispatcher.error=require("../wavyy_events/dispatcherEvents/error");

        this.global={
            db: {
                guilds: {},
            },
        },

        fs.readdirSync(path.join(__dirname,"funcs")).forEach((filename)=>{
            this.funcs[filename.slice(0,-3)]=require(`./funcs/${filename}`);
        });

        const commandFiles=fs
            .readdirSync(path.join(path.dirname(__dirname),"commands"))
            .filter((f)=> f.endsWith(".js"));
        
        for(const file of commandFiles){
            const command=require(`../wavyy_commands/${file}`);
            command.uses=0;
            this.commands.set(command.name,command);
            this.commandAliases.set(command.alias,command);
        }

        events(this);

        this.login(this.config.token).catch((err)=>{
            console.log("Failed to login: "+err);
        });
    }
};