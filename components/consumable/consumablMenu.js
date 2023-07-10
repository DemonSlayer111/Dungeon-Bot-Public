const Discord = require('discord.js');
module.exports = {
	name: "consumablemenu",
	execute(interaction) {
        const embedFocal = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Focal Chili**__\n\n**Description**\nFocal Chili increases player movement speed by 25% and increases crafting speed by 100%. This effect lasts for 15 minutes. \n\n**Recipe**\n9 × <:CookedMeatFishJerky:844801219750527027> Cooked Meat, Cooked Fish Meat, or Cooked Meat Jerky\n5 × <:Citronal:844801463988518922> Citronal\n20 × <:Amarberry:844801563415674922> Amarberry\n20 × <:Azulberry:844801651998851073> Azulberry\n20 × <:Tintoberry:844801865782132766> Tintoberry\n10 × <:Mejoberry:844801959847919657> Mejoberry\n1 × <:Water:844802113951105074> Water")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591082860150814/844750468378787840/Focal_Chili.png")
    
    
        const embedLazarus = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Lazarus Chowder**__\n\n**Description**\nLazarus Chowder reduces oxygen consumption to 15% of the normal rate and also grants a small amount of stamina regeneration. This effect lasts for 10 minutes.\n\n**Recipe**\n9 × <:CookedMeatFishJerky:844801219750527027> Cooked Meat, Cooked Fish Meat, or Cooked Meat Jerky\n5 × <:Savoroot:844972460955664394> Savoroot\n5 × <:Longrass:844972558540341269> Longrass\n10 × <:Mejoberry:844801959847919657> Mejoberry\n2 × <:Narcotic:844972748798296117> Narcotic\n1 × <:Water:844802113951105074> Water")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591082860150814/844756520650276864/Lazarus_Chowder.png")
    
    
        const embedEnduro = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Enduro Stew**__\n\n**Description**\nEnduro Stew increases melee damage by 30% and also grants a small amount of health regeneration. This effect lasts for 15 minutes.\n\nNOTE: Consuming an Enduro Stew will end the effects of a Battle Tartare and Medical Brews will not heal the player while active.\n\n**Recipe**\n9 × <:CookedMeatFishJerky:844801219750527027> Cooked Meat, Cooked Fish Meat, or Cooked Meat Jerky\n5 × <:Rockarrot:844973339096907896> Rockarrot\n5 × <:Savoroot:844972460955664394> Savoroot\n10 × <:Mejoberry:844801959847919657> Mejoberry\n2 × <:Stimulant:844973470013063258> Stimulant\n1 × <:Water:844802113951105074> Water")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591082860150814/844760245171388446/Enduro_Stew.png")
    
    
        const embedCalien = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Calien Soup**__\n\n**Description**\nCalien Soup grants +50 increased hyperthermal insulation and reduces water consumption by 25%. This effect lasts for 15 minutes.\n\n**Recipe**\n5 × <:Citronal:844801463988518922> Citronal\n20 × <:Tintoberry:844801865782132766> Tintoberry\n20 × <:Amarberry:844801563415674922> Amarberry\n10 × <:Mejoberry:844801959847919657> Mejoberry\n2 × <:Stimulant:844973470013063258> Stimulant\n1 × <:Water:844802113951105074> Water")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591082860150814/844761389036994570/Calien_Soup.png")
    
    
        const embedFria = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Fria Curry**__\n\n**Description**\nFria Curry grants +50 increased hypothermal insulation and reduces food consumption by 25%. This effect lasts for 15 mintues.\n\n**Recipe**\n5 × <:Longrass:844972558540341269> Longrass\n5 × <:Rockarrot:844973339096907896> Rockarrot\n20 × <:Azulberry:844801651998851073> Azulberry\n10 × <:Mejoberry:844801959847919657> Mejoberry\n2 × <:Narcotic:844972748798296117> Narcotic\n1 × <:Water:844802113951105074> Water")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591082860150814/844763391000313856/Fria_Curry.png")
    
    
        const embedMedical = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Medical Brew**__\n\n**Descripton**\nMedical Brews heal the player, regenerating 40 health over 5 seconds.\n\nNOTE: Medical Brews will not heal any player under the effects of Enduro Stew or Battle Tartare.\n\n**Recipe**\n20 × <:Tintoberry:844801865782132766> Tintoberry\n2 × <:Narcotic:844972748798296117> Narcotic\n1 × <:Water:844802113951105074> Water\n\n**Potent Medical Brew**\nPotent Medical Brews behave the same as their normal counterpart but restore 70 health instead of 40.\n\n**Recipe**\n1 × <:PotentDust:844974616060887070> Potent Dust\n20 × <:Tintoberry:844801865782132766> Tintoberry\n2 × <:Narcotic:844972748798296117> Narcotic\n1 × <:Water:844802113951105074> Water")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591082860150814/844767041553956914/Medical_Brew.png")
    
    
        const embedEnergy = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Energy Brew**__\n\n**Description**\nEnergy Brews refill the player's stamina, regenerating 40 stamina over 5 seconds.\n\n**Recipe**\n20 × <:Azulberry:844801651998851073> Azulberry\n2 × <:Stimulant:844973470013063258> Stimulant\n1 × <:Water:844802113951105074> Water\n\n**Potent Energy Brew**\nPotent Energy Brews behave the same as their normal counterpart but restore 70 stamina instead of 40.\n\n**Recipe**\n1 × <:PotentDust:844974616060887070> Potent Dust\n20 × <:Azulberry:844801651998851073> Azulberry\n2 × <:Stimulant:844973470013063258> Stimulant\n1 × <:Water:844802113951105074> Water")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591082860150814/844770349622100008/Energy_Brew.png")
    
    
        const embedTartare = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Battle Tartare**__\n\n**Descripton**\nBattle Tartare increases melee by 60%, movement speed by 50%, grants 15% damage resistance, and increases stamina regeneration, however it also increases water and food by 50% and causes 0.45 health to be lost every second. This effect lasts for 3 minutes.\n\nNOTE: Consuming a Battle Tartare will end the effects of an Enduro Stew and Medical Brews will not heal the player while active.\n\n**Recipe**\n3 × <:RawPrimeMeatorRawPrimeFishMeat:844975483796062250> Raw Prime Meat or Raw Prime Fish Meat\n20 × <:Mejoberry:844801959847919657> Mejoberry\n8 × <:Stimulant:844973470013063258> Stimulant\n2 × <:Rare_Flower:844975614036803625> Rare Flower\n1 × <:Citronal:844801463988518922> Citronal\n1 × <:Longrass:844972558540341269> Longrass\n1 × <:Water:844802113951105074> Water")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591082860150814/844774667272978432/Battle_Tartare.png")
    
    
        const embedMindWipe = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Mindwipe Tonic**__\n\n**Description**\nMindwipe Tonics refund all engrams, engram points, and all player levels, resetting the player to level 1 but retaining all experience. This allows the player to level up to their previous level immediately but with a different stat distribution if the player wants.\n\n**Recipe**\n24 × <:CookedPrimeMeatFishJerky:844975919600762892> Cooked Prime Meat, Cooked Prime Fish Meat, or Prime Meat Jerky\n200 × <:Mejoberry:844801959847919657> Mejoberry\n72 × <:Narcotic:844972748798296117> Narcotic\n72 × <:Stimulant:844973470013063258> Stimulant\n20 × <:Rare_Mushroom:844976108146393129> Rare Mushroom\n20 × <:Rare_Flower:844975614036803625> Rare Flower\n1 × <:Water:844802113951105074> Water")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591082860150814/844776331866931243/Mindwipe_Tonic_1.png")
    
    
        const embedHemostatic = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Hemostatic Serum**__\n\n**Description**\nHemostatic Serums grant a burst of health on use and continue to provide significant healing to the player. This effect lasts for 3 minutes.\n\n**Minor Hemostatic Serum**\nMinor Hemostatic Serums behave the same as their normal counterpart but restore less health.\n\n**Recipe**\nHemostatic Serums cannot be crafted. They must be obtained from dungeon chests or purchased in the in-game store.")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591082860150814/844794610052366347/Hemostatic_Serum_28Mobile29.png")
    
    
        const embedAntidote = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Lesser Antidote**__\n\n**Description**\nLesser Antidote cures the player of swamp fever, the gnashed debuff, dilophosaur venom, and troodon poison. It will continue to protect against these ailments for its duration. This effect lasts for 3 minutes.\n\n**Recipe (Mortar and Pestle)**\n10 × <:Rare_Flower:844975614036803625> Rare Flower\n10 ×  <:Rare_Mushroom:844976108146393129> Rare Mushroom\n3 × <:Leech_Blood_or_Horns:844977361170333697> Leech Blood or Horns\n1 × <:Narcotic:844972748798296117> Narcotic\n\n**Recipe (Chemistry Bench)**\n40 × <:Rare_Flower:844975614036803625> Rare Flower\n40 × <:Rare_Mushroom:844976108146393129> Rare Mushroom\n12 × <:Leech_Blood_or_Horns:844977361170333697> Leech Blood or Horns\n4 × <:Narcotic:844972748798296117> Narcotic")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591082860150814/844795902967414784/Lesser_Antidote.png")
    
    
         const embedStimulant = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Stimulant**__\n\n**Description**\nStimulants reduce player torpor by 40 but also drain 15 water for each one that is consumed. They also restore a small amount of stamina.\n\n**Recipe (Mortar and Pestle)**\n5 × <:Stimberry:845013462735257611> Stimberry\n2 × <:Sparkpowder:845013364874280960> Sparkpowder\n\n**Recipe (Chemistry Bench)**\n20 × <:Stimberry:845013462735257611> Stimberry\n8 × <:Sparkpowder:845013364874280960> Sparkpowder")
        .setThumbnail("https://cdn.discordapp.com/attachments/813591082860150814/844800930380513290/Stimulant.png")
    
    
 

        switch(interaction.values[0]){
            case 'focal':
            interaction.update({embeds: [embedFocal]})
            break;

            case 'lazarus':
            interaction.update({embeds: [embedLazarus]})
            break;

            case 'enduro':
            interaction.update({embeds: [embedEnduro]}) 
            break;

            case 'calien':
            interaction.update({embeds: [embedCalien]})
            break;
    
            case 'fria':
            interaction.update({embeds: [embedFria]})
            break;
    
            case 'medical':
            interaction.update({embeds: [embedMedical]})    
            break;

            case 'energy':
            interaction.update({embeds: [embedEnergy]}) 
            break;
        
            case 'tartare':
            interaction.update({embeds: [embedTartare]})        
            break;
        
            case 'mindwipe':
            interaction.update({embeds: [embedMindWipe]})        
            break;

            case 'hemostatic':
            interaction.update({embeds: [embedHemostatic]})         
            break;

            case 'antidote':
            interaction.update({embeds: [embedAntidote]})        
            break;

            case 'stimulant':
            interaction.update({embeds: [embedStimulant]})        
            break;
        }
	},
};