const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const EmbedCrewCode = new Discord.MessageEmbed()
  
.setColor("RANDOM")
.setTitle("**  » Neptune bot **")
.setThumbnail("https://cdn.discordapp.com/attachments/779099271441809420/780001661166813204/gif_lencor.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/Y4yF6Z3dHM)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=736502881569603685&scope=bot&permissions=8)** **•** **[Oy-ver](https://top.gg/bot/736502881569603685/vote)**
Bir komut hakkında detaylı __yardım için__: **!!yardım**

**• Komutlar**
> [!!sex](https://discord.gg/Y4yF6Z3dHM) → sex gifi atar.
> [!!twork](https://discord.gg/Y4yF6Z3dHM) → twork gifi atar.
> [!!daşşak](https://discord.gg/Y4yF6Z3dHM) → Gif atar.
> [!!amınakoduğum](https://discord.gg/Y4yF6Z3dHM) → *Gif atar.
> [!!şakşak](https://discord.gg/Y4yF6Z3dHM) → Gif atar.

**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : <@591654843014447105>**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
© 2020 Neptune | Tüm hakları saklıdır.
`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['nfsw','nsfw','NFSW'], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'NSFW', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-NSFW'
};