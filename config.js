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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254741079357";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_09_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDg4LFxuICAgICAgICA3MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgODQsXG4gICAgICAgIDMxLFxuICAgICAgICA5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDksXG4gICAgICAgIDU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgwLFxuICAgICAgICAwLFxuICAgICAgICA1OCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkzLFxuICAgICAgICA5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTksXG4gICAgICAgIDM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgODQsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDUzLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDg4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDg3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIzLFxuICAgICAgICA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDY4LFxuICAgICAgICAzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExLFxuICAgICAgICAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NixcbiAgICAgICAgODgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NixcbiAgICAgICAgMTc5LFxuICAgICAgICA1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MixcbiAgICAgICAgODUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJmNDBna1Mxck1WWXE3bWtVbVRXNUJQSjVObG5RajdPU29VVEoxeUZWb1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1VY3JHdl9DU0pxTVNZUFlqbG9FNndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTdmNTBlY2UtMjhmYS00MjFhLTk1MjItOTZiYjZiMTYyNmJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgMTg0LFxuICAgICAgMTksXG4gICAgICAxMzgsXG4gICAgICA0NCxcbiAgICAgIDUwLFxuICAgICAgMjE1LFxuICAgICAgMjQyLFxuICAgICAgMjAzLFxuICAgICAgMTU5LFxuICAgICAgMTQ5LFxuICAgICAgMjQ5LFxuICAgICAgMTc2LFxuICAgICAgMTk5LFxuICAgICAgMjYsXG4gICAgICA2OCxcbiAgICAgIDExMCxcbiAgICAgIDQzLFxuICAgICAgMjAwLFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4LFxuICAgICAgOTcsXG4gICAgICAxMDUsXG4gICAgICAyMDAsXG4gICAgICA4MSxcbiAgICAgIDIyMSxcbiAgICAgIDM1LFxuICAgICAgMTg4LFxuICAgICAgODksXG4gICAgICAxOCxcbiAgICAgIDE1MyxcbiAgICAgIDQyLFxuICAgICAgMTU4LFxuICAgICAgNDEsXG4gICAgICAyMDksXG4gICAgICAyNyxcbiAgICAgIDk3LFxuICAgICAgMTU1LFxuICAgICAgMTk3LFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZTWUJXTllFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDEwNzkzNTc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM4Mzc5NTc2ODgxMjc3OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0Q1KzcwR0VQWEo0TFFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3Ti8vWU10OHcrQVNVL0xESXdBL2R1L2g4d28zS3o0cUlYejM5dHlQU1ZrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNTbWRZMHBGa3J2Z3JidEdQRTlEWU9Tc2RUdTU2RnJUbUtGOWt1dHZaL0cyTllQTnk3UmhWMVIxdzRrYUFZbmhSYjVFOXZDYnhSWjliMW5TYkZXM0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldsb2Z3MXgzVG90RGlQck8vY2hLL2s5bnZwa0c4NEhONnVMb2Q5VEtqUUVhZjdEMkU4dVhWbnErbk1rZDhLQXpYYVlKNnEyT0VpQ0dTWjE3a0c5amlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0MTA3OTM1Nzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjQ2OTY5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkZLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGRksuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmdFcvcDB1MDZUcSs2cnNjUnZUdGtHZlphSVhMcno4V3ZjcDU2MDIxMXNBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NDA1Njk4MjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDEyMzMwNzMwNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
