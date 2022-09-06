/*

- BLACKBASE 2.5 LAST VERSION

ATT DA 2.5 ❗

+ BUTOES ✅
+ HEROKU ✅
+ CONSOLE NOVO ✅
+ MENU COM VERIFICADO ✅
+ VALEU GALERA ESPERO QUE GOSTEM ✅

// ❱❱ NODES MODULES ❰❰ */
const fs = require('fs') 
const { exec } = require('child_process')
const fetch = require('node-fetch')
const lolis = require('lolis.life')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { removeBackgroundFromImageFile } = require('remove.bg')
const loli = new lolis()

//  ❱❱ ARQUIVOS SRC  ❰❰  
const setting = JSON.parse(fs.readFileSync('./src/dono.json'))
const welkom = JSON.parse(fs.readFileSync('./src/seguranca/welkom.json'))
const ban = JSON.parse(fs.readFileSync('./src/seguranca/banned.json')) 
const antilink = JSON.parse(fs.readFileSync('./src/seguranca/antilink.json'))
const { criador,figurinhas} = require('./src/seguranca/menu.js')

//  ❱❱ ARQUIVOS LIB ❰❰  
const { utils } = require('./arquivos/lib/utils')
const { webp2gifFile } = require("./arquivos/lib/gif.js")
const { recognize } = require('./arquivos/lib/ocr')
const { color, bgcolor } = require('./arquivos/lib/color')
const { fetchJson, fetchText } = require('./arquivos/lib/fetcher')
const { y2mateV, y2mateA } = require('./arquivos/lib/y2mate.js')

// ❱❱ FUNCOES // FUNCTIONS ❰❰  
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./arquivos/lib/functions')

//  ❱❱ CONEXÃO DO WHATSAPP  ❰❰ 
const {WAConnection, MessageType , Presence , Mimetype, GroupSettingChange} = require('@adiwajshing/baileys')

// ❱❱  CONTATO DO DONO  ❰❰ 
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:𝑷𝒒𝒑 𝒗𝒊𝒓𝒖𝒔⁩\n' // ❱❱ SEU NOME  ❰❰
            + 'ORG:𝑷𝒒𝒑 𝒗𝒊𝒓𝒖𝒔\n' // ❱❱ NOME DO BOT ❰❰
            + 'TEL;type=CELL;type=VOICE;waid=558499839212:+55 84 9983-9212\n'// ❱❱ SEU NÚMERO ❰❰
            + 'END:VCARD'
p = setting.p
blocked = []
tagBot = `*❱❱𝑷𝒒𝒑 𝒗𝒊𝒓𝒖𝒔 ❰❰*`

var { dono, dono2 ,nomeDonoh,nomeBot, grupoDono,  canalDono } = JSON.parse(fs.readFileSync('./src/dono.json'))

const nomeDono = nomeDonoh.toLowerCase();

//  ❱❱ FUNCTION HORAS  ❰❰  
function kyun(seconds){
  function pad(s){
return (s < 10 ? '0' : '') + s;
  }
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss') 
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')

//  ❱❱ CONEXÃO COM QRCODE ❰❰  
async function starts() {
const black = new WAConnection()
black.logger.level = 'warn'
console.log(banner.string)
black.on('qr', () => {
console.log(color('❱','white'), color('❗','red'), color('❰','white'), color(' Escaneie o QrCode Com o Celular Do Bot'))})
fs.existsSync('./BarBar.json') && black.loadAuthInfo('./BarBar.json')
black.on('connecting', () => {
start('2', ' ')})
black.on('open', () => {
  success('2', 'Vl-bot Conectado ✅')})
black.sendMessage(`${dono}@s.whatsapp.net`,`Last Version❗ `, MessageType.text)
await black.connect({timeoutMs: 30*1000})
fs.writeFileSync('./BarBar.json', JSON.stringify(black.base64EncodedAuthInfo(), null, '\t')) 

//  ❱❱  FUNÇÃO DO WELCOME / BEM VINDO  ❰❰  
	black.on('group-participants-update', async (anu) => {
if (!welkom.includes(anu.jid)) return
try {
const mdata = await black.groupMetadata(anu.jid)
console.log(anu) 

//  ❱❱ ENTROU NO GRUPO  ❰❰ 
if (anu.action == 'add') {
num = anu.participants[0]
try {
ppimg = await black.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `*❱❱❗ MEMBRO NOVO ❗❰❰*\n\n▻ @${num.split('@')[0]} Seja Bem Vindo  Ao Grupo\n\n*▻❗ 👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
👻 •N𝜣ME: ${pushname}
🗓️ •ID∆DE :
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*


*【᥀·࣭ᨘ࣪⚠️ENTR❍̸U? TERΔ 5 MIN⏰ PΔRΔR SE 
ΔPRESENTΔR🔥 ❍̸U SERΔ 【❌REM❍VID❍❌】*
                 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
                  
              𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸ | 𝟖𝟖𝟖 | 𝟠𝟠𝟠 | ེི⁸⁸⁸*

❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋\
<,︻╦╤─ ҉ - -----💥 
/﹋\  🅱🅴🅼 🆅🅸🅽🅳🅾 \n\n*▻ Para Ver As Regras Do Grupo :*\n\n▻ Digite :  .regras`
let buff = await getBuffer(ppimg)
black.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})

//  ❱❱ SAIU DO GRUPO  ❰❰  
} else if (anu.action == 'remove') {
num = anu.participants[0]
try {
ppimg = await black.getProfilePicture(`${num.split("@")[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `*❱❱ O Membro  @${num.split('@')[0]} Abandonou o Nosso Grupo 😖 ❰❰*`
let buff = await getBuffer(ppimg)
black.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))}})

//  ❱❱ LISTA DE BLOQUEADOS ❰❰  
	black.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})
	
//  ❱❱ FUNCÃO DA BATERIA ❰❰  
black.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false})
global.p
global.batrei = global.batrei ? global.batrei : []
black.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt(batteryLevelStr)
global.batrei.push(batterylevel)}) 

//  ❱❱ TIME SLEEP ❰❰  
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))}
	    
//  ❱❱ LINGUAGEM ❰❰  
black.on('chat-update', async (mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
global.p
global.blocked 

//  ❱❱ CONSOLE TYPE ❰❰  
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const apiKey = setting.apiKey 
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType 
const type = Object.keys(mek.message)[0]
black.chatRead(from)

//  ❱❱ AUTO RESPONDER DO BLACK ❰❰  
selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
body = (type === 'conversation' && mek.message.conversation.startsWith(p)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(p) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(p) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(p) ? mek.message.extendedTextMessage.text : (mek.message.listResponseMessage && mek.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(p) && mek.message.listResponseMessage.singleSelectReply.selectedRowId) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (mek.message.buttonsResponseMessage && mek.message.buttonsResponseMessage.selectedButtonId.startsWith(p) && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'buttonsMessage') && mek.message.buttonsMessage.text ? mek.message.buttonsMessage.text : ''

//  ❱❱ CONST DE STRING ❰❰  
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const totalchat = await black.chats.all()
const botNumber = black.user.jid 
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(p)
chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const arg = chats.slice(command.length + 2, chats.length)

//  ❱❱ MENSSAGEM DO BLACK ❰❰  	
mess = {
plaz: `*❱❱‼ Modo certo : ${p}play vmz aprova de balas ‼❰❰*`,
banido: ' *❱❱ Você Está Banido, Não Pode Usar Comandos ❰❰*',
wait: '*❱❱ ⌛Aguarde...Estou fazendo ⌛❰❰*',
success: '*❱❱ 🏴‍☠️ Sucesso 🏴‍☠️❰❰*',
group: `*❱❱ ❕Esse Comando So Fuciona Em Grupo  ❕ ❰❰*\n\n*❱❱  :🏴‍☠️Grupo Ofical 🏴‍☠️ :❰❰*\n\n${grupoDono}`,
black:'*❱❱❗So Meu Dono❗❰❰*',
admin: '*❱❱  ❕ Comando So Para Administradores  ❕ ❰❰*',
Badmin: '*❱❱❗Não Sou  Administrador❗❰❰*'}

//  ❱❱ LINGUAGEM DE GRUPO ❰❰  
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? mek.participant : mek.key.remoteJid
const groupMetadata = isGroup ? await black.groupMetadata(from): ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const groupDesc = isGroup ? groupMetadata.desc : ''
const isGroupAdmins = groupAdmins.includes(sender) || false
const isWelkom = isGroup ? welkom.includes(from) : false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isOwner = sender.includes(dono) ? sender.includes(dono):sender.includes(dono2)
const isBan = ban.includes(sender)
pushname = black.contacts[sender] != undefined ? black.contacts[sender].vname || black.contacts[sender].notify : undefined		

const tescuk = ["0@s.whatsapp.net"]
const q = args.join(' ')
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}

const enviar = (teks) => {
black.sendMessage(from, teks, text, {quoted:mek})}

const sendMess = (hehe, teks) => {
black.sendMessage(hehe, teks, text)}

const costum = (pesan, tipe, target, target2) => {
black.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? black.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : black.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})}

//  ❱❱ SELO VERIFICADO ❰❰  	
var selo = `${Math.floor(Math.random() * 3)+1}`
const blx = {"key": {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "557598293339@g.us" }, "message": {orderMessage: {itemCount: 15,status: 4, thumbnail: fs.readFileSync(`./src/verificado/v` + selo + `.jpg`) ,message: `Nick : ${pushname}`,surface: 100, sellerJid: '0@s.whatsapp.net'}}}

//  ❱❱ TIPO MENSAGEM || CONSOLE ||  TERMUX ❰❰  
colors = ['red','white','black','blue','yellow','green','orange','purple','violet']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

// ❱❱ COMANDO NO PV ❰❰  
if (!isGroup && isCmd) console.log( ' ╭▻ ❱❱ ', color('❗COMANDO NO PV❗','white'),'❰❰', '◅⏤⏤','\n','⏐▻',color('NICK :','purple'),color(pushname,'green'),'\n','⏐▻',color('COMANDO :','purple'),color(command,'green'),'\n','⏐▻',color('HORARIO :','purple'), color(time,'green'),'\n',`╰⏤⏤▻ ❱❱ ${nomeBot} ❰❰◅⏤⏤\n`)

// ❱❱ MENSAGEM NO  PV ❰❰  
if (!isGroup && !isCmd) console.log( ' ╭▻ ❱❱ ', color('❗MENSAGEM NO PV❗','white'),'❰❰', '◅⏤⏤','\n','⏐▻',color('NICK :','purple'),color(pushname,'green'),'\n','⏐▻',color('TIPO :','purple'),color('Mensagem','green'),'\n','⏐▻',color('HORARIO :','purple'), color(time,'green'),'\n',`╰⏤⏤▻ ❱❱ ${nomeBot} ❰❰◅⏤⏤\n`)

//  ❱❱ COMANDO EM GRUPO ❰❰  			
if (isCmd && isGroup) console.log( ' ╭▻ ❱❱ ', color('❗COMANDO EM GRUPO❗','white'),'❰❰', '◅⏤⏤','\n','⏐▻',color('❱ GRUPO :','purple'), color(groupName,'green'),'\n','⏐▻',color('❱ NICK :','purple'),color(pushname,'green'),'\n','⏐▻',color('❱ COMANDO :','purple'),color(command,'green'),'\n','⏐▻',color('❱ HORARIO :','purple'),color(time,'green'),'\n',`╰⏤⏤▻ ❱❱ ${nomeBot} ❰❰◅⏤⏤\n`)

//  ❱❱ MENSAGEN EM GRUPO ❰❰  			
if (!isCmd && isGroup) console.log( ' ╭▻ ❱❱ ', color('❗MENSAGEM EM GRUPO❗','white'),'❰❰', '◅⏤⏤','\n','⏐▻',color('❱ GRUPO :','purple'), color(groupName,'green'),'\n','⏐▻',color('❱ NICK :','purple'),color(pushname,'green'),'\n','⏐▻',color('❱ TIPO :','purple'),color('Mensagem ','green'),'\n','⏐▻',color('❱ HORARIO :','purple'),color(time,'green'),'\n',`╰⏤⏤▻ ❱❱ ${nomeBot} ❰❰◅⏤⏤\n`)

//  ❱❱ USUARIO BLOQUEADO ❰❰
if (isCmd && isBan) {
enviar(mess.banido)
return console.log(color('*❱❱ ❗USUARIO BANIDO❗ ❰❰* ','\n',color('❱ NICK :','purple'),color(pushname,'green'),'\n',color('❱ COMANDO :','purple'),color(command,'green'),'\n',color('❱ HORARIO :','purple'),color(time,'green'),'\n'))}

// ❱❱ FUNCAO DE  ANTILINK  ❰❰
if (budy.match(/(https:\/\/chat.whatsapp.com)/gi) ||
(budy.includes("https://"))|| (budy.includes("http://")) ||
(budy.includes("//youtube")) || (budy.includes("TED ou PIX")) ||
(budy.includes("www.")) || (budy.includes("wa.me")) ||
(budy.includes("instagram")) || (budy.includes("tiktok")) || 
(budy.includes("s.kawai")) || (budy.includes(".com"))) {
if (!isGroup) return
if (!isAntiLink) return
if(isOwner) return (`*❱❱ Que Isso Mestre ?? ❰❰*`) 
if (isGroupAdmins) return enviar(`*❱❱❗ ${pushname} você é admin por isso não vou te banir ❗❰❰*`)
black.updatePresence(from, Presence.composing)
var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
enviar(`*❱❱❗  LINK  DETECTADO ❗ ❰❰*\n\n*❱❱ Membro ${pushname}  quebrou as regras do grupo por isso ele será expulso ❰❰*`)
setTimeout( () => {  
black.groupRemove(from, [Kick]).catch((e) => {enviar(`*ERROR:* ${e}`)}) 
}, 1000)
setTimeout( () => {
}, 0)
}

gravando = Presence.recording;
escrevendo = Presence.composing;
digitando = Presence.composing;
online = Presence.available;
pausar = Presence.paused
switch(command) {
/* ❱❱ COMANDOS COMEÇA A PARTIR DAQUI ❰❰

~> 

// ❱❱ MENU COM BOTAO ❰❰*/
case 'menu':
enviar('*❱❱ Abrindo Menu.. ❰❰*')
buttons = [
  {buttonId: `${p}adm`,buttonText: {displayText: `${p} ADMIN ${p}`},type:1},
  {buttonId: `${p}stikk`,buttonText: {displayText: `${p} STICKER ${p}`},type:1},
  {buttonId: `${p}criador`,buttonText: {displayText: `${p} CRIADOR ${p}`},type:1}
  ]
pastaFoto = (await black.prepareMessageMedia(fs.readFileSync(`./src/bot1.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./src/bot2.jpg`)})).imageMessage

textoVisivel = `╔═══°࿊•°:🔥 - 🔥:°•࿊°═══╗ 
✯                 𝑽𝑳-𝑩𝑶𝑻                  ✯
╚═══°࿊•°:🔥 - 🔥:°•࿊°═══╝
╔═══°࿊•°:🔥 - 🔥:°•࿊°═══╗
    ESSAS SÃO AS MINHAS OPÇÕES:

GRUPO OFICIAL: https://chat.whatsapp.com/IAg8LmnRjuE4dfBNrlJV8t

๖ۣۜ𝐎𝐩𝐜𝐨𝐞𝐬 𝐝𝐨 𝐠𝐫𝐮𝐩𝐨 𝐨𝐟𝐢𝐜𝐢𝐚𝐥

  .regras
  .gplink

━━━━━━━━━━━━━━━━━
𝐌𝐞𝐧𝐮 𝐯𝐢𝐩

EM BREVE❗

━━━━━━━━━━━━━━━━━
𝑨𝑫𝑴𝑰𝑵𝑺

  .grupo abrir/fechar
  .link on/off
  .marcar
  .bemvindo (manutenção)
  .limparchat
  .welk on/off
  
━━━━━━━━━━━━━━━━━
𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨𝑺

  .f
  .toimg
  .attp (texto)
  
━━━━━━━━━━━━━━━━━
𝑪𝑴𝑫𝑺 𝑮𝑬𝑹𝑰𝑨𝑺

 .conselho

━━━━━━━━━━━━━━━━━

 シ︎*DOWNLOADS*シ︎
gta
 .nba
 .ytvanced
 .snaptube
 .tiktok
 .resso
 .pobreflix
 .inshot
 .kinemaster
 .alightmotion

━━━━━━━━━━━━━━━━━
𝑫𝑶𝑵𝑶

  .rename
  .aviso
  .setprefix
  .gpsair (link)
  .entrar (link)

╚═══°࿊•°:🔥 - 🔥:°•࿊°═══╝ 
Menu Aberto Por ${pushname}`

buttonsMessage = {
contentText: textoVisivel,
footerText: `${nomeBot}`, imageMessage: pastaFoto,
buttons: buttons,
headerType: 4
}
prep = await black.prepareMessageFromContent(from,{buttonsMessage},{quoted: blx})
black.relayWAMessage(prep)
break 
/* ❱❱ FIM DO MENU COM BOTAO  ❰❰

~>

// ❱❱ MENU COM BOTAO ❰❰*/

case 'menuadulto':
enviar('*❱❱ Abrindo Menuadulto.. ❰❰*')
buttons = [
  {buttonId: `${p}adm`,buttonText: {displayText: `${p} ADMIN ${p}`},type:1},
  {buttonId: `${p}stikk`,buttonText: {displayText: `${p} STICKER ${p}`},type:1},
  {buttonId: `${p}criador`,buttonText: {displayText: `${p} CRIADOR ${p}`},type:1}
  ]
pastaFoto = (await black.prepareMessageMedia(fs.readFileSync(`./src/bot1.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./src/bot2.jpg`)})).imageMessage

textoVisivel = `
╭⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤
 ⏐𓈢 VL- BOT
╰⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤
├───────────────────────
║╭═─═─═─═─═─═─═─═─══─═
┃│                      シ🔞+18🔞シ︎
║
┃│${p}hentai18
┃
┃│${p}porn (em breve)
┃
┃│${p}peitos
║
┃│${p}titsanime
║
║╰═─═─═─═─═─═─═─═─══─═
┃
║╭═─═─═─═──═─═─═─══─═─
┃│                   シVazadosシ︎
║
┃│${p}nuds
║
┃│${p}dance
║
┃│${p}vazados
║
┃
║╰═─═─═─═─═─═─═─═─══─═
┃
┃
║╭═─═─═─═─═─═─═─═─══─═
┃│                  シPLAQUINHASシ︎
║ MANUTENÇÃO 
║╰═─═─═─═─═─═─═─═─══─═
Aberto por ${pushname}`

buttonsMessage = {
contentText: textoVisivel,
footerText: `${nomeBot}`, imageMessage: pastaFoto,
buttons: buttons,
headerType: 4
}
prep = await black.prepareMessageFromContent(from,{buttonsMessage},{quoted: blx})
black.relayWAMessage(prep)
break 

case 'hentai18':
if (!isGroup) if (!isOwner) if (!isPremium) return enviar('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot: https://chat.whatsapp.com/IAg8LmnRjuE4dfBNrlJV8t  🤖')
rate = body.slice(11)
enviar('  ❰Olhando hentai denovo mano? que vergonha cara😔 mas esta ai sua foto:  aguarde... ❱' +rate+ 'Inscreva-se no canal oficial do pqp virus: https://youtube.com/c/pqpvirus')

random = Math.floor(Math.random() * 50) + 1
console.log(color('[Math.random]','blue'), `>>> ${random} <<<`);
ram = random
if (ram == 1 ) {random = './png/Imagem (1).png'} else if (ram == 2 ) {random = './png/Imagem (2).png'} else if (ram == 3 ) {random = './png/Imagem (3).png'} else if (ram == 4 ) {random = './png/Imagem (4).png'} else if (ram == 5 ) {random = './png/Imagem (5).png'} else if (ram == 6 ) {random = './png/Imagem (6).png'} else if (ram == 7 ) {random = './png/Imagem (7).png'} else if (ram == 8 ) {random = './png/Imagem (8).png'} else if (ram == 9 ) {random = './png/Imagem (9).png'} else if (ram == 10 ) {random = './png/Imagem (10).png'} else if (ram == 11 ) {random = './png/Imagem (11).png'} else if (ram == 12 ) {random = './png/Imagem (12).png'} else if (ram == 13 ) {random = './png/Imagem (13).png'} else if (ram == 14 ) {random = './png/Imagem (14).png'} else if (ram == 15 ) {random = './png/Imagem (15).png'} else if (ram == 16 ) {random = './png/Imagem (16).png'} else if (ram == 17 ) {random = './png/Imagem (17).png'} else if (ram == 18 ) {random = './png/Imagem (18).png'} else if (ram == 19 ) {random = './png/Imagem (19).png'} else if (ram == 20 ) {random = './png/Imagem (20).png'} else if (ram == 21 ) {random = './png/Imagem (21).png'} else if (ram == 22 ) {random = './png/Imagem (22).png'} else if (ram == 23 ) {random = './png/Imagem (23).png'} else if (ram == 24 ) {random = './png/Imagem (24).png'} else if (ram == 25 ) {random = './png/Imagem (25).png'} else if (ram == 26 ) {random = './png/Imagem (26).png'} else if (ram == 27 ) {random = './png/Imagem (27).png'} else if (ram == 28 ) {random = './png/Imagem (28).png'} else if (ram == 29 ) {random = './png/Imagem (29).png'} else if (ram == 30 ) {random = './png/Imagem (30).png'} else if (ram == 31 ) {random = './png/Imagem (31).png'} else if (ram == 32 ) {random = './png/Imagem (32).png'} else if (ram == 33 ) {random = './png/Imagem (33).png'} else if (ram == 34 ) {random = './png/Imagem (34).png'} else if (ram == 35 ) {random = './png/Imagem (35).png'} else if (ram == 36 ) {random = './png/Imagem (36).png'} else if (ram == 37 ) {random = './png/Imagem (37).png'} else if (ram == 38 ) {random = './png/Imagem (38).png'} else if (ram == 39 ) {random = './png/Imagem (39).png'} else if (ram == 40 ) {random = './png/Imagem (40).png'} else if (ram == 41 ) {random = './png/Imagem (41).png'} else if (ram == 42 ) {random = './png/Imagem (42).png'} else if (ram == 43 ) {random = './png/Imagem (43).png'} else if (ram == 44 ) {random = './png/Imagem (44).png'} else if (ram == 45 ) {random = './png/Imagem (45).png'} else if (ram == 46 ) {random = './png/Imagem (46).png'} else if (ram == 47 ) {random = './png/Imagem (47).png'} else if (ram == 48 ) {random = './png/Imagem (48).png'} else if (ram == 49 ) {random = './png/Imagem (49).png'} else if (ram == 50 ) {random = './png/Imagem (50).png'}


gado = fs.readFileSync(random)

black.sendMessage(from, gado, MessageType.image)
break

case 'dance':
if (!isGroup) if (!isOwner) if (!isPremium) return enviar('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot: https://chat.whatsapp.com/IAg8LmnRjuE4dfBNrlJV8t  🤖')
rate = body.slice(11)
enviar('  ❰AI ESTA UMA GOSTOSA DANÇANDO PARA VOCE SEU TARADO ❱' +rate+ 'Inscreva-se no canal oficial do pqp virus: https://youtube.com/c/pqpvirus')

random = Math.floor(Math.random() * 24) + 1
console.log(color('[Math.random]','blue'), `>>> ${random} <<<`);
ram = random
if (ram == 1 ) {random = './dance/dance1.mp4'} else if (ram == 2 ) {random = './dance/dance2.mp4'} else if (ram == 3 ) {random = './dance/dance3.mp4'} else if (ram == 4 ) {random = './dance/dance4.mp4'} else if (ram == 5 ) {random = './dance/dance5.mp4'} else if (ram == 6 ) {random = './dance/dance6.mp4'} else if (ram == 7 ) {random = './dance/dance7.mp4'} else if (ram == 8 ) {random = './dance/dance8.mp4'} else if (ram == 9 ) {random = './dance/dance9.mp4'} else if (ram == 10 ) {random = './dance/dance10.mp4'} else if (ram == 11 ) {random = './dance/dance11.mp4'} else if (ram == 12 ) {random = './dance/dance12.mp4'} else if (ram == 13 ) {random = './dance/dance13.mp4'} else if (ram == 14 ) {random = './dance/dance14.mp4'} else if (ram == 15 ) {random = './dance/dance15.mp4'} else if (ram == 16 ) {random = './dance/dance16.mp4'} else if (ram == 17 ) {random = './dance/dance17.mp4'} else if (ram == 18 ) {random = './dance/dance18.mp4'} else if (ram == 19 ) {random = './dance/dance19.mp4'} else if (ram == 20 ) {random = './dance/dance20.mp4'} else if (ram == 21 ) {random = './dance/dance21.mp4'} else if (ram == 22 ) {random = './dance/dance22.mp4'} else if (ram == 23 ) {random = './dance/dance23.mp4'} else if (ram == 24 ) {random = './dance/dance24.mp4'}


gado = fs.readFileSync(random)

black.sendMessage(from, gado, MessageType.video)
break


case 'nuds':
if (!isGroup) if (!isOwner) if (!isPremium) return enviar('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot: https://chat.whatsapp.com/IAg8LmnRjuE4dfBNrlJV8t  🤖')
rate = body.slice(11)
enviar('  ❰AI ESTA Um NUDS VAZADO DE UMA GOSTOSA PARA VOCE SEU TARADO ❱' +rate+ 'Inscreva-se no canal oficial do pqp virus: https://youtube.com/c/pqpvirus')

random = Math.floor(Math.random() * 7) + 1
console.log(color('[Math.random]','blue'), `>>> ${random} <<<`);
ram = random
if (ram == 1 ) {random = './nuds/nuds1.mp4'} else if (ram == 2 ) {random = './nuds/nuds2.mp4'} else if (ram == 3 ) {random = './nuds/nuds3.mp4'} else if (ram == 4 ) {random = './nuds/nuds4.mp4'} else if (ram == 5 ) {random = './nuds/nuds5.mp4'} else if (ram == 6 ) {random = './nuds/nuds6.mp4'} else if (ram == 7 ) {random = './dance/dance7.mp4'} else if (ram == 8 ) {random = './dance/dance8.mp4'} else if (ram == 9 ) {random = './dance/dance9.mp4'} else if (ram == 10 ) {random = './dance/dance10.mp4'} else if (ram == 11 ) {random = './dance/dance11.mp4'} else if (ram == 12 ) {random = './dance/dance12.mp4'} else if (ram == 13 ) {random = './dance/dance13.mp4'} else if (ram == 14 ) {random = './dance/dance14.mp4'} else if (ram == 15 ) {random = './dance/dance15.mp4'} else if (ram == 16 ) {random = './dance/dance16.mp4'} else if (ram == 17 ) {random = './dance/dance17.mp4'} else if (ram == 18 ) {random = './dance/dance18.mp4'} else if (ram == 19 ) {random = './dance/dance19.mp4'} else if (ram == 20 ) {random = './dance/dance20.mp4'} else if (ram == 21 ) {random = './dance/dance21.mp4'} else if (ram == 22 ) {random = './dance/dance22.mp4'} else if (ram == 23 ) {random = './dance/dance23.mp4'} else if (ram == 24 ) {random = './dance/dance24.mp4'}


gado = fs.readFileSync(random)

black.sendMessage(from, gado, MessageType.video)
break


case 'vazados':
if (!isGroup) if (!isOwner) if (!isPremium) return enviar('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot: https://chat.whatsapp.com/IAg8LmnRjuE4dfBNrlJV8t  🤖')
rate = body.slice(11)
enviar('  ❰AI ESTA UM VIDEO VAZADO DE UMA GOSTOSA PARA VOCE SEU TARADO ❱' +rate+ 'Inscreva-se no canal oficial do pqp virus: https://youtube.com/c/pqpvirus')

random = Math.floor(Math.random() * 6) + 1
console.log(color('[Math.random]','blue'), `>>> ${random} <<<`);
ram = random
if (ram == 1 ) {random = './vazados/vazados1.mp4'} else if (ram == 2 ) {random = './vazados/vazados2.mp4'} else if (ram == 3 ) {random = './vazados/vazados3.mp4'} else if (ram == 4 ) {random = './vazados/vazados4.mp4'} else if (ram == 5 ) {random = './vazados/vazados5.mp4'} else if (ram == 6 ) {random = './vazados/vazados6.mp4'} else if (ram == 7 ) {random = './dance/dance7.mp4'} else if (ram == 8 ) {random = './dance/dance8.mp4'} else if (ram == 9 ) {random = './dance/dance9.mp4'} else if (ram == 10 ) {random = './dance/dance10.mp4'} else if (ram == 11 ) {random = './dance/dance11.mp4'} else if (ram == 12 ) {random = './dance/dance12.mp4'} else if (ram == 13 ) {random = './dance/dance13.mp4'} else if (ram == 14 ) {random = './dance/dance14.mp4'} else if (ram == 15 ) {random = './dance/dance15.mp4'} else if (ram == 16 ) {random = './dance/dance16.mp4'} else if (ram == 17 ) {random = './dance/dance17.mp4'} else if (ram == 18 ) {random = './dance/dance18.mp4'} else if (ram == 19 ) {random = './dance/dance19.mp4'} else if (ram == 20 ) {random = './dance/dance20.mp4'} else if (ram == 21 ) {random = './dance/dance21.mp4'} else if (ram == 22 ) {random = './dance/dance22.mp4'} else if (ram == 23 ) {random = './dance/dance23.mp4'} else if (ram == 24 ) {random = './dance/dance24.mp4'}


gado = fs.readFileSync(random)

black.sendMessage(from, gado, MessageType.video)
break


case 'peitos':
if (!isGroup) if (!isOwner) if (!isPremium) return enviar('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot: https://chat.whatsapp.com/IAg8LmnRjuE4dfBNrlJV8t  🤖')
rate = body.slice(11)
enviar('  ❰AI ESTA UM MARAVILHOSO PEITO DE UMA GOSTOSA PARA VOCE SEU TARADO ❱' +rate+ 'Inscreva-se no canal oficial do pqp virus: https://youtube.com/c/pqpvirus')

random = Math.floor(Math.random() * 15) + 1
console.log(color('[Math.random]','blue'), `>>> ${random} <<<`);
ram = random
if (ram == 1 ) {random = './peitos/1.mp4'} else if (ram == 2 ) {random = './peitos/2.mp4'} else if (ram == 3 ) {random = './peitos/3.mp4'} else if (ram == 4 ) {random = './peitos/4.mp4'} else if (ram == 5 ) {random = './peitos/5.mp4'} else if (ram == 6 ) {random = './peitos/6.mp4'} else if (ram == 7 ) {random = './peitos/7.mp4'} else if (ram == 8 ) {random = './peitos/8.mp4'} else if (ram == 9 ) {random = './peitos/9.mp4'} else if (ram == 10 ) {random = './peitos/10.mp4'} else if (ram == 11 ) {random = './peitos/11.mp4'} else if (ram == 12 ) {random = './peitos/12.mp4'} else if (ram == 13 ) {random = './peitos/13.mp4'} else if (ram == 14 ) {random = './peitos/14.mp4'} else if (ram == 15 ) {random = './peitos/15.mp4'} else if (ram == 16 ) {random = './dance/dance16.mp4'} else if (ram == 17 ) {random = './dance/dance17.mp4'} else if (ram == 18 ) {random = './dance/dance18.mp4'} else if (ram == 19 ) {random = './dance/dance19.mp4'} else if (ram == 20 ) {random = './dance/dance20.mp4'} else if (ram == 21 ) {random = './dance/dance21.mp4'} else if (ram == 22 ) {random = './dance/dance22.mp4'} else if (ram == 23 ) {random = './dance/dance23.mp4'} else if (ram == 24 ) {random = './dance/dance24.mp4'}


gado = fs.readFileSync(random)

black.sendMessage(from, gado, MessageType.video)
break


case 'titsanime':
if (!isGroup) if (!isOwner) if (!isPremium) return enviar('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot: https://chat.whatsapp.com/IAg8LmnRjuE4dfBNrlJV8t  🤖')
rate = body.slice(11)
enviar('  ❰Olhando hentai denovo mano? que vergonha cara😔 mas esta ai sua foto:  aguarde... ❱' +rate+ 'Inscreva-se no canal oficial do pqp virus: https://youtube.com/c/pqpvirus')

random = Math.floor(Math.random() * 17) + 1
console.log(color('[Math.random]','blue'), `>>> ${random} <<<`);
ram = random
if (ram == 1 ) {random = './titsanime/Imagem (1).png'} else if (ram == 2 ) {random = './titsanime/Imagem (2).png'} else if (ram == 3 ) {random = './titsanime/Imagem (3).png'} else if (ram == 4 ) {random = './titsanime/Imagem (4).png'} else if (ram == 5 ) {random = './titsanime/Imagem (5).png'} else if (ram == 6 ) {random = './titsanime/Imagem (6).png'} else if (ram == 7 ) {random = './titsanime/Imagem (7).png'} else if (ram == 8 ) {random = './titsanime/Imagem (8).png'} else if (ram == 9 ) {random = './titsanime/Imagem (9).png'} else if (ram == 10 ) {random = './titsanime/Imagem (10).png'} else if (ram == 11 ) {random = './titsanime/Imagem (11).png'} else if (ram == 12 ) {random = './titsanime/Imagem (12).png'} else if (ram == 13 ) {random = './titsanime/Imagem (13).png'} else if (ram == 14 ) {random = './titsanime/Imagem (14).png'} else if (ram == 15 ) {random = './titsanime/Imagem (15).png'} else if (ram == 16 ) {random = './titsanime/Imagem (16).png'} else if (ram == 17 ) {random = './titsanime/Imagem (17).png'} else if (ram == 18 ) {random = './titsanime/Imagem (18).png'} else if (ram == 19 ) {random = './titsanime/Imagem (19).png'} else if (ram == 20 ) {random = './png/Imagem (20).png'} else if (ram == 21 ) {random = './png/Imagem (21).png'} else if (ram == 22 ) {random = './png/Imagem (22).png'} else if (ram == 23 ) {random = './png/Imagem (23).png'} else if (ram == 24 ) {random = './png/Imagem (24).png'} else if (ram == 25 ) {random = './png/Imagem (25).png'} else if (ram == 26 ) {random = './png/Imagem (26).png'} else if (ram == 27 ) {random = './png/Imagem (27).png'} else if (ram == 28 ) {random = './png/Imagem (28).png'} else if (ram == 29 ) {random = './png/Imagem (29).png'} else if (ram == 30 ) {random = './png/Imagem (30).png'} else if (ram == 31 ) {random = './png/Imagem (31).png'} else if (ram == 32 ) {random = './png/Imagem (32).png'} else if (ram == 33 ) {random = './png/Imagem (33).png'} else if (ram == 34 ) {random = './png/Imagem (34).png'} else if (ram == 35 ) {random = './png/Imagem (35).png'} else if (ram == 36 ) {random = './png/Imagem (36).png'} else if (ram == 37 ) {random = './png/Imagem (37).png'} else if (ram == 38 ) {random = './png/Imagem (38).png'} else if (ram == 39 ) {random = './png/Imagem (39).png'} else if (ram == 40 ) {random = './png/Imagem (40).png'} else if (ram == 41 ) {random = './png/Imagem (41).png'} else if (ram == 42 ) {random = './png/Imagem (42).png'} else if (ram == 43 ) {random = './png/Imagem (43).png'} else if (ram == 44 ) {random = './png/Imagem (44).png'} else if (ram == 45 ) {random = './png/Imagem (45).png'} else if (ram == 46 ) {random = './png/Imagem (46).png'} else if (ram == 47 ) {random = './png/Imagem (47).png'} else if (ram == 48 ) {random = './png/Imagem (48).png'} else if (ram == 49 ) {random = './png/Imagem (49).png'} else if (ram == 50 ) {random = './png/Imagem (50).png'}


gado = fs.readFileSync(random)

black.sendMessage(from, gado, MessageType.image)
break

case 'limpar':

if(!isGroup) return reply(enviar.msg.grupo)

if(!isGroupAdmins) return reply(enviar.msg.adm)
clear = `🗑️️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
black.sendMessage(from, clear , MessageType.text, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'clearchat':
case 'limparchat':  
case 'limparmsg':  
if (!isOwner && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
anu = await black.chats.all()
list_chat = await black.chats.all()
for (let chat of list_chat) {
await black.modifyChat(chat.jid, "delete", {includeStarred: false})
}
enviar("🗑️️️️️️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅")
break

const yts = require('yt-search')


case 'playmp4':
if (!isOwner) return enviar(`só premium`)
if (isBan) return enviar('VOCÊ FOI BANIDO DE UTILIZAR OS COMANDOS DO BOT!!')      
if (args.length === 0) return enviar(`Use assim : *${p + command}* _O título da música_`) 
const uangsaku = Math.floor(Math.random() * 1) + 0.3
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
black.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
aramas = await yts(q);
aramat = aramas.all 
mulaikah = aramat[0].url      
console.log(color('[YT PLAY VÍDEO]', 'magenta'), color(`PROCURANDO O VÍDEO NO YT`, 'yellow'))       
try {
ytv(mulaikah)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 1000000) return sendMediaURL(from, thumb, `*「 REPRODUZIR VÍDEOS 」*\n\n*Titulo* : ${title}\n*Extração* : MP3\n*Tamanho do arquivo* : ${filesizeF}\n*Link* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`)
const captions = `*「 REPRODUZIR VÍDEOS 」*\n\n*Titulo* : ${title}\n*Extração* : MP4\n*Tamanho* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply('error'))
})                
})
} catch (err) {
reply(mess.error.api)
}
await limitAdd(sender)
break

case 'ytsrc':     

teks = body.slice(7)  
anu = await fetchJson(`https://i.ibb.co/2YKQHq7/images.jpg=${teks}`)
const objs = []
for(i=0;i< anu.resultados.length; ++i) {
let data = {
rowId: `${prefix}play `+ anu.resultados[i].title,
title: `${prefix}play `+ anu.resultados[i].title
}
objs.push(data)
}
payload = {
listMessage: {
title: "✅ Músicas encotradas ✅",
buttonText: "Mostra lista de músicas",
description: `Palavra chave: ${teks}`,
listType: 1,
sections: [
{
title: "Músicas relacionadas",
rows: objs
}
]
}
}
let preparedPayload = await black.prepareMessageFromContent(from, payload,{});
await black.relayWAMessage(preparedPayload, {waitForAck: true})
break
/* ❱❱ FIM DO MENU COM BOTAO  ❰❰

~>

// ❱❱ CEMECO DO BOTAO REGRAS ❰❰*/
case 'regras':
buttons = [
 {buttonId: `${p}nick`,buttonText: {displayText: `${p} NICK ${p}`},type:1}
,{buttonId: `${p}infobot`,buttonText: {displayText: `${p} INFOBOT ${p}`},type:1}
,{buttonId: `${p}perfil`,buttonText: {displayText: `${p} PERFIL ${p}`},type:1}
]
imageMsg = (await black.prepareMessageMedia(fs.readFileSync(`./src/bot2.jpg`), 'imageMessage',{thumbnail:null})).imageMessage

lzmodsdominabb = `
 ╭▻ *❱❱❗${groupName} ❗❰❰*
 ⏐▻ *Admin :* ${groupAdmins.length}
 ⏐▻ *Membros :* ${groupMembers.length}
 ╰⏤⏤▻ *❱❱ DESCRICAO ❰❰* ◅⏤⏤
 
 ${groupDesc}`

buttonsMessage = {
contentText: lzmodsdominabb,
footerText:`${nomeBot}`, imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}
prep = await black.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
black.relayWAMessage(prep)
break

case 'perfil':
enviar('*❱❱ Enviando Perfil.... ❰❰*')
black.updatePresence(from,Presence.composing)
try {
ppimg = await black.getProfilePicture(`${sender.split('@')[0]}`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
blc = ` 
╭▻ *❱❱ ❗ PERFIL ❗ ❰❰*
⏐▻ Grupo : ${groupName}
⏐▻ Nick : ${pushname}
╰⏤⏤▻ *❱❱ ©${nomeBot} ❰❰* ◅⏤⏤`
monk = await getBuffer(ppimg)
black.sendMessage(from,monk,image,{quoted:blx,thumbnail:null,caption:blc})
break

case 'infobot':
black.updatePresence(from, Presence.composing)
enviar(`❗INFO DO BOT❗`)
setTimeout( () => {
black.sendMessage(from,`≑ ⇢Dono: wa.me/${dono.split('@')[0]}`,text)
}, 1000)
setTimeout( () => {
black.sendMessage(from,`≑ ⇢Criador: wa.me/${dono2.split('@')[0]}`,text)
}, 1500)
setTimeout( () => {
black.sendMessage(from,`≑ ⇢Grupo: ${grupoDono}`,text)
}, 2000)
setTimeout( () => {
black.sendMessage(from,`≑ ⇢Canal: ${canalDono}`,text)
}, 2500)
break

case 'nick':
niki = {
text: `@${sender.split('@')[0]}`,
contextInfo: {mentionedJid:[sender]}}
black.sendMessage(from,niki,text,{quoted:mek})
break
/* ❱❱ FIM DO BOTAO REGRAS  ❰❰

~>

// ❱❱ COMECO DOS COMANDO DE ADMIN ❰❰*/
case 'adm':
enviar('*❱❱ Abrindo Menu Admin.. ❰❰*')
buttons = [
  {buttonId: `${p}antilink`,buttonText: {displayText: `${p} ANTILINK ${p}`},type:1},
  {buttonId: `${p}welcome`,buttonText: {displayText: `${p} WELCOME ${p}`},type:1},
  {buttonId: `${p}marcar`,buttonText:{displayText: `${p} MARCAR ${p}`},type:1}
  ]
pastaFoto = (await black.prepareMessageMedia(fs.readFileSync(`./src/bot3.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./src/bot2.jpg`)})).imageMessage

textoVisivel = `Menu Dos Admins`

buttonsMessage = {
  contentText: textoVisivel,footerText: `${nomeBot}`, imageMessage: pastaFoto,buttons: buttons,headerType: 4
  }
prep = await black.prepareMessageFromContent(from,{buttonsMessage},{quoted: blx})
black.relayWAMessage(prep)
break

case 'marcar': 
if (!isGroup) return enviar(mess.group)
if (!isGroupAdmins) return enviar(mess.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
for (let mem of groupMembers) {
teks += `\n@${mem.jid.split('@')[0]}`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break

case 'link':
  try {
if (!isGroup) return enviar(mess.group)
if (!isGroupAdmins) return enviar(mess.admin)
if (!isBotGroupAdmins) return enviar(mess.Badmin)
if (args.length < 1) return enviar('*❱❱ Digite On para ativar  ❰❰*')
if (args[0] === 'on') {
if (isAntiLink) return enviar('*❱❱ Já está ativo ❰❰*')
antilink.push(from)
fs.writeFileSync('./src/seguranca/antilink.json', JSON.stringify(antilink))
enviar('*❱❱ ‼️ Ativado Com Sucesso ‼️ ❰❰*')
} else if (args[0] === 'off') {			
antilink.splice(from)
fs.writeFileSync('./src/seguranca/antilink.json', JSON.stringify(antilink))
enviar('*❱❱ ‼️ Desativado Com Sucesso ‼️ ❰❰*')
} else {
enviar('*❱❱ ‼️ On para ativar  :  Off para desativar ‼️ ❰❰*')
}
} catch {
 console.log(color('*❱❱ ERRO ❰❰*','red'))
 enviar('*❱❱ ❌ Deu erro : tente novamente ❌ ❰❰*')
}
break

case 'antilink':
buttons = [{buttonId: `${p}link on`,buttonText: {displayText: `${p} ATIVAR ${p}`},type:1},{buttonId: `${p}link off`,buttonText: {displayText: `${p} DESATIVAR ${p}`},type:1}]
imageMsg = (await black.prepareMessageMedia(fs.readFileSync(`./src/bot4.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./src/bot3.jpg`)})).imageMessage
lzmodsdominabb = "Escolha Uma Dessas Opcões"
buttonsMessage = {
contentText: lzmodsdominabb,
footerText: `${nomeBot}`, imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}
prep = await black.prepareMessageFromContent(from,{buttonsMessage},{quoted: blx})
black.relayWAMessage(prep)
break

case 'welcome':
  try {
if (!isGroup) return enviar(mess.group)
if (!isGroupAdmins) return enviar(mess.admin)
if (args.length < 1) return enviar('*❱❱ Digite On para ativar  ❰❰*')
if (args[0] === 'on') {
if (isWelkom) return enviar('já ativo hmm')
welkom.push(from)
fs.writeFileSync('./src/seguranca/welkom.json', JSON.stringify(welkom))
enviar('*❱❱ ‼️ Ativado Com Sucesso ‼️ ❰❰*')
} else if (args[0] === 'off') {
welkom.splice(from)
fs.writeFileSync('./src/seguranca/welkom.json', JSON.stringify(welkom))
enviar('*❱❱ ‼️ Desativado Com Sucesso ‼️ ❰❰*')
} else {
enviar('*❱❱ ‼️ On para ativar  :  Off para desativar ‼️ ❰❰*')
}
} catch {
 console.log(color('*❱❱ ERRO ❰❰*','red'))
 enviar('*❱❱ ❌ Deu erro : tente novamente ❌ ❰❰*')}
break

case 'welcome':
buttons = [{buttonId: `${p}welk on`,buttonText: {displayText: `${p} ATIVAR ${p}`},type:1},{buttonId: `${p}welk off`,buttonText: {displayText:`${p} DESATIVAR ${p}`},type:1}]
imageMsg = (await black.prepareMessageMedia(fs.readFileSync(`./src/bot1.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./src/bot4.jpg`)})).imageMessage
lzmodsdominabb = `Escolha Uma Dessas Opcões`
buttonsMessage = {
contentText: lzmodsdominabb,
footerText:`${nomeBot}`, imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}
prep = await black.prepareMessageFromContent(from,{buttonsMessage},{quoted: blx})
black.relayWAMessage(prep)
break

case 'conselho':
try {
anu = await fetchJson(`https://supra-api.herokuapp.com/api/conselho?apikey=supraz`)
ppimg = await black.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
its = await getBuffer (ppimg)
randTeks = `\n${anu.frase}\n`
black.sendMessage(from, its, image, {quoted: mek, caption: randTeks})
break

case 'grupo':
if(!isBotGroupAdmins) return enviar('Nao Sou Admin')
if(!isGroupAdmins) return enviar ('So Para Admins')
if(args[0] == 'abrir') {
black.groupSettingChange(from, GroupSettingChange.messageSend,false)
enviar('GRUPO ABERTO COM SUCESSO!!')
} else if(args[0] == 'fechar') {
black.groupSettingChange(from, GroupSettingChange.messageSend,true)
enviar('GRUPO FECHADO COM SUCESSO!!')
}
break

case 'gplink'://  ❱❱ Link De Grupo  ❰❰  			

if(!isOwner && !isGroupAdmin) return enviar(mess.adm)

if(!isBotGroupAdmins) return enviar(mess.botadm)
 const linkzin = await black.groupInviteCode(from)
 enviar('https://chat.whatsapp.com/'+linkzin)
 bre
 ak


/* ❱❱ FIM DE COMANDO ADMIN  ❰❰  

~>



// ❱❱ COMECO DOS COMANDO DE ADMIN ❰❰*/
case 'baixar':
enviar('*❱❱ Abrindo Menu De Download... ❰❰*')
buttons = [
  {buttonId: `${p}gta`,buttonText: {displayText: `${p} GTA ${p}`},type:1},
  {buttonId: `${p}nba`,buttonText: {displayText: `${p} NBA ${p}`},type:1},
  {buttonId: `${p}ytvanced`,buttonText:{displayText: `${p} YTADVANCE ${p}`},type:1}
  ]
pastaFoto = (await black.prepareMessageMedia(fs.readFileSync(`./src/DOWNLOAD.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./src/bot2.jpg`)})).imageMessage

textoVisivel = `Menu De Download`

buttonsMessage = {
  contentText: textoVisivel,footerText: `${nomeBot}`, imageMessage: pastaFoto,buttons: buttons,headerType: 4
  }
prep = await black.prepareMessageFromContent(from,{buttonsMessage},{quoted: blx})
black.relayWAMessage(prep)
break

case 'gta':
enviar (`https://www.mediafire.com/file/ln6r3kx0ie77r9t/GTA_San_Andreas_2021.zip/file`)
break

case 'nba':
enviar (`http://www.mediafire.com/file/0j7be2qf6r2fd1i/NBA-2K20-v96-0-1.apk/file`)
break


case 'ytvanced':
enviar (`https://www.mediafire.com/file/qeu1ppvccdlh3z3/YouTube_Vanced_16.02.35.1518722496-armeabi-v7a.apk/file`)
break

case 'snaptube':
enviar (`http://www.mediafire.com/file/8yd7vnqo68cjj2c/Snaptube%20VIP%20vv5.12.1.5121501%20MOD.apk/file`)
break

case 'tiktok':
enviar (`http://www.mediafire.com/file/hooxjtafjhl0be8/TikTok%20v18.4.3%20MOD.apk/file`)
break

case 'resso':
enviar (`http://www.mediafire.com/file/btbdijm8llccode/Resso%20Premium%20v1.28.0%20MOD.apk/file`)
break

case 'pobreflix':
enviar (`https://www.mediafire.com/file/rxw7zys8nzd62kl/Pobreflix%20v4.0%20APK.apk/file`)
break


case 'inshot':
enviar (`https://apkdone.com/inshot/`)
break

case 'kinemaster':
enviar (`https://apkdone.com/kinemaster-apk-mods/`)
break

case 'alightmotion':
enviar (`https://apkdone.com/alight-motion/'`)
break


/* ❱❱ FIM DE COMANDO ADMIN  ❰❰  


~>
 
 
❱❱ COMECO DE COMANDO DONO ❰❰ */
case 'criador':
enviar('*❱❱ Abrindo Menu Do Criador.. ❰❰*')
buttons = [
  {buttonId: `${p}adm`,buttonText: {displayText: `${p} ADMIN ${p}`},type:1},
  {buttonId: `${p}stikk`,buttonText: {displayText: `${p} STICKER ${p}`},type:1},
  {buttonId: `${p}menu`,buttonText: {displayText: `${p} VOLTAR ${p}`},type:1}
  ]
pastaFoto = (await black.prepareMessageMedia(fs.readFileSync(`./src/bot2.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./src/bot1.jpg`)})).imageMessage

textoVisivel = criador(p)

buttonsMessage = {
contentText: textoVisivel,
footerText: `${nomeBot}`, imageMessage: pastaFoto,
buttons: buttons,
headerType: 4
}
prep = await black.prepareMessageFromContent(from,{buttonsMessage},{quoted: blx})
black.relayWAMessage(prep)
break

case 'setprefix':
if (args.length < 1) return
if (!isOwner) return enviar(mess.black)
p = args[0]
setting.p = p
fs.writeFileSync('./src/dono.json', JSON.stringify(setting, null, '\t'))
enviar(`*❱❱ prefixo foi alterado com sucesso para : ${p} ❰❰*`)
break

case 'rename':
if(!isOwner) enviar(mess.black)
if (!isQuotedSticker) return enviar('*❱❱ So Figurinha🍃 ❰❰*')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await black.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `pqp`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `virus`
require('./arquivos/lib/fetcher.js').createExif(satu, dua)
require('./arquivos/lib/fetcher.js').modStick(media, black, mek, from)
break

case 'aviso':
if (!isOwner) return enviar(mess.black)
if (args.length < 1) return enviar('*❱❱ Mestre Oque Deseja Anúnciar? ❰❰*')
anu = await black.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await black.downloadMediaMessage(encmedia)
} else {
 for (let _ of anu) {
sendMess(_.jid, `*❱❱ AVISO DO ${pushname} ❰❰*\n\n${body.slice(7)}`)
}
enviar('*❱❱ Transmissao enviada  ❰❰*')
}
break


case 'gpsair':
if (!isOwner) return enviar(`só aceito ordens do ${nomeDono}`)
if (!isBotGroupAdmins) return enviar('Preciso de adm pra isso')
enviar(`*Adeus pessoal eu:${nomeBot},eo meu Mestre ${dono} temos que ir*`)
setTimeout( () => {
black.groupRemove(from, [sender])
}, 3000),
await sleep (5000)
tujuh = fs.readFileSync('./vez.mp3');
black.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
setTimeout( () => {
black.groupLeave(from)
}, 7000)
break

/*❱❱ FIM DE COMANDO DONO  ❰❰  

~>

// ❱❱ COMECO DE COMANDO FIGURINHA  ❰❰ */
case 'stikk':
enviar('*❱❱ Abrindo Menu Sticker.. ❰❰*')
buttons = [
  {buttonId: `${p}regras`,buttonText: {displayText: `${p} REGRAS ${p}`},type:1},
  {buttonId: `${p}menu`,buttonText: {displayText: `${p} VOLTAR ${p}`},type:1}
  ]
pastaFoto = (await black.prepareMessageMedia(fs.readFileSync(`./src/bot3.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./src/bot2.jpg`)})).imageMessage

textoVisivel = figurinhas(p)

buttonsMessage = {
contentText: textoVisivel,
footerText: `${nomeBot}`, imageMessage: pastaFoto,
buttons: buttons,
headerType: 4
}
prep = await black.prepareMessageFromContent(from,{buttonsMessage},{quoted: blx})
black.relayWAMessage(prep)
break

case 'attp':
if (args.length < 1) return enviar(`*❱❱ ERROR: ❰❰*\n\nModo Certo :  ${p +comando} virus gostoso`)
try {
var chollotxt = body.slice(5).trim()
enviar(mess.wait)
url = encodeURI(`https://api.xteam.xyz/attp?file&text=${chollotxt}`)
textofigu = await getBuffer(url)
black.sendMessage(from, textofigu, sticker, { quoted: blx })
} catch (e) {
enviar("*❱❱ ERROR : Use Apenas Caracteres Alfanuméricos  ❰❰*")
}
break

case 'toimg':
if (!isQuotedSticker) return enviar('*❱❱ Mande Uma Figurinha ❰❰*')
enviar(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await black.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return enviar('*❱❱ Falha Ao Converter a Figurinha  Em Imagem ❰❰*')
buffer = fs.readFileSync(ran)
black.sendMessage(from, buffer, image, {quoted: blx,thumbnail:null,caption: `${tagBot}`})
fs.unlinkSync(ran)})
break

case 'f': case 'fig': case 's': case 'st': case 'stk':
black.updatePresence(from,Presence.composing)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await black.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
await ffmpeg(`./src/sticker/${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('Luffy', 'Bot')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
enviar(mess.stick)})})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
black.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await black.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
await ffmpeg(`./src/sticker/${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('Luffy', 'Bot')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`Falha na conversão de ${tipe} para sticker`)})})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
black.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)})
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)}
break 

// ❱❱  FIM DE TODOS COMANDOS  ❰❰ || ❱❱  FIM DE TODOS COMANDOS ❰❰
// ❱❱  FIM DE TODOS COMANDOS  ❰❰ || ❱❱  FIM DE TODOS COMANDOS ❰❰
// ❱❱  FIM DE TODOS COMANDOS  ❰❰ || ❱❱  FIM DE TODOS COMANDOS ❰❰

default:

//  ❱❱ RESPOSTA DE QUANDO USA SÓ O PREFIX ❰❰	
if (body == `${p}`)  {
if(isOwner) enviar (`*❱❱ Oi Mestre ❰❰*`) 
if(!isOwner) enviar(`*❱❱ Não Pertuba Man ❰❰*`)}

//  ❱❱ MENSAGEM DE ERRO DE COMANDO ❰❰  	
if(isCmd && comando) {
enviar(`*❱❱ Caro Usuario Esse Comando Não Existe ou so funciona em grupos , Basta Digitar: .menu Para Todos Os Comandos ❰❰*`)}

// ❱❱ INTERACAO DE TEXTO ❰❰
if(budy == 'bot' || budy == 'Bot') {
if(isOwner) enviar('Estou Aqui😊')
if(!isOwner) enviar('éoq escória??')}}

} catch (e) { 
console.log('Error : %s', color(e, 'red'))}})}
starts()