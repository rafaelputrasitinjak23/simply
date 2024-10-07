require("./config")
const {
smsg, getGroupAdmins, formatp, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')
const { downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage } = require('@whiskeysockets/baileys')
const axios = require('axios')
const os = require('os')
const fs = require('fs')
const {
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const { TelegraPh, UploadFileUgu } = require('./lib/Upload_Url');
const util = require('util')
const cron = require('node-cron')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const { spawn: spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const { toPTT, toAudio } = require("./lib/converter")
const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const pino = require('pino')
//  Base
module.exports = async (Rafael, m) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectreply.selectedRowId ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') && m.message.templateButtonreplyMessage.selectedId ? m.message.templateButtonreplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') && JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ""
      var budy = (typeof m.text == 'string' ? m.text : '')
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const botNumber = await Rafael.decodeJid(Rafael.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = ["6283857564133@s.whatsapp.net", botNumber, ...global.ownNumb].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const mime = (quoted.msg || quoted).mimetype || quoted.mediaType || "";
const isMedia = /image|video|sticker|audio/.test(mime)
        const qmsg = (quoted.msg || quoted)
// Group
const groupMetadata = m.isGroup ? await Rafael.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false


const moment = require('moment-timezone')
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss")
if(time2 < "19:00:00"){
var ucapanWaktu = "Selamat Malam🌃"
}
if(time2 < "15:00:00"){
var ucapanWaktu = "Selamat Sore🌄"
 }
if(time2 < "11:00:00"){
var ucapanWaktu = "Selamat Siang🏞️"
}
if(time2 < "06:00:00"){
var ucapanWaktu = "Selamat Pagi🏙️ "
 }
if(time2 < "23:59:00"){
var ucapanWaktu = "Selamat Subuh🌆"
}
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam2 = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Rafael Store`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;RafaelBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/a915fdf6f21ad99179f15.jpg' }}}}
//Public dan Self
if (!Rafael.public) {
if (!isCreator && !m.key.fromMe) return
}
const tanggal = moment().tz("Asia/Jakarta").format("ll")

// Quoted
const { type } = m
const isImage = (type == 'imageMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isVideo = (type == 'videoMessage')
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isSticker = (type == 'stickerMessage')
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false 
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false


// Console
if (isGroup && isCmd) {
console.log(colors.green.bold("[Group]") + " " + colors.brightCyan(time2,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(groupName));
}

if (!isGroup && isCmd) {
console.log(colors.green.bold("[Private]") + " " + colors.brightCyan(time2,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(pushname));
}



const fVerif = { key: {
    participant: '0@s.whatsapp.net',
    remoteJid: '0@s.whatsapp.net'
  },
  message: { conversation: `_Rafael Terverifikasi Oleh WhatsApp_`}
}
const reply = async(teks) => 
      {
        Rafael.sendMessage(
          from, 
            {text: 
              teks, 
                contextInfo: 
                  {
                    forwardingScore: 999,
                      isForwarded: true,
                forwardedNewsletterMessageInfo: 
              {
	        newsletterName: 'Rafael - MD',
		  newsletterJid: "120363307170529595@g.us",
		}}},
      {quoted:fVerif}
    )
  }
const Reply = async(teks) => 
      {
        Rafael.sendMessage(
          from, 
            {text: 
              teks, 
                contextInfo: 
                  {
                    forwardingScore: 999,
                      isForwarded: true,
                forwardedNewsletterMessageInfo: 
              {
	        newsletterName: 'Rafael - MD',
		  newsletterJid: "120363307170529595@g.us",
		}}},
      {quoted:fVerif}
    )
  }
    

const tag = `@${m.sender.split('@')[0]}`
const totalFitur = () =>{
            var mytext = fs.readFileSync("./case.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

if (mek.key.id.startsWith('3EB0')) return

switch(command) {
case 'promosi': {     
    let lastUsed = {};
    const userId = message.sender; 
    const cooldownTime = 20 * 60 * 1000
    const now = Date.now();

    if (lastUsed[userId] && now - lastUsed[userId] < cooldownTime) {
        const remainingTime = Math.ceil((cooldownTime - (now - lastUsed[userId])) / 1000 / 60);
        return reply(`[!] Harap tunggu ${remainingTime} menit lagi sebelum menggunakan fitur ini lagi.`);
    }
    if (!text) return reply('[!] Mana Text Yang Mau Di Promosikan');

    // Kirim pesan promosi
    Rafael.sendMessage(idsal, { text: `${text}
    
    [ SHARE BY RAFAEL ]`, quoted: fVerif });

    // Simpan waktu penggunaan terakhir fitur oleh pengguna
    lastUsed[userId] = now;
}
break;
case"upsaluran":
case"upch":{
Rafael.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(6000)
Rafael.sendMessage(m.chat, { react: { text: '⌛', key: m.key, }})
Rafael.sendMessage(`${global.idch}`,{audio: await quoted.download(), mimetype: 'audio/mp4', ptt: true})
await sleep(2000)
Rafael.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break
default:
if (body.startsWith('>')) {
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
try {
let evaled = await eval(body.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
if (body.startsWith('$')){
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
qur = body.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply795(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (body.startsWith('<')) {
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

}
} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
