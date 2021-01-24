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
.setTitle("**  » Neptune bot  **")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/av8Dx7QK)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=736502881569603685&scope=bot&permissions=8)** **•** **[Oy-ver](https://top.gg/bot/736502881569603685/vote)**
Bir komut hakkında detaylı __yardım için__: **!!yardım**

• Bot ile ilgili tavsiyelerinizi veya istediniğiniz bi kodu **!!istek-kod** yazarak bize iletebilirsiniz.
• Hatalı bi kod veya buglu bi kod bulursanız **!!bug-bildir** yazarak bize bildirebilirsiniz.

**• Komutlar**
> [!!moderasyon](https://discord.gg/av8Dx7QK) → Moderasyon komudları görüntüler.
> [!!kullanıcı](https://discord.gg/av8Dx7QK) → Kullanıcı komutları.
> [!!eğlence](https://discord.gg/av8Dx7QK) → eğlence komutları.
> [!!logo](https://discord.gg/av8Dx7QK) → Logo komutları.
> [!!gifyardım](https://discord.gg/av8Dx7QK) → Gif komutları.
> [!!extra](https://discord.gg/av8Dx7QK) → Extra komutlar.


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
    aliases: [], 
    permLevel: 0 
};

  exports.help = {
    name: 'yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};