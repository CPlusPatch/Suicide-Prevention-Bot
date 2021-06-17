/*

HEY! IF you're reading this, you clearly know how to code. Come help us! Join our discord: https://discord.gg/YHvfUqVgWS

MMMMMMMMMMMMMMMMMWNKK000KXNWMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMWKxo:;,''''',:ldONWMMMMMMMMMMMMM
MMMMMMMMMMMXkc'.            ..;o0WMMMMMMMMMMM
MMMMMMMMMNk;.                  ..lKWMMMMMMMMM
MMMMMMMMXo.      ...........     .,kWMMMMMMMM
MMMMMMMXl.   ..;lxO0KKKKK0Oxl;..   'xWMMMMMMM
MMMMMMWd.   .c0NMMMMMMMMMMMMMNx.    ,OWMMMMMM
MMMMMMK;    .lXMMMMMMMMMMMMMMXl.    .cXMMMMMM
MMMMMMk.     .oNMMMMMMMMMMMMNo.      ,0MMMMMM
MMMMMWx.      .dNMMMMMMMMMMNo.       ,0MMMMMM
MMMMMM0;       .oXMMMMMMMMXl.       .cXMMMMMM
MMMMMMWd.       .:0WMMMMWO;.        'kWMMMMMM
MMMMMMMXo.       .'dXMMNx'.        .oNMMMMMMM
MMMMMMMMXo.        .;dxc.         .oXMMMMMMMM
MMMMMMMMMNd.         ...        .'dNMMMMMMMMM
MMMMMMMMMMWk,.        .        .,kWMMMMMMMMMM
MMMMMMMMMMMW0c.               .:0WMMMMMMMMMMM
MMMMMMMMMMMMMXd'.            .oXMMMMMMMMMMMMM
MMMMMMMMMMMMMMWk'.           .dNMMMMMMMMMMMMM
MMMMMMMMMMMMMMNd.             .lXMMMMMMMMMMMM
MMMMMMMMMMMMMNd.               .:0WMMMMMMMMMM
MMMMMMMMMMMMNo.                 .,kWMMMMMMMMM
MMMMMMMMMMMNo.                   .'dNMMMMMMMM
MMMMMMMMMMNo.        ...'.         .oNMMMMMMM
MMMMMMMMMNo.         'ckKo.         .oNMMMMMM
MMMMMMMMWx.        .'kNWMNd'.        .oNMMMMM
MMMMMMMMK;         'kWMMMMWk,.       .lXMMMMM
MMMMMMMMNx,.      'kWMMMMMMW0;.     .oXMMMMMM
MMMMMMMMMWKc.   .'kWMMMMMMMMMKc.  .'xNMMMMMMM
MMMMMMMMMMMNk,..'kWMMMMMMMMMMMXo..:0WMMMMMMMM
MMMMMMMMMMMMWKl;kWMMMMMMMMMMMMMNkdXMMMMMMMMMM
MMMMMMMMMMMMMMNXWMMMMMMMMMMMMMMMMWMMMMMMMMMMM

*/









//required libraries and files
var lastMessage = null;
process
  .on('unhandledRejection', (reason, p) => {
    if (lastMessage != null) lastMessage.channel.send("```\nPromise Rejection: " + reason.stack + "\n```\nThis error occured in file " + reason.stack.split("\n")[1].split(/[\(\):]/)[1] + " on line " + reason.stack.split("\n")[1].split(/:/)[1] + ", column " + reason.stack.split("\n")[1].split(/:/)[2].split(")")[0])
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {

    if (lastMessage != null) lastMessage.channel.send("```\nException: " + err.stack + "\n```")
    console.error(err, 'Uncaught Exception caught');
  });


const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token, triggers, insults, langlist } = require('./config.json');
const Database = require('simplest.db');
const db = new Database({
  path: './data.json'
})


//Ready bot client ;)
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`); //let us know we're good to go
  setInterval(() => {
    client.user.setActivity(`chat for suicide. https://spbot.ml/ — ${client.guilds.cache.size} servers/${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users`, { type: 'LISTENING' }); //On init, add status
  }, 15500);
});

client.on('message', async message => { //Message event listener
  lastMessage = message;
  if (message.author.bot || message.channel.type === 'dm') return;
  if (db.get(`lang_${message.guild.id}`) == null) {
    db.set(`lang_${message.guild.id}`, 'en');
  }
  LCM = message.content.toLowerCase(); //Lower Case Message text
  const lang = db.get(`lang_${message.guild.id}`);
  const { suicidetitle, suicideauthor, suicidedescription, suicidefield1heading, suicidefield1, suicidefield2heading, suicidefield2, suicidefield3heading, suicidefield3, suicidefield4heading, suicidefield4, suicidefield5heading, suicidefield5, suicidefield6heading, suicidefield6, suicidefield7heading, suicidefield7, suicidefield8heading, suicidefield8, suicidefooter, insulttitle, insultauthor, insultdescription, dmembedtitle, dmembedauthor, dmembeddescription, dmembedfield1heading, dmembedfield1, dmembedfield2heading, dmembedfield2, dmembedfield3heading, dmembedfield3, dmembedfield4heading, dmembedfield4, dmembedfield5heading, dmembedfield5, dmembedfield6heading, dmembedfield6, dmembedfield7heading, dmembedfield7, dmembedfield8heading, dmembedfield8, dmembedfooter, infotitle, infoauthor, infodescription, infofield1heading, infofield1, infofield2heading, infofield2, infofield3heading, infofield3, infofield4heading, infofield4, infofooter, helpcommands, helplinks, helpauthor, helptitle, helpfield1heading, helpfield2heading, helpfield3heading, helpfield3, invitetitle, invitedescription, langstitle, langsauthor, langsfield1heading, langsfield1, bot2, bot3, bot4, wsping, rtping, pinging, addtoserver, nolang, langsus, mute2, mute3, dmmute2, dmmute3, dmmute4, dmmute5, mention, sent, seterror, } = require(`./lang/${lang}.json`);

  if (message.mentions.users.first() == client.user) {
    console.log("pinged");
    const suicide = new Discord.MessageEmbed()
      .setColor('#04d384')
      .setTitle(`${suicidetitle}`)
      .setAuthor(`${suicideauthor}`, 'https://spbot.ml/siround.png')
      .setDescription(`${suicidedescription}`)
      .addField(`${suicidefield1heading}`, `${suicidefield1}`, false)
      .addField(`${suicidefield2heading}`, `${suicidefield2}`, true)
      .addField(`${suicidefield3heading}`, `${suicidefield3}`, true)
      .addField(`${suicidefield4heading}`, `${suicidefield4}`, true)
      .addField(`${suicidefield5heading}`, `${suicidefield5}`, true)
      .addField(`${suicidefield6heading}`, `${suicidefield6}`, true)
      .addField(`${suicidefield7heading}`, `${suicidefield7}`, true)
      .addField(`${suicidefield8heading}`, `${suicidefield8}`, false)
      .setFooter(`${suicidefooter}`, 'https://spbot.ml/siround.png')

    message.channel.send(suicide);
  }


  //Map out the message
  if (db.get(`mute_${message.author.username}`)) return; //Check to see if you muted the bot (User side only)
  LCM = message.content.toLowerCase(); //Lower Case Message text
  LCM = LCM.replace(/\s\s+/g, '\t'); //regex for multiple spaces
  LCM = LCM.replace(/\$/g, "s") //Replace $ with s
  LCM = LCM.replace(/1/g, "i") //Replace 1 with i
  LCM = LCM.replace(/3/g, "e") //Replace 3 with e
  LCM = LCM.replace(/4/g, "a") //Replace 4 with a
  LCM = LCM.replace(/5/g, "s") //Replace 5 with s
  LCM = LCM.replace(/6/g, "g") //Replace 6 with g
  LCM = LCM.replace(/ñ/g, "n") //Replace ñ with n
  LCM = LCM.replace(/7/g, "t") //Replace 7 with t
  LCM = LCM.replace(/0/g, "o") //Replace 0 with o
  LCM = LCM.replace(/8/g, "b") //Replace 8 with b
  LCM = LCM.replace(/z/g, "s") //Replace z with s
  LCM = LCM.replace(/wanna/g, "want to") //Replace wanna with want to
  LCM = LCM.replace(/your/g, "👇")  //WHY
  LCM = LCM.replace(/ur/g, "your") //Replace ur with your
  LCM = LCM.replace(/👇/g, "your") //replace 👇 with your
  LCM = LCM.replace(/\-+/g, " ") //Replace - with <space> // DO NOT MERGE //
  LCM = LCM.replace(/\–+/g, " ") //Replace – with <space> // THESE THREE ARE DIFFERENT CHARACTERS //
  LCM = LCM.replace(/\—+/g, " ") //Replace – with <space> // DO NOT REPLACE //
  var commonElements = [];
  var parsedTriggers = triggers.map(x => x.replace(/\|/g, " *"))
  //console.log(parsedTriggers)
  parsedTriggers.forEach(trigger => {
    if (new RegExp(trigger, "g").test(LCM)) {
      commonElements.push(true)
    }
  })
  if (commonElements.length > 0) {
    console.log("Suicide Triggered")
    const suicide = new Discord.MessageEmbed()
      .setColor('#04d384')
      .setTitle(`${suicidetitle}`)
      .setAuthor(`${suicideauthor}`, 'https://spbot.ml/siround.png')
      .setDescription(`${suicidedescription}`)
      .addField(`${suicidefield1heading}`, `${suicidefield1}`, false)
      .addField(`${suicidefield2heading}`, `${suicidefield2}`, true)
      .addField(`${suicidefield3heading}`, `${suicidefield3}`, true)
      .addField(`${suicidefield4heading}`, `${suicidefield4}`, true)
      .addField(`${suicidefield5heading}`, `${suicidefield5}`, true)
      .addField(`${suicidefield6heading}`, `${suicidefield6}`, true)
      .addField(`${suicidefield7heading}`, `${suicidefield7}`, true)
      .addField(`${suicidefield8heading}`, `${suicidefield8}`, false)
      .setFooter(`${suicidefooter}`, 'https://spbot.ml/siround.png')
    return message.author.send(suicide).catch(e => { message.channel.send(suicide) });

  }
  var args = LCM.trim().split(/ +/);
  args = args.map(x => x.replace(/\t/g, ""))
  if (commonElements.length < 1) {
    var parsedInsultTriggers = insults.map(x => x.replace(/\|/g, " *"))
    //console.log(parsedTriggers)
    parsedInsultTriggers.forEach(trigger => {
      if (new RegExp(trigger, "g").test(LCM)) {
        commonElements.push(true)
      }
    })
    if (commonElements.length > 0) {
      const insult = new Discord.MessageEmbed()
        .setColor('#04d384')
        .setTitle(`${insulttitle}`)
        .setAuthor(`${insultauthor}`, 'https://spbot.ml/siround.png')
        .setDescription(`${insultdescription}`)
      message.channel.send(insult).catch(console.err)
      console.log("Insult Triggered")
    };
    return
  }

  //Mention bot will activate aleart message without triggers

});


client.on('message', async message => { //Message event listener
  lastMessage = message;
  if (message.author.bot || message.channel.type === 'dm') return;
  if (db.get(`lang_${message.guild.id}`) == null) {
    db.set(`lang_${message.guild.id}`, 'en');
  }
  LCM = message.content.toLowerCase(); //Lower Case Message text
  const lang = db.get(`lang_${message.guild.id}`);
  const { suicidetitle, suicideauthor, suicidedescription, suicidefield1heading, suicidefield1, suicidefield2heading, suicidefield2, suicidefield3heading, suicidefield3, suicidefield4heading, suicidefield4, suicidefield5heading, suicidefield5, suicidefield6heading, suicidefield6, suicidefield7heading, suicidefield7, suicidefield8heading, suicidefield8, suicidefooter, insulttitle, insultauthor, insultdescription, dmembedtitle, dmembedauthor, dmembeddescription, dmembedfield1heading, dmembedfield1, dmembedfield2heading, dmembedfield2, dmembedfield3heading, dmembedfield3, dmembedfield4heading, dmembedfield4, dmembedfield5heading, dmembedfield5, dmembedfield6heading, dmembedfield6, dmembedfield7heading, dmembedfield7, dmembedfield8heading, dmembedfield8, dmembedfooter, infotitle, infoauthor, infodescription, infofield1heading, infofield1, infofield2heading, infofield2, infofield3heading, infofield3, infofield4heading, infofield4, infofooter, helpcommands, helplinks, helpauthor, helptitle, helpfield1heading, helpfield2heading, helpfield3heading, helpfield3, invitetitle, invitedescription, langstitle, langsauthor, langsfield1heading, langsfield1, bot2, bot3, bot4, wsping, rtping, pinging, addtoserver, nolang, langsus, mute2, mute3, dmmute2, dmmute3, dmmute4, dmmute5, mention1, sent, seterror, } = require(`./lang/${lang}.json`);



  // BEGIN COMMANDS AREA
  //Ping command
  const loading = client.emojis.cache.get("838616104687108117");
  if (LCM === '(ping' || LCM === ')ping' || LCM === '\\ping' || LCM === '~ping' || LCM === '|ping' || LCM === '!ping' || LCM === '?ping' || LCM === '.ping' || message.content === '$ping' || LCM === '%ping' || LCM === '-ping' || LCM === '--ping' || LCM === '=ping' || LCM === '+ping' || LCM === '_ping' || LCM === '/ping' || LCM === '&ping' || LCM === '--ping' || LCM === "`ping" || LCM === 'sp!ping') {
    await message.channel.send(`${loading} ${pinging}`).then(async (msg) => {
      const ping = new Discord.MessageEmbed() //No need to be translated!
        .setColor('#04d384')
        .addField(`${rtping}`, `${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms`)
        .addField(`${wsping}`, `${Math.round(client.ws.ping)}ms`)
        .setFooter(addtoserver)
      await msg.edit(ping);
      await msg.edit("\u200B");
    }).catch(error => {
      console.log(error);
    })
    return;
  }

  //Command handler: Return if not prefixed
  if (!LCM.startsWith(prefix)) return;
  const arguments = LCM.slice(prefix.length).trim().split(' ');
  const command = arguments.shift().toLowerCase();

  //Bot info command
  if (['bot'].includes(command) || ['neofetch'].includes(command) || ['v'].includes(command)) {
    const cpuemoji = client.emojis.cache.get("837909574966968371");
    const pcemoji = client.emojis.cache.get("837909575034339369");
    const hddemoji = client.emojis.cache.get("837909575101448244");
    const ramemoji = client.emojis.cache.get("837909575415234590");
    const logoemoji = client.emojis.cache.get("832187920676421672");
    const os = require('os');
    const core = os.cpus()[0];
    const { version: djsversion } = require("discord.js");
    const { version } = require('./config.json');
    const bot = new Discord.MessageEmbed() //No need to be translated!
      .setColor('#04d384')
      .setFooter(bot2)
      .addField('General', [
        `**❯ ${bot3}** ${client.user.tag} (${client.user.id})`,
        `**❯ ${bot4}** ${client.guilds.cache.size.toLocaleString()} `,
        '\u200b'
      ])
      .addField('System', [
        `**❯ ${pcemoji}:** ${Math.floor(client.uptime / 86400000)}d ${Math.floor(client.uptime / 3600000) % 24}hr ${Math.floor(client.uptime / 60000) % 60}min ${Math.floor(client.uptime / 1000) % 60}sec`,
        `**❯ ${hddemoji}:** ${os.platform()},${os.release()}`,
        `**❯ ${cpuemoji}:**`,
        `\u3000 ${core.model}`,
        `\u3000 ${os.cpus().length} x ${core.speed}MHz`,
        `**❯ ${ramemoji}:** ${Math.floor(((os.freemem()) / 10000000)) / 100}GiB/${Math.floor(((os.totalmem()) / 10000000)) / 100}GiB`,
        `**❯ Bot:**`,
        `\u3000 Node.js: ${process.version}`,
        `\u3000 Discord.js: v${djsversion}`,
        `\u3000 ${logoemoji}: v${version}`,
      ])
      .setTimestamp();
    message.channel.send(bot);

    //Info command
  } else if (['info'].includes(command)||['bilgi'].includes(command)) {
    const info = new Discord.MessageEmbed()
      .setColor('#04d384')
      .setAuthor(infoauthor, 'https://spbot.ml/siround.png')
      .setTitle(infotitle)
      .setURL('https://spbot.ml')
      .setThumbnail('https://spbot.ml/siround.png')
      .addField(infofield1heading, infofield1)
      .addField(infofield2heading, infofield2)
      .addField(infofield3heading, infofield3)
      .addField(infofield4heading, infofield4)
      .setImage('https://spbot.ml/sc2.png')
      .setFooter(infofooter)
    message.channel.send(info);


    //Help command
  } else if (['help'].includes(command)||['yardım'].includes(command)) {
    const help = new Discord.MessageEmbed()
      .setColor('#04d384')
      .setAuthor(helpauthor, 'https://spbot.ml/siround.png')
      .setTitle(helptitle)
      .setURL('https://spbot.ml')
      .addField(helpfield1heading, helpcommands)
      .addField(helpfield2heading, helplinks)
      .addField(helpfield3heading, helpfield3)
    message.channel.send(help);

    //Invite command
  } else if (['invite'].includes(command)||['davet'].includes(command)) {
    const invite = new Discord.MessageEmbed()
      .setColor('#04d384')
      .setTitle(invitetitle)
      .setURL('https://spbot.ml/')
      .setDescription(invitedescription)
      .setImage('https://www.spbot.ml/suicideicon.png')
    message.channel.send(invite);







    //Mute command
    //main mute command
  } else if (['mute'].includes(command)||['sustur'].includes(command)) {
    if (db.get(`mute_${message.author.username}`) === message.author.id) {
      db.delete(`mute_${message.author.username}`)
      message.channel.send(mute2) //"Removed from ignore list"
    } else {
      db.set(`mute_${message.author.username}`, `${message.author.id}`)
      message.channel.send(mute3) //"I will now ignore your trigger words"
    }

    //dm mute command
  } else if (['dmmute'].includes(command)||['ömsustur'].includes(command)) {
    if (db.get(`dmmute_${message.author.username}`) === message.author.id) {
      db.delete(`dmmute_${message.author.username}`)
      message.channel.send(dmmute2)
    } else {
      db.set(`dmmute_${message.author.username}`, `${message.author.id}`)
      message.channel.send(dmmute3)
    }

    //Dm Command
  } else if (['dm'].includes(command)||['öm'].includes(command)) {
    let mention = message.mentions.users.first();

    if (!mention) return message.channel.send(mention1); // checking if message don't have a user mention
    if (db.get(`dmmute_${message.author.username}`)) return message.channel.send(dmmute5); //Check to see if you muted the bot (User side only)
    message.channel.send(sent);
    //dm embed ADD THIS. 
    const dmembed = new Discord.MessageEmbed()
      .setColor('#04d384')
      .setTitle(`${dmembedtitle}`)
      .setURL('https://spbot.ml/')
      .setImage('https://www.spbot.ml/suicideicon.png')
      .setAuthor(`${dmembedauthor}`, 'https://spbot.ml/siround.png')
      .setDescription(`${dmembeddescription}`)
      .addField(`${dmembedfield1heading}`, `${dmembedfield1}`, false)
      .addField(`${dmembedfield2heading}`, `${dmembedfield2}`, true)
      .addField(`${dmembedfield3heading}`, `${dmembedfield3}`, true)
      .addField(`${dmembedfield4heading}`, `${dmembedfield4}`, true)
      .addField(`${dmembedfield5heading}`, `${dmembedfield5}`, true)
      .addField(`${dmembedfield6heading}`, `${dmembedfield6}`, true)
      .addField(`${dmembedfield7heading}`, `${dmembedfield7}`, true)
      .addField(`${dmembedfield8heading}`, `${dmembedfield8}`, false)
      .setFooter('I care about you. Please try to give the helplines just one chance. I know you can make it through this. Report a bug: https://discord.gg/YHvfUqVgWS. Website: https://spbot.ml/. Type sp!dmmute to prevent others from telling me to send you DMs', 'https://spbot.ml/siround.png')

    mention.send(dmembed).catch(e => {
      message.channel.send(dmmute4); //If dm command has an error
    });

    //Change language command
  } else if (['set'].includes(command)||['ayarla'].includes(command)) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: | ${seterror}`); //Checks to see if you have admin perms

    //English
    if (arguments[0] === 'english' || arguments[0] === 'en') {
      db.delete(`lang_${message.guild.id}`);
      return message.channel.send(langsus); //"Language successfully changed!"
      //Spanish
    } else if (arguments[0] === 'spanish' || arguments[0] === 'espanol' || arguments[0] === 'sp') {
      db.set(`lang_${message.guild.id}`, 'sp');
      return message.channel.send(langsus);
      //Hindi
    } else if (arguments[0] === 'hindi' || arguments[0] === 'हिंदी' || arguments[0] === 'hi') {
      db.set(`lang_${message.guild.id}`, 'hi');
      return message.channel.send(langsus);
    }else if (arguments[0] === 'turkish' || arguments[0] === 'türk' || arguments[0] === 'tr') {
      db.set(`lang_${message.guild.id}`, 'tr');
      return message.channel.send(langsus);
      //Hindi
    } else if (arguments[0] === 'chinese' || arguments[0] === '中文' || arguments[0] === 'cn') {
      db.set(`lang_${message.guild.id}`, 'cn');
      return message.channel.send(langsus);
      //Hindi
    } else {
      message.channel.send(nolang); //"That language is not supported. To see all languages use the command sp!lang"
      return;
    }

    //See all languages
  } else if (['lang'].includes(command)) {
    const langs = new Discord.MessageEmbed()
    .setColor('#04d384')
    .setTitle(langstitle)
    .setAuthor(langsauthor)
    .setDescription(langlist)
    .setURL('https://spbot.ml/')
    .addField(langsfield1heading, langsfield1)
    .setImage('https://www.spbot.ml/suicideicon.png')
  message.channel.send(langs);
  }
});

//And... client login...
client.login(token);



/* JOIN US on our Discord: https://discord.gg/YHvfUqVgWS.

Bot developers:

  Bobrobot1#1408
  CactusKing101#2624
  Killerjet101#7638
  pengu#1111
  HAHALOSAH#4627

Message from developers:

  There is always hope, and even if the world seems dark right now, I know that anyone can make it through this.


                .=%+.
              .....=%%*=:.
            .........--=+*#*-
           ................:+#+
         .....................=%+.
        ........................=%*.
      ............................=%*.
     ...............................=%*:       ::      .===.
    ..................................=%#-  +#*=+##- :##-:-+#-
   -:.................................:+%%%@@-....-#@@@:....:+%=
   %%=.........:-....................*@#+=+%@*:.....-#@#-.....:+%=
    *@=........+@#:.................=@#.....=%@+:.....-#@#-.....:+%+
     @%:........-%%-................:%@=......=%@+:.....-#@#-.....:+%+
     #@:.........-@%:.........::.....:#@%=......=%@+:.....-#@#-.....:+%+.
     +@:..........*@+.........*@*:.:+%@%%@%=......=%@+:.....-#@#-.....:+@+.
     =@-..........=@*..........=#@*#@+...:*@%=......=%@+:.....-#%:......:+@+.
     .@=..........#@=....==......=*@@-.....:*@%=......=%@+:...............:+@+
      *@-........+@*.....+@%=......=%@*:.....:*@%=......=%@+................:+%+
       *@*:.....:#@#-.....:+@%=......=%@*:.....:*@%=......=+:.................:+%+
        :#@+:.....-#@#-.....:+@%=......=%@*:.....:*@%=..........................:+%:
          :#@+:.....-#@#-.....:+@%=......=%@*:.....:*@+...........................-@:
            :#@+:.....-#@#-.....:+@%=......=%@*:...................................##
              :#@+:.....-%@#-.....:+@%=......#@@*:.................................#@:
                :%@+:....-@@@#-.....:+@%=:.:+@+:+@*:...............................:*@+:
                  -#@+:..+@=.+@#-.....#@%@%%*:    +@*:...............................:*=
                    :*@*#@-    +@#=--*@+           .*@*:..............................
                      .-=        -+#+-               :#@*:............................
                                        :*@%######****#@%@*:.........................
                                       *@+:.....:-====-..-#@*:......................
                                       *%+=:...............-##:...................
                                        .=*#%%*+=:...............................
                                             .:=*#%%*+-:........................
                                                   .:=*#%#*++++**##%*:........
                                                          :--=--::::+@*:....
                                                                      +%*.
*/
