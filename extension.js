(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }
    
    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "Lietuvos-Botas",
        language: "english",
        chatLink: "https://rawgit.com/mantas7779/basicBot/master/lang/lt.json",
        startupCap: 50, // 1-200
        startupVolume: 15, // 0-100
        startupEmoji: true, // true or false
        maximumAfk: 10000000,
        afkRemoval: false,
        maximumDc: 120,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: false,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 15,
        timeGuard: true,
        maximumSongLength: 6.30,
        autodisable: false,
        commandCooldown: 10,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
            ["zanras", "Daina yra absurdiška. "],
            ["op", "Daina yra per dažnai leidžiama šiame kambaryje. "],
            ["history", "Ši daina neseniai grojo. "],
            ["nsfw", "Daina kurią paleidote buvo NSFW (erotika arba per daug keiksmažodžių). "],
            ["negroja", "Daina kurią paleidote negroja. "]
        ],
        afkpositionCheck: 0,
        afkRankCheck: "user",
        motdEnabled: false,
        motdInterval: 6,
        motd: "@everyone čia UŽ LIETUVĄ skype grupė prieinama visiems https://join.skype.com/mFvUty4eBXDO",
        filterChat: false,
        etaRestriction: true,
        welcome: true,
        opLink: null,
        rulesLink: "http://prntscr.com/bb3yr8",
        themeLink: null,
        fbLink: "https://www.facebook.com/Už-Lietuvą-630256890371211",
        youtubeLink: null,
        website: null,
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
