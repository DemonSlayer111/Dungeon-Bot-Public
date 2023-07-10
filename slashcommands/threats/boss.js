const prefixModel = require("../../schemas/prefix")
const { MessageEmbed, MessageSelectMenu, MessageActionRow } = require('discord.js')
module.exports = {
	name: "boss",
	description: 'Information about ARK Mobile bosses.',
	async execute(interaction) {

        const data = await prefixModel.findOne({
            GuildID: interaction.guild.id
        });
    
    
        const prefix2 = (() => {
            if (!data)
              return "?"
            else if(data)
              return data.Prefix
          })();

          const newEmbed = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription(`**__Dungeon Bosses__**\n\nBosses are endgame challenges found at the end of every dungeon. There are 10 bosses in total and each of them have their own unique set of attacks and threats for the player to face.  These bosses are strong and players will need high quality equipment in order to overcome the challenge that they pose.  In order to complete a dungeon, the boss at the end must be defeated. With the exception of the Noctis boss, bosses are defeated by killing them and any minions they may have. Since tames cannot be brought into dungeons, boss fights will need to be completed on foot.\n\n\n**Boss Teleporter**\nIn order to access the boss fight required to complete a dungeon, players will need to locate the boss teleporter found inside the dungeon. The boss teleporter is found within a metallic room that contains a golden platform with a terminal in the center. Players will need to stand on this platform in order to enter the boss fight. The teleporter will then transport the player into the boss arena and begin the fight. Although it is possible for a dungeon to have multiple bosses available, most dungeons have just one main boss. There is also a very small chance that the player will teleport to the Noctis arena instead.  It should also be noted that up to 10 players can teleport into the boss arena together, however the challenge becomes greater with each additional player. \n \n**Boss Strategies** \n\`${prefix2}help boss\` - Lists commands related to dungeon bosses `)
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/834489939550535781/image3.png")

        const newEmbedMonkey = new MessageEmbed()
        .setColor('#0e48b8')
        .setThumbnail('https://cdn.discordapp.com/attachments/760287836074278963/835944001822785607/Megapithecus_Pestis.png')
        .setDescription("__**Megapithecus Pestis**__\n\n**Boss**\nThe Megapithecus Pestis is a large and strong ape with 2 distinct attacks. The first is a melee attack that deals heavy damage and knockback. The second attack involves a boulder projectile. This boulder deals heavy damage on contact. The Megapithecus Pestis also summons gigantopithecs and mesopithecus minions which must also be killed in order to complete the dungeon \n\n**Arena**\nThe arena contains 5 large stone pillars. There is one in each corner and another one in the center. These pillars are larger than the boss and can be used to hide and dodge attacks.\n\n**Strategy**\nThe Megapithecus Pestis deals significant damage with all of its attacks so any close range encounters should be avoided. The boss itself is not very fast so keeping distance and firing at it with a ranged weapon is usually the best strategy. Attention should be paid to the gigantopithecus and mesopithecus minions summoned by the boss. They can deal a surprising amount of damage and the mesopithecus can also increase torpor.  It is recommended to have stimulants on your hotbar to combat the torpor effects.")
        .setImage("https://cdn.discordapp.com/attachments/742244172278399088/841719011116580894/image0.png")

        const newEmbedSpider = new MessageEmbed() 
        .setColor('#0e48b8')
        .setThumbnail('https://cdn.discordapp.com/attachments/760287836074278963/835943995468152862/Broodgenetrix.png')
        .setDescription("__**Broodgenetrix**__\n\n**Boss**\nThe Broodgenetrix is a very large spider that summons araneo minions to assist it in battle. The minions must be killed in addition to the boss in order to complete the fight. This boss has 2 attacks. The first is a melee bite that does moderate damage. The second is a volley of acidic projectiles that deal heavy damage to armor durability. \n\n**Arena**\nThe floor of the Broodgenetrix arena is covered in sticky webs that reduce movement speed and prevent jumping. There are rocky platforms without webs or any movement restrictions. \n\n**Strategy**\nThe sticky webs that cover the arena floor can make it challenging to keep a safe distance from the Broodgenetrix. The corners, however have sections of floor without sticky webs that can be used to safely shoot at the boss using a ranged weapon such as a pump-action shotgun or compound bow. Since the acid volley attack is a group of projectiles that spread out after being fired, melee attacks are not recommended as the chance of being hit by multiple projectiles is increased.")
        .setImage('https://cdn.discordapp.com/attachments/760287836074278963/834490165678440508/image3.png')

        const newEmbedFrog = new MessageEmbed()
        .setColor('#0e48b8')
        .setThumbnail('https://cdn.discordapp.com/attachments/760287836074278963/835943993581502526/Beelzemorbus.png')
        .setDescription("__**Beelzemorbus**__\n\n**Boss**\nThe Beelzemorbus is a large beelzebufo that jumps around the arena. It has one main attack, its sticky tongue, which when made contact with deals minor damage and torpor.  The tongue can also be used to pull the player close. The Beelzemorbus summons meganeura minions which must be defeated in order to complete the dungeon.\n\n**Arena**\nThe arena resembles a miniature swamp. The floor is covered in shallow water that cannot be used to drink from. There are also some swamp trees found scattered in the arena.\n\n**Strategy**\nThe Beelzemorbus can jump around the arena quite quickly, however won't usually attack after jumping for some time. Due to the low damage of its attacks, ranged and melee attacks are both viable options. If using ranged weapons, the boss should be fought from a distance to avoid being pulled in by its tongue. If using melee weapons, the boss can be approached but stimulants should be used to reduce torpor from attacks.")
        .setImage("https://cdn.discordapp.com/attachments/742244172278399088/836646903532879873/image0.png")

        const newEmbedCubozoa = new MessageEmbed()
        .setColor('#0e48b8')
        .setThumbnail('https://cdn.discordapp.com/attachments/760287836074278963/835943996752134194/Cubozoa_Multis.png')
        .setDescription(    "__**Cubozoa Multis**__\n\n**Boss**\nThe Cubozoa Multis boss is essentially a large jellyfish.  What makes it special however is the mechanism in which it splits and is ultimately defeated.  Upon killing the jellyfish, it will immediately split into 2 new smaller jellyfish with significantly less health than the one prior.  This splitting process can occur up to 4 times upon defeating the current wave of jellyfish.  The Cubozoa Multis only has one attack. When near a player it will attempt to sting them, briefly stunning anyone hit. This attack deals minor damage and moderate torpor. \n\n**Arena**\nThe arena for this boss is completely submerged, however oxygen does not deplete. There are several large rocks that the player or boss can hide behind.\n\n**Strategy**\nThe biggest challenge in this boss fight is the underwater arena. Because the entire fight is underwater, firearms cannot be used and alternative weapons must be utilized instead. Consumables can be consumed while stunned, however. One effective strategy involves the use of a good compound bow and scuba flippers to fire arrows at the boss while swimming away to avoiding damage. Another method of defeating the Cubozoa Multis involves the use of a sword to melee attack the boss. Since consumables can be used while stunned, stimulants can remove torpor from stings. Flippers can be used to keep up with the boss more easily but might break when stung.")
        .setImage('https://cdn.discordapp.com/attachments/760287836074278963/834490164578615346/image2.png')

        const newEmbedChali = new MessageEmbed()
        .setColor('#0e48b8')
        .setThumbnail('https://cdn.discordapp.com/attachments/760287836074278963/835944005132222484/Obsidioequus.png')
        .setDescription("__**Obsidioequus**__\n\n**Boss**\nThe Obsidioequus is a strong chalicotherium with multiple attacks.  First attack is a claw swipe that deals minor damage to the player.  The next two attacks involve a projectile.  In one instance, the boss will hurl beer kegs.  When contact is made, moderate damage is inflicted.  The other instance involves poop being thrown at the player.  In this case, contact with the projectile will deal minor damage and moderate torpor.\n\n**Arena**\nThe arena floor is covered in a layer of beer with several spots that rise above it for the player to stand on. There are also piles of stacked beer barrels as well as geysers that can launch players into the air.\n\n**Strategy**\nOne of the biggest threats in this fight is the beer floor found in the arena. While standing in it, stamina will continue to drain. It is also important to note that while standing in beer, a drunken effect is applied to the player.  This effect alters vision and can be somewhat disorienting at times. Standing on one of the platforms above the beer should be prioritized when possible. The Obsidioequus will consistently alternate between its 3 attacks. When using the beer keg or poop attack, the pile of beer barrels can be used as a barrier to prevent contact. Due to the insignificant damage of its melee attack, this fight can be completed with either a melee or a ranged weapon.  It would also be recommended to bring stimulants to this boss fight to combat the effects of increasing torpor should you get hit multiple times with the poop attack.")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/834490162334531604/image1.png")

        const newEmbedDodo = new MessageEmbed()
        .setColor('#0e48b8')
        .setThumbnail('https://cdn.discordapp.com/attachments/760287836074278963/835943997797171220/Dodobitus.png')
        .setDescription("**__Dodobitus__**\n\n**Boss**\nThe Dodobitus is a very large dodo equipped with the dodo decimator bit. It has 3 different attacks. The first attack is a strong peck. This particular move is very dangerous as it will instantly kill any player that is hit, regardless of armor values. Its second attack is a ranged attack that shoots eggs in the general direction of the player. These eggs do minor damage and torpor on contact. The third attack is a butt slam that will stun all players standing on the ground at the moment of impact. The Dodobitus also summons dodo minions which must be killed to complete the fight.\n\n**Arena**\nThe arena consists of various types of plants and mushrooms located in each corner of the arena along with a very large nest found in the center.\n\n**Strategy**\nBecause of the instant kill when hit by the Dodobitus' peck, it is highly recommended to avoid using melee weapons on the boss in all situations. Instead, the boss should be shot at from a safe distance. The egg projectiles fired by it do not deal a significant amount of damage or torpor and are very inaccurate when not nearby. The stun from a butt slam poses a significant threat as it renders all players helpless for a short duration thus allowing the Dodobitus to approach and land a peck. The boss will first jump in the air before coming down for a slam. In order to counter this particular attack, the player should jump at the same time the dodos butt is making contact with the ground.")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/834489937487069264/image1.png")

        const newEmbedDoed = new MessageEmbed()
        .setColor('#0e48b8')
        .setThumbnail('https://cdn.discordapp.com/attachments/760287836074278963/835943999700729996/Doedicurus_Vastus.png')
        .setDescription("**__Doedicurus Vastus__**\n\n**Boss**\nThe Doedicurus Vastus is a large and strong doedicurus with 2 attacks that it will use in an attempt to defeat the player.  Its two attacks consist of a tail swing and a roll.  Its tail swing attack causes the boss to swing its tail out in an arc, dealing damage to any players that are hit. The Doedicurus Vastus can also use a roll attack that allows it to close the gap between itself and players. When rolling, it will demolish obstacles in its path.\n\n**Arena**\nThe arena of the Doedicurus Vastus is filled with many obstacles such as redwood trees, rocks, and ruins. These obstacles provide a slight challenge when navigating the arena, but most of the obstacles can be destroyed by the boss when using its roll attack. \n\n**Strategy**\nThe attack pattern of the Doedicurus Vastus is very predictable as it depends on the position of the player. When standing near the boss, it will use its tail swing almost exclusively in an attempt to strike and inflict damage. Should the player move too far away from it, the boss will use its roll attack to close the distance, destroying any arena obstacles in its path. While rolling, the Doedicurus Vastus is invulnerable. It is also important to note that the boss can only move in a straight line while rolling and won't be able to turn until the roll is complete. It also takes reduced damage from ranged attacks on its body, aiming for the head or belly should be prioritized. Using this information, its attacks can be safely avoided and a ranged weapon can be used to defeat it.  Melee attacks are not recommended due to the knockback and damage to armor when hit by the boss.")
        .setImage('https://cdn.discordapp.com/attachments/760287836074278963/834489936190242896/image0.png')

        const newEmbedGula = new MessageEmbed()
        .setColor('#0e48b8')
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/835944000586252329/Gula_Beetle.png")
        .setDescription("__**Gula Beetle**__\n\n**Boss**\nThe Gula Beetle is a large dung beetle that has 2 different attacks. The first is a melee attack with its horn. This attack deals a significant amount of damage to both players and armor. The second attack is a hallucinogenic gas that deals no damage but will temporarily disorient players. The Gula Beetle has an armored front and will take reduced damage from ranged weapons when hit in that area. When feces is dropped into the arena, the boss will be distracted for a brief period. \n\n**Arena**\nThe arena is filled with various types of vegetation and mushrooms. They are very tall and make it difficult to spot the boss. There are also a few rocks along some edges that can be stood upon.\n\n**Strategy**\nWith the thick vegetation and possible hallucinogenic gas effect, it may be difficult to spot the Gula Beetle.   If feces is brought into the arena, it can be used to lure the boss out of the vegetation and onto one of the rock platforms.  Due to the armor on the front of the beetle, attempts should be made to fire at its backside.  Considering the significant damage dealt when being hit, melee weapons should be avoided.")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/834489938577326080/image2.png")


        const newEmbedArgy = new MessageEmbed()
        .setColor('#0e48b8')
        .setThumbnail('https://cdn.discordapp.com/attachments/760287836074278963/835943992096587836/Argentustus.png')
        .setDescription("__**Argentustus**__\n\n**Boss**\nThe Argentustus is a large argentavis and flies for the entire fight. It has 2 types of attacks. The first is a claw swipe. It deals moderate damage and a small amount of knockback. The second attack is a wind gust. The gust deals no damage but will push the player back significantly. This knockback cannot be blocked. \n\n**Arena**\nThe Argentustus arena is filled with lava. This lava will instantly kill players that touch it. There are small platforms that must be used to navigate, some of which can move.\n\n**Strategy**\nThe Argentustus' gust attack is a significant threat because of the lava in the arena. There are a few large platforms found in the arena that can be used to fight the boss more easily. By standing near the edge of these platforms, it is possible to survive a gust attack and continue to attack the boss. Ranged weapons are recommended due to the headshot multiplier that the Argentustus has. It is difficult to hit the boss with a melee weapon because it flies.")
        .setImage('https://cdn.discordapp.com/attachments/760287836074278963/834490166944071690/image0.png')

        const newEmbedNoctis = new MessageEmbed()
        .setColor('#0e48b8')
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/835944003404038165/Noctis.png")
        .setDescription("__**Noctis**__\n\n**Boss**\nThe Noctis is a secret tameable boss that has a 0.1% chance to appear when teleporting to a boss fight. It has 3 attacks. The first is a bite that deals moderate damage. The second is a buck that deals moderate damage and heavy torpor. The third attack is a fireball volley that deals heavy damage and moderate torpor.\n\n**Arena**\nThe Noctis arena consists of mostly flat rocky ground with several streams of lava. This lava does 10 damage per second to players instead of instantly killing.\n\n**Strategy**\nUnlike most bosses, the Noctis must be tamed instead of killed as it is invulnerable while wild. To tame it, a player must approach with taming food such as rockarrots or dilo kibble in their hotbar and then mount it.  Once on the Noctis, it can be fed from the hotbar until the taming process is complete. Soothing balm can be used to expedite this. If a player finds themselves in the arena without taming food, there is no reason for alarm as the Noctis poops rockarrots that can be used. Once the boss fight is complete, the player must be mounted on the Noctis to bring it back to the island.")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/834490160724049980/image0.png")


        const bossMenu = new MessageSelectMenu()
        .setCustomId("bossmenu")
        .setPlaceholder('Select a boss')
        .addOptions([
            {
                label: 'Megapithecus Pestis',
                value: 'megapithecus',
                emoji: '856399276586041365'   
            },
            {
                label: 'Broodgenetrix',
                value: 'broodgenetrix',
                emoji: '856399276316688425'
            },
            {
                label: 'Beelzemorbus',
                value: 'beelzemorbus',
                emoji: '856399276748963861'
            },
            {
                label: 'Cubozoa Multis', 
                value: 'cubozoa',
                emoji: '856399276874399745'
            },
            {
                label: 'Obsidioequus',
                value: 'obsidioequus',
                emoji: '856399276787499018'
            },
            {
                label: 'Dodobitus',
                value: 'dodobitus',
                emoji: '856399276364005397'
            },
            {
                label: 'Doedicurus Vastus',
                value: 'doedicurus',
                emoji: '856399276662063105'
            },
            {
                label: 'Gula Beetle',
                value: 'gulabeetle',
                emoji: '856399276828655646'
            },
            {
                label: 'Argentustus',
                value: 'argentustus',
                emoji: '856399277025394708'
            },
            {
                label: 'Noctis',
                value: 'noctis',
                emoji: '856399277025394708'
            }
        ])

        const bossRow = new MessageActionRow()
        .addComponents([bossMenu])

        let msg = ""

        switch(interaction.options._hoistedOptions[0]?.value){
            case "megapithecus":
                msg = await interaction.reply({ embeds: [newEmbedMonkey], components: [bossRow], fetchReply: true}) 
            break;

            case "broodgenetrix":
                msg = await interaction.reply({ embeds: [newEmbedSpider], components: [bossRow], fetchReply: true}) 
            break;

            case "beelzemorbus":
                msg = await interaction.reply({ embeds: [newEmbedFrog], components: [bossRow], fetchReply: true}) 
            break;

            case "cubozoa":
                msg = await interaction.reply({ embeds: [newEmbedCubozoa], components: [bossRow], fetchReply: true}) 
            break;

            case "obsidioequus":
                msg = await interaction.reply({ embeds: [newEmbedChali], components: [bossRow], fetchReply: true}) 
            break;

            case "dodobitus":
                msg = await interaction.reply({ embeds: [newEmbedDodo], components: [bossRow], fetchReply: true}) 
            break;

            case "doedicurus":
                msg = await interaction.reply({ embeds: [newEmbedDoed], components: [bossRow], fetchReply: true}) 
            break;

            case "gula":
                msg = await interaction.reply({ embeds: [newEmbedGula], components: [bossRow], fetchReply: true}) 
            break;
    
            case "argentustus":
                msg = await interaction.reply({ embeds: [newEmbedArgy], components: [bossRow], fetchReply: true}) 
            break;

            case "noctis":
                msg = await interaction.reply({embeds: [newEmbedNoctis], components: [bossRow], fetchReply: true}) 
            break;
            
            default: 
                msg = await interaction.reply({embeds: [newEmbed], components: [bossRow], fetchReply: true}) 

            }
            const filter = (i) => i.user.id === interaction.user.id;
            const collector = msg.createMessageComponentCollector({ filter, idle: 30000 });
            collector.on('collect', i => {
        
                const component = interaction.client.components.get(i.customId)
                component.execute(i)
        
        
        
            });
            collector.on('end', collected => {
                interaction.editReply({components: []})
        
            });
        

	},
};