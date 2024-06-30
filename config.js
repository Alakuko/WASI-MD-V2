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
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "2348106154710";
global.owner = process.env.OWNER_NUMBER || "2348138392770";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU8rNi9jeGFNejhFQXdYT25uZXlBc1lVRU16dTFOaGRPL3hmRDBMOEYzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRi9XUXFGMXI4dnl4VGhTT0tZVDAvaUZjZWEzR1ZHanRTOW5FWnFESHBnST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4R0tUWFJHdUlGY050cWVKWEpFdi9USkxWbjYxRHc1RGFPQ3ZoS0ZNd0cwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUjkrQnIvWXc1MkFRaFJiakFoRDZFeFg1Q1gxa09HdlZLaVl0bWxkVFM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlGVmxhYzk4WEtEWG9mWHFEWDZCd25telRjZW1jLzVod0FJanVMRG1wRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZ1QVlhVGJocVZEM29WZ3JBeTBSQkxFWW1QVnFPenJCUWxwbFhHcGNoU009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUpNUXFaZ3pvNjQ2MGRoYWVGaUV3R21oUTdFMDVmZFRQNDEzYkhTWEJIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDBkSGhzMkZyRXJWWThkRjNHMTYzc0RTMEh2eW9YOWJYc2pqMTY4d0F5dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldsVnFYNStUWk9WOFdGT1ZrS05Va1FZL1hxbE93d1pkR2pyWUpuV041SUUyOG5RN0E5ZE9oRnFUVTQ4d2NRT0RqWVBNWGtyVThuSlFWY1ZuTGZicUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMwLCJhZHZTZWNyZXRLZXkiOiI3WUR4amJDKzF4ZElLOGpIY1ZxNHlwT1hRMTh0YnpGQjh2cHJPSHJ6ZnRJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDM2JMbTQtYlFxLWUzWWpwWGNwT0ZBIiwicGhvbmVJZCI6IjM1MWI1Zjg4LWFhNGQtNDNlYS05NzU4LTNjMGM1NTk2NGMyYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5TWhMbUlENHN3MkVlYUM3WWZzMGlyMnU0Uzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2JYbGNwZktqT0tkcGRwanVkNnlJa1VYQlM0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJISEVSWDJTIiwibWUiOnsiaWQiOiIyMzQ4MTM4MzkyNzcwOjU1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMaXd0UG9GRU5DZmhMUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqdTZVYThTSlRNaGxObmJPdmQ1eGp3VkNBeHA4VUFUOGJlK3pOL0diRldVPSIsImFjY291bnRTaWduYXR1cmUiOiJzbnRGMm9SaTRQY1U0OFhlUU1qOXM0SThYTGZHNE1yYTVMcFh6OVI5cXA2ZTloYlMvSms1VUIrdFo4Qm40SmNkZi9iQ2VnZ3ZoTDI4OFR1SVRJUlBBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNXd0UExJMDFzTDlJblllcW53UTRkWGVXQ3JXdWZmY1RQSWExL1ZnZ1JOa2ozUGtlSEwxdUNtR0lQektRU3hQMzYxRC9FMEFlamZieVJGK3MrbGJqQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTM4MzkyNzcwOjU1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlk3dWxHdkVpVXpJWlRaMnpyM2VjWThGUWdNYWZGQUUvRzN2c3pmeG14VmwifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk3MzQyMzh9
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU8rNi9jeGFNejhFQXdYT25uZXlBc1lVRU16dTFOaGRPL3hmRDBMOEYzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRi9XUXFGMXI4dnl4VGhTT0tZVDAvaUZjZWEzR1ZHanRTOW5FWnFESHBnST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4R0tUWFJHdUlGY050cWVKWEpFdi9USkxWbjYxRHc1RGFPQ3ZoS0ZNd0cwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUjkrQnIvWXc1MkFRaFJiakFoRDZFeFg1Q1gxa09HdlZLaVl0bWxkVFM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlGVmxhYzk4WEtEWG9mWHFEWDZCd25telRjZW1jLzVod0FJanVMRG1wRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZ1QVlhVGJocVZEM29WZ3JBeTBSQkxFWW1QVnFPenJCUWxwbFhHcGNoU009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUpNUXFaZ3pvNjQ2MGRoYWVGaUV3R21oUTdFMDVmZFRQNDEzYkhTWEJIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDBkSGhzMkZyRXJWWThkRjNHMTYzc0RTMEh2eW9YOWJYc2pqMTY4d0F5dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldsVnFYNStUWk9WOFdGT1ZrS05Va1FZL1hxbE93d1pkR2pyWUpuV041SUUyOG5RN0E5ZE9oRnFUVTQ4d2NRT0RqWVBNWGtyVThuSlFWY1ZuTGZicUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMwLCJhZHZTZWNyZXRLZXkiOiI3WUR4amJDKzF4ZElLOGpIY1ZxNHlwT1hRMTh0YnpGQjh2cHJPSHJ6ZnRJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDM2JMbTQtYlFxLWUzWWpwWGNwT0ZBIiwicGhvbmVJZCI6IjM1MWI1Zjg4LWFhNGQtNDNlYS05NzU4LTNjMGM1NTk2NGMyYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5TWhMbUlENHN3MkVlYUM3WWZzMGlyMnU0Uzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2JYbGNwZktqT0tkcGRwanVkNnlJa1VYQlM0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJISEVSWDJTIiwibWUiOnsiaWQiOiIyMzQ4MTM4MzkyNzcwOjU1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMaXd0UG9GRU5DZmhMUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqdTZVYThTSlRNaGxObmJPdmQ1eGp3VkNBeHA4VUFUOGJlK3pOL0diRldVPSIsImFjY291bnRTaWduYXR1cmUiOiJzbnRGMm9SaTRQY1U0OFhlUU1qOXM0SThYTGZHNE1yYTVMcFh6OVI5cXA2ZTloYlMvSms1VUIrdFo4Qm40SmNkZi9iQ2VnZ3ZoTDI4OFR1SVRJUlBBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNXd0UExJMDFzTDlJblllcW53UTRkWGVXQ3JXdWZmY1RQSWExL1ZnZ1JOa2ozUGtlSEwxdUNtR0lQektRU3hQMzYxRC9FMEFlamZieVJGK3MrbGJqQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTM4MzkyNzcwOjU1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlk3dWxHdkVpVXpJWlRaMnpyM2VjWThGUWdNYWZGQUUvRzN2c3pmeG14VmwifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk3MzQyMzh9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "https://",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
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
