//Base bot discord :
const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "h.";

function game1(){
    client.user.setActivity("Besoin d'aide ? " + prefix + "help");
    setTimeout(game2, 30000);
};

function game2(){
    client.user.setActivity(`NotSoBotHelper By FilEeaZaiR | Trexus`);
    setTimeout(game3, 30000);
};

function game3(){
    client.user.setActivity(`Create by two people`);
    setTimeout(game4, 5000);
};

function game4(){
    client.user.setActivity(`Who are tired of the original bot help`);
    setTimeout(game1, 5000);
};

//Login + connexion du bot :
client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log("Connexion en cours ...");
    setTimeout(game1, 30000);
});

client.on(`message`, message =>{

    if(message.content === prefix + "help") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes du bot "NotSoBot"\n\n`,
        ":clipboard: " + prefix + "tags :" + ` Voir la catégorie "Tags" !\n\n` +
        ":tada: " + prefix + "fun :" + ` Voir la catégorie "Fun" !\n\n` +
        ":underage: " + prefix + "nsfw :" + ` Voir la catégorie "NSFW" !\n\n` +
        ":information_source: " + prefix + `info : ` + `Voir la catégorie "Utility/Info" !\n\n` +
        ":helmet_with_cross: " + prefix + `roles : ` + `Voir la catégorie "Roles" !\n\n` +
        ":grinning: " + prefix + `welcome : ` + `Voir la catégorie "Welcome Messages"\n\n` +
        ":tired_face: " + prefix + `leave : ` + `Voir la catégorie "Leave Messages"\n\n` +
        ":page_facing_up: " + prefix + `pager : ` + `Voir la catégorie "Pager"\n\n` +
        ":red_car: " + prefix + `tracking : ` + `Voir la catégorie "Message Tracking"\n\n` +
        ":tools: " + prefix + `admin : ` + `Voir la catégorie "Administration/Modération"\n\n` +
        ":clipboard: " + prefix + `blacklist : ` + `Voir la catégorie "Blacklisting"\n\n` +
        ":computer: " + prefix + `toggling : ` + `Voir la catégorie "Command Toggling"\n\n` +
        ":exclamation: " + prefix + `prefix : ` + `Voir la catégorie "Prefix"\n\n`)
        .setFooter("Commande d'aide générale - By FilEeaZaiR")
        .setTimestamp()
        message.channel.send(help_embed);
    }

    if(message.content === prefix + "tags" || message.content === "#") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Tags" du bot "NotSoBot"\n\n`, 
        `1. View a tag           : .tag <tag_name> <tag_args>` +
        `\n\n2. Create a tag         : .tag create <tag_name> <tag_content>` +
        `\n\n3. Remove a tag         : .tag remove <tag_name>` +
        `  \n1. Remove all tags    : .tag remove all` +
        `\n\n4. Edit a tag           : .tag edit <tag_name> <edited_tag_content>` +
        `\n\n5. List all your tags   : .tag list <@discord_user>*or a users` +
        `  \n1. List all tags      : .tag list all` +
        `\n\n6. View tags owner      : .tag owner <tag_name>` +
        `\n\n7. View a tag raw       : .tag view/raw <tag_name>` +
        `\n\n8. View a tag raw       : .tag raw2 <tag_name> in a code block` +
        `\n\n10. Random Tag          : .tag random` +
        `\n\n11. Search Tags         : .tag search <tag_name>` +
        `  \n1. Search for a tag   : .tag search content <text> using tag content` +
        `\n\n12. (^)Force remove     : .tag forceremove <tag_name> a tag` +
        `\n\n13. Gift a tag/transfer : .tag gift <tag_name> <@discord_user> ownership` +
        `\n\n14. View a global tag   : .tag global <tag_name>`)
        .setFooter(`Commande d'aide catégorie "Tags" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }

    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `1. Apply Magik to Image : .magik <image> <image(s)>
        \n2. Apply Magik to GIF   : .gmagik <gif> or <image>
        \n3. React                : .react <message_id>* <text/emoji(s)>
        \n4. Bad Meme (Imgur)     : .badmeme
        \n5. Random 4chan post    : .chan <board>
        \n6. Text Wall            : .textwall/twall <text>
        \n7. Aesthetics           : .aesthetics <text>
        \n8. ASCII                : .ascii <text>
        \n9. Image to ASCII       : .iascii <image>
        \n10. GIF to ASCII        : .gascii <gif> <liquid_rescale>
        \n11. RIP Generator       : .rip <text> <text2>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `\n12. Urban Dictionary    : .urban <word>
        \n13. Triggered GIF       : .triggered <image>
          1. Triggered Image    : .triggered2 <image>
          2. Triggered2 Image   : .triggered3 <image>
        \n14. Resize Image        : .resize <1-8/size> <image>-- You can split top and bottom text using a | divider.
        \n15. Meme                : .meme <image> <top_text> <bottom_text>
        \n16. Reverse Text        : .reverse/r <text>
        \n17. Identify Image/Gif  : .identify <url>
        \n18. Merge Images        : .merge <images (>= 2)>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `\n\n-- <text> argument IS required.
        \n19. Turn Text into      : .emojify/efy <background (default: 😂)> <foreground (default: 🅱)> <text> emojis
            1. Vertical Emoji   : .emojify vertical/v same args Arrangement
        \n20. Tone of Text        : .tone/toe <text>
        \n21. Huge Discord Emoji/ : .e/emoji <:emoji(s):> (if > 1, emojis merge) <ios/emojione>* (type of emoji) <size|10-2048> Twitch/Frankerz
        \n22. Steam Emoji         : .se/steamemoji <:steam_emoji:>23. Add eyes to a face  : .eyes <image-face>
        1. Spongebob : .eyes spongebob <image-face>
        2. Big Eye : .eyes big <image-face>
        3. Small Eye : .eyes small <image-face>
        4. Money : .eyes money <image-face>
        5. Bloodshot : .eyes blood <image-face>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `24. Word Cloud          : .wordcloud/wc <max_messages>* <image (custom mask)>
        25. Watermark           : .watermark <image> <watermark_image>
        -- Aliases can be accesed by removing "say".
        26. Cow                 : .cowsay <text>
          1. Mech               : .mechsay <text>
          2. Pony               : .ponysay <text>
          3. Dino               : .dinosay <text>
          4. Sheep              : .sheepsay <text>
          5. Flaming Sheep      : .flamingsheepsay <text>
          6. Apt                : .aptsay <text>
          7. Moofasa            : .moofasasay <text>
          8. Sodomized Sheep    : .sodomizedsheepsay <text>
          9. Bong               : .bongsay <text>
          10. Beavis            : .beavissay <text>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        ` 11. Tux               : .tuxsay <text>
          12. Duck              : .ducksay <text>
          13. Elephant          : .elephantsay <text>
          14. Eyes              : .eyessay <text>
          15. Milk              : .milksay <text>
          16. Moose             : .moosesay <text>
          17. Mutilated Cow     : .mutilatedsay <text>
          18. Chicken           : .cocksay <text>
          19. Head in Ass       : .headinass <text>
          20. Cheese            : .cheesesay <text>
          21. Gopher (Go)       : .gophersay <text>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `36. WaaW                : .waaw <image>
        37. HaaH                : .haah <image>
        38. WooW                : .woow <image>
        39. HooH                : .hooh <image>
        40. Flip                : .flip <image>
        41. Flop                : .flop <image>
        42. Regional Emote Text : .regional <text>
        43. WebMD               : .webmd <question>
        44. Wasted              : .wasted <image>
        45. 4Chan Green Text    : .green <text>
        46. Rainbow             : .rainbow <image>
        47. Waves               : .wave <image>
        48. Wall                : .wall <image>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `49. Rotate              : .rotate <degree> <image>
        50. Layer               : .layer <image>
        51. Multiply            : .multiply/multi <image>
        52. Multiply and Rotate : .multiply2/multi2 <image>
        53. Dice                : .dice <image>
        54. Shake               : .shake <image>
        55. Spin                : .spin <image>
        56. Scramble            : .scramble <image>
        57. Scramble 2          : .scramble2 <image> (No Rotation)
        58. Who Did This        : .whodidthis/wdt <image>
        59. Agar Text           : .agar <text>
        60. Agarify Text        : .agarify <text>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `-- Do ".illegal <text> are" to replace "IS" with "ARE" in the GIF.
        61. Trump Illegal GIF   : .illegal <text>
        62. Trump Legal GIF     : .legal <text>
        63. Oilpainting         : .oil <image>
        64. XD                  : .xd <text>
        65. Trace               : .trace <image>
        66. Swirl               : .swirl <image>
        67. Side To Side        : .ss/s2s <image>
        68. Up To Down          : .utd/u2d <image>
        69. Recolor             : .recolor <image>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `-- Poorly trained Neural Network Model (Nothing really NSFW).
        70. Edges2Porn (NSFW)   : .edges2porn/e2p <image>
          1. Gif                : .gedges2porn/ge2p <gif>
        71. Sharpen             : .sharpen <image>
        72. Rewind GIF          : .rewind <gif>
        73. Gay Flag Overlay    : .gay <image>
        74. Rewind GIF Loop     : .gloop <gif>
        75. Blur                : .blur <image> <scale>*
        76. Pixelate GIF        : .gpixel <gif>
        77. JPEG GIF            : .gjpeg <gif>
        78. Glitch GIF          : .gg/glitchgif <image>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `-- FaceApp Commands (for human faces).
        79. Smile               : .smile <image-face>
        80. Smile 2             : .smile2 <image-face>
        81. Old                 : .old <image-face>
        82. Young               : .young <image-face>
        83. Female              : .female <image-face>
        84. Female 2            : .female2 <image-face>
        85. Male                : .male <image-face>
        86. Hot                 : .hot <image-face>
        87. Wave / Hot 2        : .hot2 <image-face>
        88. Beard / Pan         : .beard/pan <image-face>
        89. Hitman              : .hitman/hit <image-face>
        90. Heisenberg          : .heisenberg/walter/ww <image-face> (Breaking Bad)`)
        .setFooter(`Commande d'aide catégorie "Fun"' - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `91. Glasses             : .glasses <image-face>
        92. Hipster             : .hipster/hip <image-face>
        93. Impression          : .impression/imp <image-face>
        94. Makeup              : .makeup <image-face>
        95. Hollywood           : .hollywood/hw <image-face>
        96. Mustache            : .mustache/must/stache <image-face>
        97. Bangs               : .bangs <image-face>
        98. Goatee              : .goatee/goat <image-face>
        99. Sun Glasses         : .sunglasses/sung <image-face>
        100. Tight Smile        : .tightsmile/tight <image-face>
        101. Full Beard         : .fullbeard/fullb <image-face>
        102. Implode            : .implode <image> <scale>
        103. Explode            : .explode <image> <scale>
        104. Circular/Radial    : .circle/radial <image> <angle> Blur`)
        .setFooter(`Commande d'aide catégorie "Fun"' - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `105. Fisheye Lens       : .fish/bulge <image>
        106. Deep Fry           : .deepfry/df <image>
        107. Brazzers Logo      : .brazzers/br <image>
        108. oWo                : .owo <image>
        109. Noose Guy          : .nooseguy <image>
        110. Composite Images   : .composite <images (limit 20)>
        111. Disabled           : .disabled <image>
        112. Kekistan           : .kekistan/kekflag <image>
        113. Watchmojo          : .watchmojo/mojo <image> <text>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `114. Snapchat Dog       : .snapchat/sc <image-face>
          1. Dog 2              : .snapchat dog2/d2 <image-face>
          2. Cat                : .snapchat cat/c <image-face>
          3. Cat 2              : .snapchat cat2/c2 <image-face>
          4. Devil              : .snapchat devil/d <image-face>
          5. Bunny              : .snapchat bunny/b <image-face>
          6. Heart              : .snapchat heart/h <image-face>
          7. Flowers            : .snapchat flowers/f <image-face>
          8. Flowers 2          : .snapchat flowers2/f2 <image-face>
          9. Glasses            : .snapchat glasses/g <image-face>
          10. Moustache         : .snapchat moustache/m <image-face>
          11. Angery            : .snapchat angery/a <image-face>
          12. Sunglasses        : .snapchat sunglasses/sg <image-face>
        115. iDubbbz Painting   : .paint <image>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `--Use negative speeds to make it slower.
        116. GIF Speed          : .gspeed <speed>
        117. Bob Ross           : .bobross/paint2 <image>
        118. Stepped on Shit    : .shit <image>
        119. Perfection         : .perfection <image>
        120. Worse Than Hitler  : .wth <image>
        121. For REALLY big     : .mistake <image> mistakes
        122. Reminder           : .reminder <image> <text>
        123. Zuckerbergs        : .zuckerberg/zuck <image> approval
        124. Ugly               : .ugly <image>
        125. Cool Guy           : .coolguy/cg <image>
        126. God                : .god <image>
        127. Gaben              : .gaben <image>
        128. Autism Hat         : .autism <image-face>
        129. Snapple Fact       : .fact <text>
        130. DLSR Image         : .dslr <image> Enchancement`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `131. Ed Ed and Eddy     : .dork <image>
        132. Squidward Nose     : .art/squidward <image-face>
        133. p90.zone           : .p90 <tags>*
        134. 9GAG Watermark     : .9gag <image>
        135. Adidas             : .adidas <image>
        136. Admin Walk         : .adminwalk/adw <image>
        137. America            : .america <image>
        138. Autism Level       : .autismlevel/alevel <image>
        139. Bandicam           : .bandicam/bandi <image>
        140. Condom Fails       : .condomfail/condom <image>
        141. Depression         : .depression/depr <image>
        142. Hacker             : .hacker <text>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `143. Gold Star          : .goldstar/star <image>
        144. Hyper Cam          : .hypercam/hcam <image>
        145. Challange          : .jackoff/challenge <image>
        146. Keemstar           : .keemstar/keem <image>
        147. Rope Portal        : .portal <image>
        148. PornHub Caption    : .phcaption/phc <image> <text>
        149. Respects           : .respects <image>
        150. Russia             : .russia <image>
        151. Spain              : .spain <image>
        152. Stockphoto         : .stock <image>
             Watermark
        153. USSR               : .ussr <image>
        154. iFunny Watermark   : .ifunny <image>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `--Auto places if no face detected.
        155. Santa Hat          : .santahat/hat <image/face>
        156. Gif Sharpen        : .gsharpen <gif> <scale>*
        157. Pixel 2            : .pixel2 <image> <scale>*
        158. Face Swap          : .swap <image (>= 2 faces)>
        159. Bernie             : .bernie/congress <image>
        160. Thug Life          : .thug/thuglife <image-face>
        161. Crop/Zoom Face     : .zoom <image-face>
        162. Race Recognition   : .races/kairos <image-face>
        163. Gimp Resize Error  : .gimp <image>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `164. Transgender Flag   : .trans <image>
        165. Sonic              : .sonic <text>
        166. NotSoBot Face      : .notsobot/nsb <image-face>
        167. Zalgo              : .zalgo <text>
        168. Yusuke             : .yusuke <image>
        169. Thinking Face      : .thinking <image-face>
        170. Joy Face           : .joy <image-face>
        171. Ajit Pai           : .ajit <image>
        172. Jack               : .jack <image>
        173. Israel Flag        : .israel <image>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `173. Israel Flag        : .israel <image>
        174. Logan Paul         : .logan <image>
        175. Gif Deep Fry       : .gdeepfy/gdf <gif>
        176. Trump              : .trump <image>
        177. Black              : .black <image-face>
        178. Black Panther      : .panther <image>
        179. SpaceX Starman     : .spacex/starman <image>
        180. Thinking Blend     : .think <image> <scale|1-100 (opacity)>*
        181. Invert Flash       : .flash <image> <delay (ms)>
        182. GExplode           : .gexplode/gex <image> <scale|1-6>*
        183. GImplode           : .gimplode/gim <image> <scale|1-6>*
        184. Change My Mind     : .changemymind/cmm <text>
        185. WikiHow            : .wikihow <query>
        186. Supreme Logo       : .supreme <image>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `-- Use flags such as "-compact" or "-light" to change the theme.
        187. Quote              : .quote <user-mention/id>* <text>
          1. Message            : .quote id <message_id>
          -- Last 100 messages
          2. User               : .quote user <@discord_user>
        188. Stephen Hawking    : .hawking/hawk <image>
        189. Rain               : .rain <image>
        190. Gold               : .gold <image>
        191. Gold 2             : .gold2 <image>
        192. Exo                : .exo <image>
        193. Kek                : .kek <image>
        194. Kek 2 - Rain       : .kek2 <image>
        195. Paper/Napkin       : .paper <image>
        196. Bubble             : .bubble <image>
        197. Tunnel             : .tunnel <image>
          1. Mode 2             : .tunnel2 <image>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `198. In Out             : .inout/io <image> <delay|20-200 (ms)>
        199. Out In             : .outin/oi <image> <delay|20-200 (ms)>
        200. Blurple            : .blurple <image>
        201. Universe Overlay   : .universe/uni <image> <overlay_type|1-4>*
        202. Einstein Chalk     : .einstein/ein <text|1-15 characters>
        203. Fat Maker          : .fat <image-face>
        204. 100 Dollar Bill    : .bill/100 <image>
        205. Anime Eyes (Black) : .anime <image-face>
          1. Blue               : .anime blue/1 <image-face>
          2. Aqua               : .anime aqua/2 <image-face>
          3. Green              : .anime green/3 <image-face>
          4. Brown              : .anime brown/4 <image-face>
          5. Red                : .anime red/5 <image-face>
          6. Purple             : .anime purple/6 <image-face>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `206. Clown Face         : .clown <image-face>
        207. Alien Face         : .alien <image-face>
        208. Soup Letters       : .soup <text|1-14 characters>
        209. Mount Rushmore     : .mount <image-face>
             Faces
        210. Galatea of the     : .spheres/galatea <image>
             Spheres
        211. Museum Frame       : .museum <image>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `212. Burning Photo      : .burn <image>
        213. Pop Art (2 x 2)    : .popart/pop <image>
        -- Removes transparent body surrounding image.
        214. Center Image       : .center <image>
        215. Face Ovleray       : .faceoverlay/overlay <image-face> <image-overlay>
        216. Hot Girl Bottle    : .grill <text>
        217. Simpsons Days      : .days/simpsons <text>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `-- Append flags " -eyes" or " -mouth" for specific facial feature.
        218. Face -Magik-       : .facemagik/fm <image-face>
          -- Alias for the effect is also the command number (e.g. ".fm 1" instead of ".eyes explode").
          1. Explode            : .fm explode/exp <image-face>
          2. Implode            : .fm implode/impl <image-face>
          3. Swirl              : .fm swirl <image-face>
          4. Circular/Radial    : .fm circle/radial <image-face>
              Blur
          5. Blur               : .fm blur <image-face>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `6. Charcoal           : .fm charcoal/coal <image-face>
          7. Tehi               : .fm tehi <image-face>
          8. Pixelate           : .fm pixelate/pixel <image-face>
          9. Spin - Random Hues : .fm spin <image-face>
          10. Alternative Magik : .fm magika <image-face>
          11. Rain              : .fm rain <image-face>
          12. Gold              : .fm gold <image-face>
          13. Frost             : .fm frost <image-face>
        219. Wheeze             : .wheeze <image>
        220. Pseudocolor / Hue  : .pc <image> Rainbow GIF`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "fun") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Fun" du bot "NotSoBot"\n\n`, 
        `221. Text Distort Image : .textdistort/td <image> <text>
        1. Black Background   : .textdistort2/td2 <image> <text>
      222. Wiggle GIF         : .wiggle <image>
      223. Stained Glass      : .stainedglass/sg <image>
      -- Append flags " -invert" / " -i" or " -composite" / " -c" for extra abstraction.
      224. Abstract Art       : .abstract/aa <image>
      225. Old Man            : .oldman/oldguy <image>`)
        .setFooter(`Commande d'aide catégorie "Fun" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }

    if(message.content === prefix + "nsfw") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "NSFW" du bot "NotSoBot"\n\n`, 
        `1. E621                 : .e621 <search/tags>
        2. Rule34               : .rule34 <search/tags>
        3. Rule34 Paheal        : .paheal <search/tags>
        4. Yandera              : .yande <search/tags>
        5. Xbooru               : .xbooru <search/tags>
        6. Gelbooru             : .gelbooru <search/tags>
        7. Pornhub              : .porn/pornhub <search>
        8. Ban a tag/search     : .bantag <tags>
          1. List all banned    : .bantag list
          2. Unban tag          : .bantag remove <tags>
            1. Unban all        : .bantag remove all`)
        .setFooter(`Commande d'aide catégorie "NSFW" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }

    if(message.content === prefix + "info") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Utility/Info" du bot "NotSoBot"\n\n`, 
        ` 1. Invite OAUTH2 Link   : .invite
        2. Google Search        : .google/g <text>
          1. Simpler Response   : .google2/g2 <text>
        3. Google Image         : .image/img <text>
          1. Simpler Response   : .image2/img2 <text>
        4. YouTube Search       : .youtube/yt <text>
        5. (^)Git Pull          : .update
        6. (^)Logout of Discord : .die
        7. (^)Changes Status    : .status <status>
        8. (^)Say Text          : .say <text>
        9. Server Info          : .server
        10. Eval Python Code    : .debug <code>
        11. (^)Loop             : .loop <amount> <commmand>
        12. Ping                : .ping <ip/website>`)
        .setFooter(`Commande d'aide catégorie "Utility/Info" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "info") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Utility/Info" du bot "NotSoBot"\n\n`, 
        `13. Users Avatar Link   : .avatar <@discord_user>
        14. Servers Seen On     : .seenon <@discord_user>
        15. Bots Uptime         : .uptime
        16. Users Information   : .info/user <@discord_user>
        17. Channel Information : .cinfo
        18. Upload A Gist       : .gist <text>
        19. (^)Set Bot Avatar   : .setavatar <image>
        20. (^)Set Bot Name     : .setname <text>
        21. Steam User Info     : .steam <steamid/steam64/steamurl/customurl>
        --Start the message with (NO PREFIX).
        22. Find and Replace    : sed/<text to find>/<text to replace it with>/
        23. Statistics          : .stats
        24. GitHub Code Search  : .botc <text/code>
        25. Leave Feedback or   : .complain <text>
            1. (^)Complain      : .complain respond <complain_id/latest/|> <text>
        26. Leave a *nice*      : .compliment <text>
        27. Name/Nickname Logs  : .names <@discord_user>
          1. Server Name Logs   : .snames`)
        .setFooter(`Commande d'aide catégorie "Utility/Info" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "info") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Utility/Info" du bot "NotSoBot"\n\n`, 
        `-- 30. Online Staff        : .admins/mods
        28. Reminder            : .remind <time> (1d1h = 1 day 1 hour) <text>
          1. List Reminders     : .remind list
          2. Remove Reminder    : .remind remove <id>
            1. Remove All       : .remind remove all
        29. WolframAlpha        : .wolframalpha/wa <text/query>
        30. Hash MD5            : .hash <text>
          1. Hash SHA1          : .hash sha1 <text>
          2. Hash SHA256        : .hash sha256 <text>
          3. Hash SHA512        : .hash sha512 <text>
        31. Undo Command        : .undo
        32. Screenshot a Site   : .screenshot <url>
        33. Unicode Character   : .char <text>
        ---You can also only input a discord code block with the language you want as the syntax highlighting language.
        34. Rextester Code      : .rex <language> <code>
          1. List Languages     : .rex list
        35. Shard Info          : .shards`)
        .setFooter(`Commande d'aide catégorie "Utility/Info" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "info") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Utility/Info" du bot "NotSoBot"\n\n`, 
        `36. (^)RPC              : .rpc
          1. Ping               : .rpc ping
          2. (^)Eval            : .rpc eval <code>
            1. Specific Shard   : .rpc eval shard <code>
          3. (^)Reload Mod      : .rpc reload <mod>
          4. (^)Send Message    : .rpc say <#discord_channel> <text>
          5. (^)MySQL Reload    : .rpc mysql reload <table>
          6. (^)Set RPC Timeout : .rpc timeout <float>
          7. (^)Git Pull        : .rpc update
        37. (^^)Facepunch Embed : .fpembed
        38. Command logging to  : .logopt
        --Responds with a message of your choice or simply that you're AFK whenever someone pings you.
        39. AFK                 : .afk <text>
        --How many people have their status/game as X? (Only includes members NotSoBot has access to).
        40. Playing             : .playing <game>
        41. DuckDuckGo Search   : .duckduckgo/ddg <text>
          1. Simpler Response   : .duckduckgo2/ddg2 <text>`)
        .setFooter(`Commande d'aide catégorie "Utility/Info" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }

    if(message.content === prefix + "roles") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Roles" du bot "NotSoBot"\n\n`, 
        `1. Set Your Color       : .color <color>
            1. (^^)Add color      : .color add <hex/name/etc> <role_name>
            2. (^^)Remove color   : .color remove <name>
        2. Remove your color    : .uncolor
        3. Colors Available     : .colors
        5. (^^)Add default      : .addcolors
            colors
        6. (^^)Remove all       : .removecolors
            colors`)
        .setFooter(`Commande d'aide catégorie "Roles" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }

    if(message.content === prefix + "welcome") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Welcome" du bot "NotSoBot"\n\n`, 
        `1. Enable/Add Text      : .welcome <text> <#discord_channel>
        2. Change/View Channel  : .welcome channel <#discord_channel>
        3. Current Text         : .welcome current
        4. Disable              : .welcome disable/clear`)
        .setFooter(`Commande d'aide catégorie "Welcome" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }

    if(message.content === prefix + "leave") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Leave" du bot "NotSoBot"\n\n`, 
        `1. Enable/Add Text      : .leave <text>* <#discord_channel>
        2. Change/View Channel  : .leave channel <#discord_channel>
        3. Current Text         : .leave current
        4. Disable              : .leave disable/clear`)
        .setFooter(`Commande d'aide catégorie "Leave" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }

    if(message.content === prefix + "pager") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Pager" du bot "NotSoBot"\n\n`, 
        `1. Pager Base Command   : .pg
        2. Pager Add            : .pg add <text>
        3. Pager Remove         : .pg remove <text>
        4. Pager Set Method     : .pg method <pm/ping/both>
           To Notify
        5. Pager List           : .pg list
        6. Private Message      : .pmentions`)
        .setFooter(`Commande d'aide catégorie "Pager" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }

    if(message.content === prefix + "tracking") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Message Tracking" du bot "NotSoBot"\n\n`, 
        `1. Track a message      : .track <text>
        and log to the
        current channel
        2. Remove a tracked     : .track remove <text>
        message
        3. Remove all tracked   : .track remove all
       messages
        4. Change logging
        channel              : .track log <#discord_channel>
        5. List tracked         : .track list
        messages
        6. Track only           : .track channel <#discord_channel(s)>`)
        .setFooter(`Commande d'aide catégorie "Message Tracking" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }

    if(message.content === prefix + "admin") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Administration/Moderation" du bot "NotSoBot"\n\n`, 
        `1. Server Logs          : .slogs
            1. Ignore User/Bot    : .slogs ignore <@discord_user(s)>/<user_id(s)>
            2. Ignore User/Bot    : .slogs ignore avatar <@discord_user(s)>/<user_id(s)>
           Avatar Changes
        2. Remove Bot & Invoker : .clean <max_messages>
         Messages
        3. Remove Messages      : .prune <max_messages> <@discord_user(s)>
            1. Bot Messages       : .prune bots <max_messages>
            2. Attachments        : .prune attachments <max_messages>
            3. Embeds             : .prune embeds <max_messages>
            4. Images             : .prune images <max_messages>
            5. With a string/text : .prune with <max_messages> <text>
            6. After message id   : .prune after <message_id> <#discord_channel>
         4. Hackban (Ban user    : .hackban <id(s)>
          not on server/by id)`)
        .setFooter(`Commande d'aide catégorie "Administration/Moderation" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "admin") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Administration/Moderation" du bot "NotSoBot"\n\n`, 
        `5. Mute/Turn off a User : .off <@discord_user>
            1. List users "off"   : .off list
        6. Un-mute/Turn on a    : .on <@discord_user>
            User
        1. Turn on all users: : .on all
        7. Message Logs for     : .logs <max_messages>* <#discord_channel>
        The Channel
          1. Message logs for   : .logs user <@discord_user> <max_messages> <#discord_channel>
         x User
        8. Leave Server         : .leave
        9. Nickname             : .nick <nickname> <@discord_user(s)>
            1. Mass Change        : .nick mass <nickname>
                Everyones Nickname
            2. Mass Revert/Remove : .nick mass revert/reset
            Everyones Nickname
        10. List Invites        : .invites
        --Role name is case sensitive
        11. Add role            : .addrole <role> <@discord_user(s)>
            to a user`)
        .setFooter(`Commande d'aide catégorie "Administration/Moderation" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "admin") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Administration/Moderation" du bot "NotSoBot"\n\n`, 
        `12. Remove role         : .removerole <role> <@discord_user(s)>
        from a user
        13. Channel Perm Mute   : .mute <@discord_user(s)>
        User
            1. Unmute             : .unmute <@discord_user(s)>14. Pin a message       : .pin <max_messages> <message_id/message_content> (ID of the Message or Text in the content of the message)
        1. After a Specific   : .pin date <MM/DD/YYYY>
           Date
        2. Before a Specific  : .pin before <MM/DD/YYYY> <max_messages> <message_content>
           Date
        3. Pin the first      : .pin first <#discord_channel>*
           Message in current/specified channel
        4. Remove Pins        : .pin removeall <@discord_user>* <#discord_channel>
        --Approve or Verify a member on server join by placing them in a temporary role which removes message (send, read_history) permissions.`)
        .setFooter(`Commande d'aide catégorie "Administration/Moderation" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "admin") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Administration/Moderation" du bot "NotSoBot"\n\n`, 
        `15. Member Verification : .verification <#discord_channel>* <@discord_user(s)> (to mention on user join)
        and Approval Toggle
        --No arguments (if enabled).
            1. Disable            : .verification
        16. Verify a Member     : .verify <approval_id or @discord_user>
            1. List members in    : .verify list
           Queue
            2. Check steam        : .verify check <steam_url/ID/64>--For commands: image, google/search (Safety is automatically disabled if NSFW channel).
        17. Set Google Safety   : .safety <low/medium/high> or <1 (off)/2 (medium)/3 (high)>
          Level
          --Send a message including the command when a user deletes the invoking message (before 20 minutes).
        18. On Command Message  : .cmd_delete
            Delete Messages
        --Server Protection`)
        .setFooter(`Commande d'aide catégorie "Administration/Moderation" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }
    if(message.content === prefix + "admin") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Administration/Moderation" du bot "NotSoBot"\n\n`, 
        `--Ban users if they mention over the specified threshold (Bans logged to current or specified channel).
        19. Auto Mention Spam   : .mentionspam <threshold/count> <#discord_channel>
            Tracker
          1. Disable            : .mentionspam off
          2. Change Action Log  : .mentionspam channel <#discord_channel>
             Channel
        --Raid mode for when your server is under attack.
        --Levels: 0 - off (turn off raid mode), 1 - on (log member joins to a channel), 2 - strict (kick members who joined (the server or discord) less than 30 minutes ago).
        20. Raid Mode           : .raid <mode>
          1. Change Action Log  : .raid channel <#discord_channel>`)
        .setFooter(`Commande d'aide catégorie "Administration/Moderation" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }

    if(message.content === prefix + "blacklist") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Blacklisting" du bot "NotSoBot"\n\n`, 
        `--To unblacklist, run the command the same way as you did to blacklist.
        1. User                 : .blacklist <@discord_user>
        2. Channel              : .blacklist channel <#discord_channel>
        --This will blacklist everyone except specific roles (user must have the role to use the bot).
        --It also acts as a toggle, to remove a role run the command again with the specified role, same with adding.
        3. All except role(s)   : .blacklist except <@discord_role(s)>
        4. List all blacklists  : .blacklist list
        5. (^)Global            : .blacklist global <@discord_user>`)
        .setFooter(`Commande d'aide catégorie "Blacklisting" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }

    if(message.content === prefix + "toggling") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Command Toggling" du bot "NotSoBot"\n\n`, 
        `--All commands act as a toggle (run once to disable, again to enable).
        1. Server Wide          : .command <command_name>
        2. User                 : .command user <command_name> <@discord_user>
        3. Role                 : .command role <command_name> <discord_role>
        4. Channel              : .command channel <command_name> <#discord_channel>*
        5. (^)Global            : .command global <command_name>
        6. Enable all disabled  : .command all
           commands
        7. List all disabled    : .command list
           commands
        --Specific bot modules such as Fun/Image commands or NSFW Commands (run the list command to see all).
        8. Module               : .command module <module_name>
          1. List all Modules   : .command module list`)
        .setFooter(`Commande d'aide catégorie "Command Toggling" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }

    if(message.content === prefix + "prefix") {
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Besoin d'aide ?`)
        .setThumbnail(message.author.avatarURL)
        .addField(`:tools: Voici les commandes de "Bot Server/Channel Prefix" du bot "NotSoBot"\n\n`, 
        `1. Add default prefix   : .prefix <text>
        1. Change default     : .prefix channel <text (wrap in "" if more than 1 word)> <#discord_channel>*
           prefix for channel
        2. Add a prefix       : .prefix add <text>
           (non-default)
      2. Delete prefix        : .prefix delete <text>
      3. Reset server         : .prefix reset
         prefix 
        1. Reset channel      : .prefix reset channel <#discord_channel>*
           prefix
        2. Reset all channel  : .prefix reset channels
           prefixes
        3. Reset all          : .prefix reset all`)
        .setFooter(`Commande d'aide catégorie "Bot Server/Channel Prefix" - By FilEeaZaiR`)
        .setTimestamp()
        message.channel.send(help_embed);
    }

});
