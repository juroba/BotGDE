const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function() {
    console.log('Je suis connecté !')
    var date = new Date()
    var h = date.getHours()

    console.log(date)
})

const EtatMajor = '472530450490064906'
const Officier = '472529648849387531'
const SsOff = '474198680493096962'
const Grenadier = '472510349124304896'
const Chasseur = '521109585751179274'
const Moyenne = '472510389779955713'
const Jeune = '472511710247387157'
const Aux = '477882992887332893'
const Canon = '476479017911058443'
const constants = require('./const.js');

bot.on('message', (message) => {
    const args = message.content.split(' ')
    if (args[0] === '!event') {
        if (
            message.member.roles.find(
                (r) =>
                    r.id === EtatMajor || r.id === Officier || r.id === SsOff,
            )
        ) {
            switch (args[1]) {
                case 'train':
                    if (args[3] === 'promo') {
                        message.channel
                            .send(
                                '<@&673597849854017597> Rappel : Entrainement à ' +
                                    args[2] +
                                    'h ! Suvi des promotions à ' +
                                    parseInt(args[2]) +
                                    1,
                            )
                            .catch(console.error)
                    } else {
                        message.channel
                            .send(
                                '<@&673597849854017597> Rappel : Entrainement à ' +
                                    args[2] +
                                    'h !',
                            )
                            .catch(console.error)
                    }
                    break
                case 'public':
                    if (args[3]) {
                        message.channel
                            .send(
                                '<@&673597849854017597> Rappel : Linebattle publique à ' +
                                    args[2] +
                                    'h sur le serveur ' +
                                    args[3] +
                                    ' !',
                            )
                            .catch(console.error)
                    } else {
                        message.channel
                            .send(
                                '<@&673597849854017597> Rappel : Linebattle publique à ' +
                                    args[2] +
                                    'h sur le serveur EU8 !',
                            )
                            .catch(console.error)
                    }
                    break
                case 'prive':
                    if (args[3]) {
                        if (args[4] === 'promo') {
                            message.channel
                                .send(
                                    '<@&673597849854017597> Rappel : Linebattle privée à ' +
                                        args[2] +
                                        'h sur le serveur ' +
                                        args[3] +
                                        ' ! Suivi des promotions !',
                                )
                                .catch(console.error)
                        } else {
                            message.channel
                                .send(
                                    '<@&673597849854017597> Rappel : Linebattle privée à ' +
                                        args[2] +
                                        'h sur le serveur ' +
                                        args[3],
                                )
                                .catch(console.error)
                        }
                    } else {
                        message.channel.send('Erreur : ').catch(console.error)
                    }
                    break
                default:
                    message.channel.send('Erreur').catch(console.error)
                    break
            }
        } else {
            message.channel
                .send("Tu n'as pas le droit d'utiliser le bot")
                .catch(console.error)
        }
    } else if (args[0] === '!recensement') {
        if (
            message.member.roles.find(
                (r) =>
                    r.id === EtatMajor || r.id === Officier || r.id === SsOff,
            )
        ) {
            let msg =
                '<@&472145579191828481> Recensez vous pour la lb privée de 21h\nOfficier/Ss-off: <:Bicornegenralensecond:471444733298868248>\nGrenadier:  <:shackodor:471965653113503745>\nChasseur: <:plumodelavieille:491942669132496896>\nMoyenne/jeune/Auxiliaire: <:shackodofficierenchef:472040303403204608>\nCanon: <:canondor:473958247460765707>'
            if (args[1] === 'gde') {
                msg = msg + '\nAdmin: <:Porteetendard:479413424451878913>'
            }
            message.channel
                .send(msg)
                .then((sentEmbed) => {
                    sentEmbed.react(
                        message.guild.emojis.get('471444733298868248'),
                    )
                    sentEmbed.react(
                        message.guild.emojis.get('471965653113503745'),
                    )
                    sentEmbed.react(
                        message.guild.emojis.get('491942669132496896'),
                    )
                    sentEmbed.react(
                        message.guild.emojis.get('472040303403204608'),
                    )
                    sentEmbed.react(
                        message.guild.emojis.get('473958247460765707'),
                    )
                    if (args[1] === 'gde') {
                        sentEmbed.react(
                            message.guild.emojis.get('479413424451878913'),
                        )
                    }
                })
                .catch(console.error)
        } else {
            message.channel
                .send("Tu n'as pas le droit d'utiliser le bot")
                .catch(console.error)
        }
    } else if (args[0] === '!help') {
        if (
            message.member.roles.find(
                (r) =>
                    r.id === EtatMajor || r.id === Officier || r.id === SsOff,
            )
        ) {
            message.channel
                .send(
                    "Liste des commandes : \n!event [public/prive/train] [heure] [serveur] [promo] (ex : !event prive 21 93e promo) : Envoies un rappel pour l'évenement indiqué\n!recensement [gde] : Envoies la demande de recensement\n!presences : Prends les présences (vocal) par corps",
                )
                .catch(console.error)
        } else {
            message.channel
                .send("Tu n'as pas le droit d'utiliser le bot")
                .catch(console.error)
        }
    } else if (args[0] === '!up') {
        if (
            message.member.roles.find(
                (r) =>
                    r.id === EtatMajor || r.id === Officier || r.id === SsOff,
            )
        ) {
            message.channel
                .send(
                    "Tout va bien, je suis réveillée !",
                )
                .catch(console.error)
        } else {
            message.channel
                .send("Tu n'as pas le droit d'utiliser le bot")
                .catch(console.error)
        }
    } else if (args[0] === '!presences') {
        const ems = new Array()
        const officiers = new Array()
        const ssoffs = new Array()
        const chasseurs = new Array()
        const grenadiers = new Array()
        const moyennes = new Array()
        const jeunes = new Array()
        const auxs = new Array()
        const canons = new Array()
        const autres = new Array()
        const channels = message.guild.channels.filter(
            (c) => c.type === 'voice',
        )
        for (const [channelID, channel] of channels) {
            for (const [memberID, member] of channel.members) {
                if (member.roles.find((r) => r.id === EtatMajor)) {
                    if (member.nickname) {
                        ems.push(member.nickname)
                    } else {
                        ems.push(member.user.username)
                    }
                } else if (member.roles.find((r) => r.id === Officier)) {
                    if (member.nickname) {
                        officiers.push(member.nickname)
                    } else {
                        officiers.push(member.user.username)
                    }
                } else if (member.roles.find((r) => r.id === SsOff)) {
                    if (member.nickname) {
                        ssoffs.push(member.nickname)
                    } else {
                        ssoffs.push(member.user.username)
                    }
                } else if (member.roles.find((r) => r.id === Grenadier)) {
                    if (member.nickname) {
                        grenadiers.push(member.nickname)
                    } else {
                        grenadiers.push(member.user.username)
                    }
                } else if (member.roles.find((r) => r.id === Chasseur)) {
                    if (member.nickname) {
                        chasseurs.push(member.nickname)
                    } else {
                        chasseurs.push(member.user.username)
                    }
                } else if (member.roles.find((r) => r.id === Moyenne)) {
                    if (member.nickname) {
                        moyennes.push(member.nickname)
                    } else {
                        moyennes.push(member.user.username)
                    }
                } else if (member.roles.find((r) => r.id === Jeune)) {
                    if (member.nickname) {
                        jeunes.push(member.nickname)
                    } else {
                        jeunes.push(member.user.username)
                    }
                } else if (member.roles.find((r) => r.id === Aux)) {
                    if (member.nickname) {
                        auxs.push(member.nickname)
                    } else {
                        auxs.push(member.user.username)
                    }
                } else if (member.roles.find((r) => r.id === Canon)) {
                    if (member.nickname) {
                        canons.push(member.nickname)
                    } else {
                        canons.push(member.user.username)
                    }
                } else {
                    if (member.nickname) {
                        autres.push(member.nickname)
                    } else {
                        autres.push(member.user.username)
                    }
                }
            }
        }
        ems.sort()
        if (ems.length > 0) {
            message.channel.send('***Etat Major :***')
            ems.map((u) => message.channel.send(u))
        }
        officiers.sort()
        if (officiers.length > 0) {
            message.channel.send('***Officiers :***')
            officiers.map((u) => message.channel.send(u))
        }
        ssoffs.sort()
        if (ssoffs.length > 0) {
            message.channel.send('***Sous-officiers :***')
            ssoffs.map((u) => message.channel.send(u))
        }
        grenadiers.sort()
        if (grenadiers.length > 0) {
            message.channel.send('***Grenadiers :***')
            grenadiers.map((u) => message.channel.send(u))
        }
        chasseurs.sort()
        if (chasseurs.length > 0) {
            message.channel.send('***Chasseurs :***')
            chasseurs.map((u) => message.channel.send(u))
        }
        moyennes.sort()
        if (moyennes.length > 0) {
            message.channel.send('***Moyennes :***')
            moyennes.map((u) => message.channel.send(u))
        }
        jeunes.sort()
        if (jeunes.length > 0) {
            message.channel.send('***Jeunes :***')
            jeunes.map((u) => message.channel.send(u))
        }
        auxs.sort()
        if (auxs.length > 0) {
            message.channel.send('***Auxiliaires :***')
            auxs.map((u) => message.channel.send(u))
        }
        canons.sort()
        if (canons.length > 0) {
            message.channel.send('***Artilleurs :***')
            canons.map((u) => message.channel.send(u))
        }
        autres.sort()
        if (autres.length > 0) {
            message.channel.send('***Autres :***')
            autres.map((u) => message.channel.send(u))
        }
    }
})
bot.login(constants.TOKEN)
