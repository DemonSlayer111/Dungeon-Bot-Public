const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'threatroommenu',
    execute(interaction) {

        const newEmbedArmorless = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Armor Ineffective**__ \nThis threat room type follows the standard threat room pattern of multiple waves of creatures but with the added challenge of ineffective armor. Inside this type of threat room, all damage taken will be calculated as if the player was wearing no armor and no armor durability will be lost. Once the room is completed, armor effectiveness returns.')
        .setThumbnail('https://cdn.discordapp.com/attachments/813639203988570143/828314417884037190/Armor_Ineffective.png');
        
        const newEmbedReduced = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Armor Effectiveness Reduced**__ \nThis threat room type follows the standard threat room pattern of multiple waves of creatures but with the added challenge of only having 50% of the player's armor protect from damage. While in this room, all damage will be calculated as if the player only has half of their current armor. Once the room is completed, armor effectiveness returns to normal.")
        .setThumbnail('https://cdn.discordapp.com/attachments/813639203988570143/828314417304961054/ArmorEffeciveness_Reduced.png');
                
        const newEmbedGrowing = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Growing**__ \nThis type of threat room consists of multiple waves of a single creature. With each wave, the creature will get stronger. Its health, damage, size, and level will all increase. ')
        .setThumbnail('https://cdn.discordapp.com/attachments/813639203988570143/828314489367691325/Growing_Dino.png');
        
        const newEmbedJuggernaut = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Juggernaut**__ \nThis type of threat room has 2 creatures, a single juggernaut creature that has increased stats and multiple minion creatures.The goal of this room is to kill the juggernaut as quickly as possible. While the juggernaut is alive, the minions will continue to spawn and attack the player. ')
        .setThumbnail('https://cdn.discordapp.com/attachments/813639203988570143/828314416033824818/Juggernaut_Dino.png');
        
        const newEmbedSlowed = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Slowed**__ \nThis type of threat room consists of multiple waves of creatures with an additional effect applied to the player. Player movement speed in this room is reduced to 50% of its original value while creature movement speed is unaffected.')
        .setThumbnail('https://cdn.discordapp.com/attachments/813639203988570143/828314506752819210/StickyFeet_Survivor.png');
        
        const newEmbedCold = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Decreasing Temperature**__ \nThis type of threat room consists of multiple waves of creatures with an additional effect applied to the room. The temperature inside of the room will begin decreasing every second and will continue to decrease until the room is completed. If this room is not completed quickly, the cold temperature will begin to deal damage to the player.')
        .setThumbnail('https://cdn.discordapp.com/attachments/813639203988570143/828314507763122196/Temp_Decreased.png');
        
        const newEmbedHot = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Increasing Temperature**__ \nThis type of threat room consists of multiple waves of creatures with an additional effect applied to the room. The temperature inside of the room will begin increasing every second and will continue to increase until the room is completed. If this room is not completed quickly, the hot temperature will begin to deal damage to the player.')
        .setThumbnail('https://cdn.discordapp.com/attachments/813639203988570143/828314509554483220/Temp_Increased.png');
        
        const newEmbedTurbo = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Turbo**__ \nThis room consists of multiple waves of creatures with an additional effect applied to the creatures. The creatures in this room will have a significant speed increase  that will allow even some of the slowest creatures to keep up with a fast player.')
        .setThumbnail('https://cdn.discordapp.com/attachments/813639203988570143/828314413207257118/Turbo_Dino.png');

        switch(interaction.values[0]){
            case "armorineffective":
                interaction.update({embeds: [newEmbedArmorless]})
            break;
            case "armoreffectivenessreduced":
                interaction.update({embeds: [newEmbedReduced]})
            break;
            case "growing":
                interaction.update({embeds: [newEmbedGrowing]})
            break;
            case "juggernaut":
                interaction.update({embeds: [newEmbedJuggernaut]})
            break;
            case "slowed":
                interaction.update({embeds: [newEmbedSlowed]})
            break;            
            case "turbo":
                interaction.update({embeds: [newEmbedTurbo]})
            break;            
            case "decreasingtemperature":
                interaction.update({embeds: [newEmbedCold]})
            break;            
            case "increasingtemperature":
                interaction.update({embeds: [newEmbedHot]})
            break;
        }
    }
}