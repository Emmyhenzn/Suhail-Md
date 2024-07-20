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
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_38_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgODksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMixcbiAgICAgICAgNjksXG4gICAgICAgIDQyLFxuICAgICAgICA0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTczLFxuICAgICAgICAxOSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE1LFxuICAgICAgICA2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDk2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDcxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICA4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI3LFxuICAgICAgICA1MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYzLFxuICAgICAgICA2MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDgxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU3LFxuICAgICAgICA5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDg4LFxuICAgICAgICA0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDMyLFxuICAgICAgICA4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExLFxuICAgICAgICA2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXOVkxTTloRXlLVXhJa0lGUXBheDlLZUdoUW5lUTNsUXY3czJSc0RsUzU0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDRGQ0cE5GOVExQzdBeDJGc1pfVXRBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhmNzZkN2ZjLWMzNWQtNDU3Yy1iYzY3LTZiMTlkOThkYTc1OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICAxMTIsXG4gICAgICAyMzEsXG4gICAgICA5OSxcbiAgICAgIDE3NixcbiAgICAgIDE0MSxcbiAgICAgIDIwOCxcbiAgICAgIDEwNSxcbiAgICAgIDE4OCxcbiAgICAgIDE4NixcbiAgICAgIDc3LFxuICAgICAgMTczLFxuICAgICAgMTc1LFxuICAgICAgMTM5LFxuICAgICAgMTc4LFxuICAgICAgMTE4LFxuICAgICAgNzQsXG4gICAgICAyNTMsXG4gICAgICAxNzQsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAyNyxcbiAgICAgIDE0MixcbiAgICAgIDgyLFxuICAgICAgMTM4LFxuICAgICAgMTYwLFxuICAgICAgMzIsXG4gICAgICAxNDUsXG4gICAgICAxMjksXG4gICAgICAxNzUsXG4gICAgICAyNDgsXG4gICAgICAxNzIsXG4gICAgICA4NSxcbiAgICAgIDE0MSxcbiAgICAgIDg3LFxuICAgICAgMzksXG4gICAgICAyMjAsXG4gICAgICA1OCxcbiAgICAgIDIsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUkI2M1hTUFZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjUwNDI3Mjc6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgzMDczNDg0MzYxOTA3OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjJ0MTVRQ0VQV3o3N1FHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrYWI2REtHSUwxVXZyMEQ1UDlFRTdaZGZ2Tk9LZHN4OWhGeXlqS3p0N2tBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNPQzVvNkxQSHVaNjR1Mm1qaU8yZ2p1VHZCK1VvUHVHdjk0OWozNGNLaVlLVG80QXUyM0p3YVlBZXhFVkhnZVd6SWlxWHo4NHErRlpKMHZiM1F2NENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRtTDFOcmhFbjFEN0psREw5VC96WHB5UVplK2N6eVkvczFqUk4rU1dSWFdjQ3ZvdjF0U3hiSHlJbmpTVEJiOUFBcVBJMmZ1ME84VjcxMHlObTIrbGdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjUwNDI3Mjc6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0ODk5MTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFMWhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUxaC5qc29uIjogIntcImtleURhdGFcIjpcIlZydUFTRXZ6WElCQ3hnVE42Wmg2TlZIN2srbWluSHp6cEFsbHlNZ1R6YkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTgwMjQ1MjEzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyMjQwOTUwMjdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "EMMY BOT",
  ownername:process.env.OWNER_NAME|| "EMMY HENZ",


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
