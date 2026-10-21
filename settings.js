require('dotenv').config();

const settings = {
  packname: 'ZORO-MD',
  author: 'Aadhixd',
  botName: "ZORO MD",
  botOwner: 'Aadhixd', 
  ownerNumber: '918136880986', 
  giphyApiKey: process.env.GIPHY_API_KEY,
  geminiApiKey: process.env.GEMINI_API_KEY,
  commandMode: "public",
  maxStoreMessages: 20, 
  storeWriteInterval: 10000,
  description: "This is a bot for managing group commands and automating tasks.",
  version: "1.0.0",
  updateZipUrl: "https://github.com/Xion-Xer/ZORO-MD-MODULES-main/archive/refs/heads/main.zip",
};

module.exports = settings;
