
    //General Settings 
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = "6283857564133"
global.ownNumb = "6283857564133"
global.namebot = "Base - Store"
global.namaowner = "Rafael"
global.idsal = "120363289038914459@newsletter"
global.domainotp = "https://otpweb.net"
global.apikeyotp = "c53368e05f04a77204b308046db27ddd59d41d78"
global.domain = 'https://ptpanel.zaanocounter.galaxiserver.biz.id'
global.apikey = 'ptla_Os4anCzBYdl8cD5O1s0eQMInppH3an0HUscT1oY1eRa'
global.capikey = 'ptlc_wXi7xGAl1mc3mZarvAOdWRScNWX69njAGt9eTPkNPlo'
global.mess = {
    success: 'Success ✓',
    done: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'botz Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Owner',
    wait: 'Sabar ya sedang proses',
    band: 'kamu telah di banned oleh owner\nminta unbanned ke owner agar bisa menggunakan fitur bot lagi',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    error: "*Maaf fitur sedang Error*",
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})