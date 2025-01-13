const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "zzQGQDiT#5ZKiu5XEjgFhv5RurJBR8PC5w-QbvfY2L9hGpP29yG4",
    MONGODB: process.env.MONGODB || "mongodb://mongo:eKkloPwrUKytiEPfYMPZNtWfXHxsLbQu@autorack.proxy.rlwy.net:13482",
};
