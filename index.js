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
const Cavalerie = '682526207400476674'
const Voltigeur = '521109585751179274'
const Canon = '476479017911058443'
const Premiere = '472510389779955713'
const Seconde = '477882992887332893'
const Troisieme = '682526866753716227'
const Quatrieme = '472511710247387157'
const constants = require('./const.js')

bot.on('message', (message) => {
    const args = message.content.split(' ')
    if (args[0] === '!event') {
        if (
            message.member.roles.find(
                (r) => r.id === EtatMajor || r.id === Officier || r.id === SsOff,
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
                                '<@&673597849854017597> Rappel : Entrainement à ' + args[2] + 'h !',
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
            message.channel.send("Tu n'as pas le droit d'utiliser le bot").catch(console.error)
        }
    } else if (args[0] === '!recensement') {
        if (
            message.member.roles.find(
                (r) => r.id === EtatMajor || r.id === Officier || r.id === SsOff,
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
                    sentEmbed.react(message.guild.emojis.get('471444733298868248'))
                    sentEmbed.react(message.guild.emojis.get('471965653113503745'))
                    sentEmbed.react(message.guild.emojis.get('491942669132496896'))
                    sentEmbed.react(message.guild.emojis.get('472040303403204608'))
                    sentEmbed.react(message.guild.emojis.get('473958247460765707'))
                    if (args[1] === 'gde') {
                        sentEmbed.react(message.guild.emojis.get('479413424451878913'))
                    }
                })
                .catch(console.error)
        } else {
            message.channel.send("Tu n'as pas le droit d'utiliser le bot").catch(console.error)
        }
    } else if (args[0] === '!help') {
        if (
            message.member.roles.find(
                (r) => r.id === EtatMajor || r.id === Officier || r.id === SsOff,
            ) || message.member.id === '379534987336351758'
        ) {
            message.channel
                .send(
                    "Liste des commandes : \n!event [public/prive/train] [heure] [serveur] [promo] (ex : !event prive 21 93e promo) : Envoies un rappel pour l'évenement indiqué\n!recensement [gde] : Envoies la demande de recensement\n!presences : Prends les présences (vocal) par corps",
                )
                .catch(console.error)
        } else {
            message.channel.send("Tu n'as pas le droit d'utiliser le bot").catch(console.error)
        }
    } else if (args[0] === '!up') {
        if (
            message.member.roles.find(
                (r) => r.id === EtatMajor || r.id === Officier || r.id === SsOff,
            )
        ) {
            message.channel.send('Tout va bien, je suis réveillée !').catch(console.error)
        } else {
            message.channel.send("Tu n'as pas le droit d'utiliser le bot").catch(console.error)
        }
    } else if (args[0] === '!presences') {
        const ems = new Array()
        const officiers = new Array()
        const ssoffs = new Array()
        const cavaleries = new Array()
        const grenadiers = new Array()
        const voltigeurs = new Array()
        const canons = new Array()
        const premieres = new Array()
        const deuxiemes = new Array()
        const troisiemes = new Array()
        const quatriemes = new Array()
        const autres = new Array()
        const channels = message.guild.channels.filter((c) => c.type === 'voice')
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
                } else if (member.roles.find((r) => r.id === Cavalerie)) {
                    if (member.nickname) {
                        cavaleries.push(member.nickname)
                    } else {
                        cavaleries.push(member.user.username)
                    }
                } else if (member.roles.find((r) => r.id === Grenadier)) {
                    if (member.nickname) {
                        grenadiers.push(member.nickname)
                    } else {
                        grenadiers.push(member.user.username)
                    }
                } else if (member.roles.find((r) => r.id === Voltigeur)) {
                    if (member.nickname) {
                        voltigeurs.push(member.nickname)
                    } else {
                        voltigeurs.push(member.user.username)
                    }
                } else if (member.roles.find((r) => r.id === Premiere)) {
                    if (member.nickname) {
                        premieres.push(member.nickname)
                    } else {
                        premieres.push(member.user.username)
                    }
                } else if (member.roles.find((r) => r.id === Seconde)) {
                    if (member.nickname) {
                        deuxiemes.push(member.nickname)
                    } else {
                        deuxiemes.push(member.user.username)
                    }
                } else if (member.roles.find((r) => r.id === Troisieme)) {
                    if (member.nickname) {
                        troisiemes.push(member.nickname)
                    } else {
                        troisiemes.push(member.user.username)
                    }
                } else if (member.roles.find((r) => r.id === Quatrieme)) {
                    if (member.nickname) {
                        quatriemes.push(member.nickname)
                    } else {
                        quatriemes.push(member.user.username)
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
        let messageSend = ''
        if (ems.length > 0) {
            messageSend = messageSend + '***Etat Major : (' + ems.length + ' présents) *** \n'
            ems.map((u) => {
                messageSend = messageSend + u + '\n'
            })
        }
        officiers.sort()
        if (officiers.length > 0) {
            messageSend = messageSend + '***Officiers : (' + officiers.length + ' présents) *** \n'
            officiers.map((u) => {
                messageSend = messageSend + u + '\n'
            })
        }
        ssoffs.sort()
        if (ssoffs.length > 0) {
            messageSend = messageSend + '***Sous-officiers : (' + ssoffs.length + ' présents) *** \n'
            ssoffs.map((u) => {
                messageSend = messageSend + u + '\n'
            })
        }
        cavaleries.sort()
        if (cavaleries.length > 0) {
            messageSend = messageSend + '***Dragons : (' + cavaleries.length + ' présents) *** \n'
            cavaleries.map((u) => {
                messageSend = messageSend + u + '\n'
            })
        }
        grenadiers.sort()
        if (grenadiers.length > 0) {
            messageSend = messageSend + '***Grenadiers : (' + grenadiers.length + ' présents) *** \n'
            grenadiers.map((u) => {
                messageSend = messageSend + u + '\n'
            })
        }
        voltigeurs.sort()
        if (voltigeurs.length > 0) {
            messageSend = messageSend + '***Voltigeurs : (' + voltigeurs.length + ' présents) *** \n'
            voltigeurs.map((u) => {
                messageSend = messageSend + u + '\n'
            })
        }
        canons.sort()
        if (canons.length > 0) {
            messageSend = messageSend + '***Artilleurs : (' + canons.length + ' présents) *** \n'
            canons.map((u) => {
                messageSend = messageSend + u + '\n'
            })
        }
        premieres.sort()
        if (premieres.length > 0) {
            messageSend = messageSend + '***1ere Compagnie : (' + premieres.length + ' présents) *** \n'
            premieres.map((u) => {
                messageSend = messageSend + u + '\n'
            })
        }
        deuxiemes.sort()
        if (deuxiemes.length > 0) {
            messageSend = messageSend + '***2nde Compagnie : (' + deuxiemes.length + ' présents) *** \n'
            deuxiemes.map((u) => {
                messageSend = messageSend + u + '\n'
            })
        }
        troisiemes.sort()
        if (troisiemes.length > 0) {
            messageSend = messageSend + '***3e Compagnie : (' + troisiemes.length + ' présents) *** \n'
            troisiemes.map((u) => {
                messageSend = messageSend + u + '\n'
            })
        }
        quatriemes.sort()
        if (quatriemes.length > 0) {
            messageSend = messageSend + '***4e Compagnie : (' + quatriemes.length + ' présents) *** \n'
            quatriemes.map((u) => {
                messageSend = messageSend + u + '\n'
            })
        }
        autres.sort()
        if (autres.length > 0) {
            messageSend = messageSend + '***Autres : (' + autres.length + ' présents) *** \n'
            autres.map((u) => {
                messageSend = messageSend + u + '\n'
            })
        }
        let total =
            ems.length +
            officiers.length +
            ssoffs.length +
            cavaleries.length +
            grenadiers.length +
            voltigeurs.length +
            canons.length +
            premieres.length +
            deuxiemes.length +
            troisiemes.length +
            quatriemes.length +
            autres.length
        messageSend = messageSend + '*** Membres présents au total : ' + total + ' *** \n'
        message.channel.send(messageSend).catch(console.error)
    }
})
bot.login(constants.TOKEN)
