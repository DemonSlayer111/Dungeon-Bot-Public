const Discord = require('discord.js');
const prefixModel = require("../../schemas/prefix")
module.exports = {
	name: 'equipment',
	description: 'Get information about ARK consumables',
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
          
        const embed = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription(`__**Equipment**__\nEquipment items are items that provide the player with additional utility or offensive capabilities when equipped. Most equipment items have a durability bar and can only be used until their durability is depleted. Once depleted, they can be repaired to restore durability and continue functioning like they did before.\n\n**Equipment Types**\n\`${prefix2}help equipment\` - Lists commands for popular equipment items`)
        const embedPump = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Pump-Action Shotgun**__\n\n**Description**\nThe Pump-Action Shotgun excels at short-medium range. It can shoot up to 6 times before reloading and can do so fairly quickly. Each shot is able to hit up to 14 times and deals massive damage at short range, where all 14 shots are likely to connect. While still strong at greater distance, its firepower diminishes quickly against smaller targets that won't get hit by most of the pellets.\n\nNOTE: Creatures only take 70% damage from guns.\n\n**Stats**\nDamage: 46\nDurability: 300\nAmmo: <:Simple_Shotgun_Ammo:874385617197350912> Simple Shotgun Ammo\n\n**Recipe (Primitive)**\n30 × <:Metal_Ingot:874385617444810753> Metal Ingot\n55 × <:Polymer_or_Organic_Polymer:874385617310584842> Polymer or Organic Polymer\n45 × <:Cementing_Paste:874385616874389525> Cementing  Paste or Achatina Paste")
        .setThumbnail('https://cdn.discordapp.com/attachments/813591120704438282/874387398321111121/Pump-Action_Shotgun_1.png')
        const embedShotgun = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Shotgun**__\n\n**Description**\nThe Shotgun excels at very short range. It can shoot up to 2 times before reloading and can do so fairly quickly. Each shot is able to hit up to 10 times and deals massive damage at short range, where all 10 shots are likely to connect. At longer distances, its effectiveness is greatly reduced due to the spread of the pellets.\n\nNOTE: Creatures only take 70% damage from guns.\n\n**Stats**\nDamage: 64\nDurability: 300\nAmmo: <:Simple_Shotgun_Ammo:874385617197350912> Simple Shotgun Ammo\n\n**Recipe (Primitive)**\n80 × <:Metal_Ingot:874385617444810753> Metal Ingot\n20 × <:Wood:894385321653964831> Wood\n25 × <:Hide:894385321943396362> Hide")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591120704438282/894385681483329626/Shotgun_1.png")
        const embedCompound = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Compound Bow**__\n\n**Description**\nThe Compound Bow is a powerful bow that excels at medium-long range. It reloads fairly quickly and deals heavy damage that pierces armor when equipped with metal arrows. Although capable at shorter ranges, the frequent reloading combined with the reduced movement speed when reloading make the player susceptible to damage.\n\n**Stats**\nDamage: 175.5\nDurability: 55\nAmmo: <:Metal_Arrow:894428481176350732> Metal Arrow\n\n**Recipe (Primitive)**\n55 × <:Polymer_or_Organic_Polymer:874385617310584842> Polymer or Organic Polymer\n85 × <:Metal_Ingot:874385617444810753> Metal Ingot\n75 × <:Cementing_Paste:874385616874389525> Cementing Paste")
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/894429153863008306/Compound_Bow.png")
        const embedPike = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Pike**__\n\n**Description**\nThe pike is a long range melee weapon that knocks back smaller creatures. It is able to keep smaller creatures at a distance while dealing damage, but is less effective against larger creatures due to the lack of knockback and its slower attack speed.\n\n**Stats**\nDamage: 50\nDurability: 40\n\n**Recipe (Primitive)**\n10 × <:Metal_Ingot:874385617444810753> Metal Ingot\n10 ×  <:Wood:894385321653964831> Wood\n20 × <:Hide:894385321943396362> Hide")
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/894446965142716437/Pike.png")
        const embedSword = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Sword**__\n\n**Description**\nThe sword is a short range melee weapon that swings fast and deals large damage. The sword has a high damage output and is best used against fast enemies that will be able to close the gap between themselves and the player. Due to the short range of the sword, return damage is almost always guaranteed and it is less advantageous against slower targets.\n\n**Stats**\nDamage: 90\nDurability: 70\n\n**Recipe (Primitive)**\n50 × <:Metal_Ingot:874385617444810753> Metal Ingot\n1 × <:Wood:894385321653964831> Wood\n15 × <:Hide:894385321943396362> Hide")
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/894462024870936576/Sword_1.png")
        const embedSkillet = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Iron Skillet**__\n\n**Description**\nThe Iron Skillet is a short range melee weapon with the ability to knock out creatures. When used against most smaller creatures, they will be instantly knocked out regardless of their level. This makes it easy to deal with threats that can be knocked out in this manner. The Iron Skillet struggles against larger creatures however, due to its poor damage output and its inability to knock those creatures unconscious.\n\nNOTE: The Iron Skillet is an arketype and can only be crafted if owned by the player.\n\n**Stats**\nDamage: 1\nDurability: 70\n\n**Recipe**\n80 × <:Charcoal:894630656980680787> Charcoal\n100 × <:Obsidian:894630657152675930> Obsidian\n5 × <:PotentDust:844974616060887070> Potent Dust")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591120704438282/894631223815725066/Iron_Skillet_28Mobile29.png")
        const embedSymbiote = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Aerial Symbiote**__\n\n**Description**\nThe Aerial Symbiote is a wearable utility item that allows players to glide when airborne. Due to its gliding ability, it makes clearing large gaps, such as those found in jump traps, fairly easy.  It is important to note that the symbiote continuously loses durability when in use.\n\nNOTE: The Aerial Symbiote is an arketype and can only be crafted if owned by the player.\n\n**Recipe**\n100 × <:Chitin:894642272505835540> Chitin\n15 × <:PotentDust:844974616060887070> Potent Dust\n1 × <:Neura_Husk:894642489477169233> Neura Husk")
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/894642944345247804/Aerial_Symbiote_28Mobile29.png")
        const embedFrog = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Frog Feet**__\n\n**Description**\nThe Frog Feet are a utility item equipped to the boot slot. When equipped, they allow the player to jump roughly twice as high, allowing for larger gaps to be cleared with each jump. They also increase swimming speed and maneuverability greatly, however land speed is moderately reduced when equipped.\n\nNOTE: Frog Feet are an arketype and can only be crafted if owned by the player.\n\n**Stats**\nDurability: 45\n\n**Recipe**\n30 × <:Organic_Polymer:894667316216864798> Organic Polymer\n45 × <:Hide:894385321943396362> Hide\n30 × <:Fiber:894667316070088725> Fiber\n4 × <:Frog_Legs:894667316523053176> Frog Legs")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591120704438282/894667905222971402/Frog_Feet_28Mobile29.png")
        const embedAssault = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Assault Rifle**__\n\n**Description**\nThe Assault Rifle is an automatic rifle capable of high damage at almost any range. Due to its high rate of fire and its relatively high magazine capacity of 40, it outputs large amounts of damage without needing to reload. While less effective at longer range due to reduced accuracy, it is still a viable weapon. Its rate of fire can lead survivors to quickly run out of ammo if they aren't prepared however.\n\nNOTE: Creatures only take 70% damage from guns.\n\n**Stats**\nDamage: 47\nDurability: 40\nAmmo: <:Advanced_Rifle_Bullet:894676831863709706> Advanced Rifle Bullet\n\n**Recipe (Primitive)**\n60 × <:Polymer_or_Organic_Polymer:874385617310584842> Polymer or Organic Polymer\n35 × <:Metal_Ingot:874385617444810753> Metal Ingot\n50 × <:Cementing_Paste:874385616874389525> Cementing Paste or Achatina Paste")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591120704438282/894677536309669970/Assault_Rifle.png")
        const embedShield = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Riot Shield**__\n\n**Description**\nThe Riot Shield is a defensive item equipped in the offhand slot. When held, it blocks all damage from the direction it is facing, but loses durability while doing so. It is useful for blocking burst damage but does not allow for return fire when held.\n\n**Stats**\nDurability: 2300\n\n**Recipe (Primitive)**\n120 × <:Polymer_or_Organic_Polymer:874385617310584842> Polymer or Organic Polymer\n200 × <:Crystal:894687390210359337> Crystal\n120 × <:Silica_Pearls:894687389933514763> Silica Pearls\n40 × <:Metal_Ingot:874385617444810753> Metal Ingot")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591120704438282/894691255349551164/Riot_Shield.png")
        const embedFlak = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Flak Armor**__\n\n**Description**\nThe Flak Armor set is a lightweight and versatile set of armor. Compared to other armor sets, Flak Armor weighs very little and provides large armor and durability boosts. It is also relatively cheap to craft, making it accessible to most players, but can cause players to overheat in hot weather.\n\n**Stats**\nArmor: 100\nDurability: 120\n\n**Recipe (Primitive Set)**\n53 × <:Metal_Ingot:874385617444810753> Metal Ingot\n40 × <:Hide:894385321943396362> Hide\n18 × <:Fiber:894667316070088725> Fiber")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591120704438282/894697113802391603/Flak_Helmet_2.png")
        const embedRiot = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Riot Armor**__\n\n**Description**\nThe Riot Armor set is a durable and resilient set of armor. Riot Armor has some of the highest armor and durability values out of all armor sets, and will also reduce torpor that its wearer receives from attacks. It is very heavy however, and is prone to causing players to overheat.\n\n**Stats**\nArmor: 115\nDurability: 120\n\n**Recipe (Primitive Set)**\n245 × <:Polymer_or_Organic_Polymer:874385617310584842> Polymer or Organic Polymer\n138 × <:Silica_Pearls:894687389933514763> Silica Pearls\n40 × <:Hide:894385321943396362> Hide\n18 × <:Fiber:894667316070088725> Fiber\n35 × <:Crystal:894687390210359337> Crystal")
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/894703254598987796/Riot_Helmet.png")
        const embedGhillie = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Ghillie Armor**__\n\n**Descripton**\nThe Ghille Armor set provides excellent protection against warm temperatures. In addition to its effectiveness against the heat, it also provides the wearer with camouflage, allowing the wearer to go undetected more easily. While cheap to craft, it provides minimal protection from physical attacks, opting to provide utility.\n\n**Stats**\nArmor: 32\nDurability: 60\n\n**Recipe (Primitive Set)**\n25 × <:Organic_Polymer:894667316216864798> Organic Polymer\n40 × <:Hide:894385321943396362> Hide\n18 × <:Fiber:894667316070088725> Fiber")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591120704438282/894709787302969414/Ghillie_Mask.png")
        const embedFur = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Fur Armor**__\n\n**Description**\nThe Fur Armor set provides excellent protection against cold temperatures. It can allow players to survive in even the coldest environments and also provides moderate resistance against physical attacks. It is heavy and is expensive to craft however.\n\n**Stats**\nArmor: 40\nDurability: 120\n\n**Recipe (Primitive Set)**\n320 × <:Pelt:894724959140732929> Pelt\n53 × <:Metal_Ingot:874385617444810753> Metal Ingot\n40 × <:Hide:894385321943396362> Hide\n18 × <:Fiber:894667316070088725> Fiber")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591120704438282/894725636671807498/Fur_Cap_1.png")
        const embedTekRifle = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**TEK Rifle**__\n\n**Description**\nThe TEK Rifle is an advanced rifle that fires explosive energy blasts. Unlike most guns, the TEK Rifle doesn't have a fixed magazine capacity. Instead, it shoots continuously until it overheats, and must cool down before it can fire again. It fires fast, does area damage, and can even shoot underwater, but loses durability when striking terrain and leaves the player vulnerable when overheating.\n\n**Stats**\nDamage:  150\nDurability: 80\nAmmo: <:Eery_Element:894753875901427813> Eery Element\n\n**Recipe (Primitive)**\n120 × <:Polymer_or_Organic_Polymer:874385617310584842> Polymer or Organic Polymer\n450 × <:Metal_Ingot:874385617444810753> Metal Ingot\n120 × <:Crystal:894687390210359337> Crystal\n55 × <:Black_Pearl:894754608700882984> Black Pearl\n40 × <:Eery_Element:894753875901427813> Eery Element")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591120704438282/894755039829192746/Tek_Rifle.png")
        const embedTekShield = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**TEK Shield**__\n\n**Description**\nThe TEK Shield is an advanced shield that protects the wielder from damage. When held it blocks all damage from the direction it is held in, but loses durability while doing so. If it is powered by Eery Element, projectiles from enemies will be reflected back.\n\n**Stats**\nDurability: 2300\n\n**Recipe (Primitive)**\n240 × <:Polymer_or_Organic_Polymer:874385617310584842> Polymer or Organic Polymer\n900 × <:Metal_Ingot:874385617444810753> Metal Ingot\n240 × <:Crystal:894687390210359337> Crystal\n100 × <:Black_Pearl:894754608700882984> Black Pearl\n10 × <:Eery_Element:894753875901427813> Eery Element")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591120704438282/894765239474737213/Tek_Shield_28Ragnarok29.png")
        const embedTekArmor = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**TEK Armor**__\n\n**Description**\nThe TEK Armor set is an advanced armor set that protect and enhances the wearer. It provides a large amount of armor to protect the wearer from damage. It also grants the wearer +5% Movement Speed, +5% Melee Damage, and -10% fall damage for each piece equipped. These numbers increase to 10%, 10%, and 20% respectively, and the TEK Helmet functions as a gas mask, when powered by Eery Element. \n\n**Stats**\nArmor: 180\nDurability: 300\n\n**Recipe (Primitive)**\n600 × <:Polymer_or_Organic_Polymer:874385617310584842> Polymer or Organic Polymer\n2250 × <:Metal_Ingot:874385617444810753> Metal Ingot\n600 × <:Crystal:894687390210359337> Crystal\n50  × <:Eery_Element:894753875901427813> Eery Element\n275 × <:Black_Pearl:894754608700882984> Black Pearl")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591120704438282/894770363983073360/Tek_Helmet_1.png")
        
        const equipmentMenu = new Discord.MessageSelectMenu()
        .setCustomId('equipmentmenu')
        .setPlaceholder('Select equipment')
        .addOptions(
            [
                {
                    label: 'Pump-Action Shotgun',
                    value: 'pump',
                    emoji: '894772163528249394'
                },
                {
                    label: 'Shotgun',
                    value: 'shotgun',
                    emoji: '894772448736722954'
                },
                {
                    label: 'Compound Bow',
                    value: 'compound',
                    emoji: '894772473399230484'
                },
                {
                    label: 'Pike',
                    value: 'pike',
                    emoji: '894772504646799391'
                },
                {
                    label: 'Sword',
                    value: 'sword',
                    emoji: '894772518357962772'
                },
                {
                    label: 'Iron Skillet',
                    value: 'skillet',
                    emoji: '894774212869390357'
                },
                {
                    label: 'Aerial Symbiote',
                    value: 'symbiote',
                    emoji: '894774253075976222'
                },
                {
                    label: 'Frog Feet',
                    value: 'frog',
                    emoji: '894774304640745473'
                },
                {
                    label: 'Assault Rifle',
                    value: 'assault',
                    emoji: '894774351633719406'
                },
                {
                    label: 'Riot Shield',
                    value: 'shield',
                    emoji: '894774518172774410'
                },
                {
                    label: 'Flak Armor',
                    value: 'flak',
                    emoji: '894774373116944434'
                },
                {
                    label: 'Riot Armor',
                    value: 'riot',
                    emoji: '894774399008378941'
                },
                {
                    label: 'Ghillie Armor',
                    value: 'ghillie',
                    emoji: '894774546094252096'
                },
                {
                    label: 'Fur Armor',
                    value: 'fur',
                    emoji: '894774568256942161'
                },
                {
                    label: 'TEK Rifle',
                    value: 'tekrifle',
                    emoji: '894774587806593024'
                },
                {
                    label: 'TEK Shield',
                    value: 'tekshield',
                    emoji: '894774613719011390'
                },
                {
                    label: 'TEK Armor',
                    value: 'tekarmor',
                    emoji: '894774637194518589'
                }
            ]
        )
        
        const equipmentRow = new Discord.MessageActionRow()
        .addComponents([equipmentMenu])

        let msg = ''
        switch(interaction.options._hoistedOptions[0]?.value){
            case 'pump':
                msg = await interaction.reply({embeds: [embedPump], components: [equipmentRow], fetchReply: true })
            break;

            case 'shotgun':
                msg = await interaction.reply({embeds: [embedShotgun], components: [equipmentRow], fetchReply: true })
            break;

            case 'compound':
                msg = await interaction.reply({embeds: [embedCompound], components: [equipmentRow], fetchReply: true })
            break;

            case "pike":
                msg = await interaction.reply({embeds: [embedPike], components: [equipmentRow], fetchReply: true })
            break;

            case 'sword':
                msg = await interaction.reply({embeds: [embedSword], components: [equipmentRow], fetchReply: true })
            break;
        
            case 'skillet':
                msg = await interaction.reply({embeds: [embedSkillet], components: [equipmentRow], fetchReply: true })
            break;

            case 'symbiote':
                msg = await interaction.reply({embeds: [embedSymbiote], components: [equipmentRow], fetchReply: true })
            break;

            case 'frog':
                msg = await interaction.reply({embeds: [embedFrog], components: [equipmentRow], fetchReply: true })
            break;

            case 'assault':
                msg = await interaction.reply({embeds: [embedAssault], components: [equipmentRow], fetchReply: true })
            break;

            case 'shield':
                msg = await interaction.reply({embeds: [embedShield], components: [equipmentRow], fetchReply: true })
            break;

            case 'flak':
                msg = await interaction.reply({embeds: [embedFlak], components: [equipmentRow], fetchReply: true })
            break;

            case 'riot':
                msg = await interaction.reply({embeds: [embedRiot], components: [equipmentRow], fetchReply: true })
            break;

            case 'ghillie':
                msg = await interaction.reply({embeds: [embedGhillie], components: [equipmentRow], fetchReply: true })
            break;

            case 'fur':
                msg = await interaction.reply({embeds: [embedFur], components: [equipmentRow], fetchReply: true })
            break;

            case 'tekrifle':
                msg = await interaction.reply({embeds: [embedTekRifle], components: [equipmentRow], fetchReply: true })  
            break;

            case 'tekshield':
                msg = await interaction.reply({embeds: [embedTekShield], components: [equipmentRow], fetchReply: true })  
            break;

            case 'tekarmor':
                msg = await interaction.reply({embeds: [embedTekArmor], components: [equipmentRow], fetchReply: true })  
            break;
            default:
                msg = await interaction.reply({embeds: [embed], components: [equipmentRow], fetchReply: true })
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
