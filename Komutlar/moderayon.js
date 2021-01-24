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
.setTitle("**  » Neptune Bot  **")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/av8Dx7QK)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=736502881569603685&scope=bot&permissions=8)** **•** **[Oy-ver](https://top.gg/bot/736502881569603685/vote)**
Bir komut hakkında detaylı __yardım için__: **!!yardım**


**• Komutlar**
> [!!mute](https://discord.gg/av8Dx7QK) →  Etiketlediğin kişiye mute atar!
> [!!unmute](https://discord.gg/av8Dx7QK) →  Etiketlediğin kişinin mutesini açar!
> [!!kayıt-bilgi](https://discord.gg/av8Dx7QK) →  Kayıt için bilgi.
> [!!taç](https://discord.gg/av8Dx7QK) → Sunucunun sahibini gösterir.
> [!!sil](https://discord.gg/av8Dx7QK) → Yazdığınız miktarda mesajı siler.
> [!!ban](https://discord.gg/av8Dx7QK) → Etiketlediğiniz kişiyi sunucudan banlarsınız.
> [!!kick](https://discord.gg/av8Dx7QK) → Etiketlediğiniz kişiyi sunucudan atarsınız.
> [!!duyuru](https://discord.gg/av8Dx7QK) → Bot yazdıgının mesajı duyuru yapar.
> [!!küfür](https://discord.gg/av8Dx7QK) → Küfür engel sistemini açarsınız.
> [!!reklam](https://discord.gg/av8Dx7QK) → Reklam engel sistemi açarsınız.
> [!!slowmode](https://discord.gg/av8Dx7QK) → Yavaş modu ayarlarsınız. 
> [!!forceban](https://discord.gg/av8Dx7QK) →  ID ile ban atar!
> [!!unban](https://discord.gg/av8Dx7QK) → Birisinin banını açarsınız.
> [!!sa-as](https://discord.gg/av8Dx7QK) →  Sa-As sistemini aktif eder.
> [!!sunucubilgi](https://discord.gg/av8Dx7QK) →  Sunucu hakkında bilgi verir
> [!!üyedurum](https://discord.gg/av8Dx7QK) →  Sunucu üyeleri hakkında bilgi verir
> [!!çekiliş](https://discord.gg/av8Dx7QK) → Çekiliş yaparsınız.


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
    name: 'moderasyon', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-moderasyon'
};