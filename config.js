const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2349125042727" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349125042727";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349125042727,923xxxxxxxx";

global.api_smd = "" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_27_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MixcbiAgICAgICAgMTgxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzksXG4gICAgICAgIDk0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDYwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY3LFxuICAgICAgICA1MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDkwLFxuICAgICAgICAyNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgMTM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDksXG4gICAgICAgIDY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDk0LFxuICAgICAgICA0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM5LFxuICAgICAgICAzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM3LFxuICAgICAgICA2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjaEdZUWJhMzMyS3JFMEdaMVREeGVZNElWSlJaUloydmR1UXNiVlNhcDNBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmZGhCRkllU1M5TzBJWmVxWnM0LWtBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEyNWI1NTlkLTIwNTAtNDI5OC1hMjZjLTlkMjZiNjQ2YzcxYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAyMixcbiAgICAgIDI3LFxuICAgICAgMjQzLFxuICAgICAgMjIxLFxuICAgICAgNTcsXG4gICAgICAxMjcsXG4gICAgICA2MCxcbiAgICAgIDIyNyxcbiAgICAgIDE5MSxcbiAgICAgIDIwMixcbiAgICAgIDY3LFxuICAgICAgMjMxLFxuICAgICAgMTA4LFxuICAgICAgMTQyLFxuICAgICAgNDcsXG4gICAgICAzMyxcbiAgICAgIDI5LFxuICAgICAgMTE5LFxuICAgICAgNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgMjMwLFxuICAgICAgMTYxLFxuICAgICAgMjA3LFxuICAgICAgNzcsXG4gICAgICA1MixcbiAgICAgIDEzMCxcbiAgICAgIDQ5LFxuICAgICAgMTI1LFxuICAgICAgMjE4LFxuICAgICAgMTY5LFxuICAgICAgMTMxLFxuICAgICAgMjAsXG4gICAgICAyMzAsXG4gICAgICAyMzksXG4gICAgICA0NixcbiAgICAgIDMwLFxuICAgICAgMTEwLFxuICAgICAgMTkzLFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1BOQks4TVhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjUwNDI3Mjc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgzMDczNDg0MzYxOTA3OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTit0MTVRQ0VLejk4N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrYWI2REtHSUwxVXZyMEQ1UDlFRTdaZGZ2Tk9LZHN4OWhGeXlqS3p0N2tBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9ER1E2cWV3d3liUjZHVTU4b3dLTlNxYm1QR3p2ZHhHMUJlSmFlb0plbVg5d3oxZFpLREpCbnN1ZkNCRFNrU0RJc1dBZU13SjJacjVRMytaaGRRMEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInYrRFVBblZRTHd5L2piWjZwdjgwcFNZZUl5dzYzbm96TldBN1hqNzBhMkMyc1MyVlFuejNycHo4N2p6djRqdHFnSTc4UnpPZmFQenJqNXRZSUN6SGdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjUwNDI3Mjc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1NjQ4NDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFObi9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5uLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Better wallet bot",
  ownername:process.env.OWNER_NAME|| "Emmy henz",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "EMMY HENZ"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
