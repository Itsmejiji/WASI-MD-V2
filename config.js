//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/EC7bZxZ9CK97fYOYMXmzlV";
global.website = process.env.GURL || "https://chat.whatsapp.com/EC7bZxZ9CK97fYOYMXmzlV";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d605d1140bb6cf1f4cd8a.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "22899869601,22896870256";
global.owner = process.env.OWNER_NUMBER || "22896870256";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEdEek1KeWNQVC9JbzR4M2FqWThRQjJGN0xWQ2JEbnZ6ejlaR1IxQW1uZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1piRUdLRitOdjRoNmJ0Y0FwWkErZXVmdk9HOWwyeXdRRG4wZnhTNGtSQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjT21vYXdJN0MwemhzV0VPL0pCa3N6aXhldUJjcEtrVFRWUXltdC9kNzFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBVldMbVJLcVVzZkFDMzBQYzhLKzZja2gwMTBLWHI5Z0Rxanhpbk9LYXpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZJaW02Q2hnY1p1NmFsVm5vbzB3bW9IdW9rbjJLVTgyZmZUVFFESk5qR1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllIYUtZVHFCekRGVytINytmSE5aZzJmNVlCN1JwZEtvWnF2VDlVR2NnalE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUNZWW9SY3VSZUFSTmx4OXE0aFNuWmxrUThwU1VuMEtPQTlsYk9aK3gzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWtVcWw1MnV0bjkxUmZRNDFUTWFrUnFxa2pyUW5WNFU2T0tFc1MyQnV5az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF0dENPMUtqRVJJNStTRkI1aXF2cVVNT2kxRzg0ejJLMlhXUGFkYjhpY1lIWkYzSVIzRTM0WWlJU1dudkx4VGhGVHNkdlliRkRBV3dwOEhIUXFOTGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiJYSEtEbFRuL0tmay9IaDQvaWpubmo3RUphUkI3dCtseWVqTUdLb2hqcE1VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJibEhueWF0b1FEYXFrNU1kX3c0NS13IiwicGhvbmVJZCI6IjhhY2ZlZmE5LWQwMDktNDAxMi1iNTgwLTQ4M2I2ZWVjYzY0MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYZ2xhVzhNYWxtcFRIckdzTFRtc2wzejZPeUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRC9OVEZndW5oeEZwd3RMWUVxcldqaU82MHZnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBDQlhQTFRTIiwibWUiOnsiaWQiOiIyMjg5OTg2OTYwMTozNUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGpjdUp3REVPS2hwN01HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia1hBWTVpWHJjeDN4MjI1NWgreVB3eEgwL2paZXBmQjUycSttcG15ZlBDZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoia0xSNW8xSHEyOGNoK0dpd0ZpUklkSW11ZnN2RTRyUjlDRFV1TjZYeHkzY2RpdWRDRzRoLzVkeXlCU3NZRStWVkg0TnBsbzd1M2FrcjJHcFZiMEpOQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IlYrQ0djN1Q1VkljdzUyeFdleFl3RnVwYXFXaHI3dlpDWkNxTTZHK0wrK1ZWdGpKd1VGWDhZOFpNZlQ1UEVTZEJ2NHVRK0lZTUxPZWxoZ21RaXhXc2pnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI4OTk4Njk2MDE6MzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkZ3R09ZbDYzTWQ4ZHR1ZVlmc2o4TVI5UDQyWHFYd2VkcXZwcVpzbnp3byJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxODIxMDgwN30="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𓆩☀️『🪶❦𝐊𝐮𝐫𝐨𝐬𝐚𝐤𝐢✘🪽』🌙𓆪",
  author: process.env.PACK_AUTHER || "𓆩☀️『🪶❦𝐊𝐮𝐫𝐨𝐬𝐚𝐤𝐢✘🪽』🌙𓆪",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𓆩❦𝕾𝕮𝕻ꕥ𓆪『🪶𝕭Ω𝕿🪽』",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
