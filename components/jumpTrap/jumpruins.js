const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
module.exports = {
    name: 'jumpruins',
    execute(interaction) {
        const newEmbedRuins = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Lava Jump**__ \n \n \n**Description** \nThe lava jump trap, found in the ruins theme, is a jump trap variant.  It consists of a large pool of lava that will instantly kill any player that touches it.  The trap itself consists of 3 platforms, 2 moving and one stationary in the center.  The moving platforms are small, circular and placed before and after the middle stationary platform.  They repeatedly sink into the lava and resurface moments later as well as move from side to side..\n \n**Strategy** \nIf a player has sufficient movement speed (150%+) and isn’t encumbered , it is possible to jump from the start of the trap to the center and then from the center to the end.  Another method of crossing involves jumping onto the small moving platforms as well as the center stationary platform, however this method is much riskier due to the fact that the platforms sink below the surface of the lava.  If an aerial symbiote is equipped, the entire trap can be completed in a single jump.  A parachute can be used in place of a symbiote but requires precise timing.")
        .setImage('https://cdn.discordapp.com/attachments/760287836074278963/829197521359601704/Lava_Jump.gif')


        const ruinsdisabled = new MessageButton()
        .setStyle('DANGER')
        .setLabel("Lava Jump")
        .setCustomId("jumpruins")
        .setDisabled(true)

        const jumpice = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel("Ice Jump")
        .setCustomId("jumpice")
        
        const jumpswamp = new MessageButton()
        .setStyle('SUCCESS')
        .setLabel("Swamp Jump")
        .setCustomId("jumpswamp")

          const ruinsrow = new MessageActionRow()
          .addComponents([ruinsdisabled, jumpice, jumpswamp])
          interaction.update({embeds: [newEmbedRuins], components: [ruinsrow]})
    }
}