const https = require("https");
const fs = require("fs");

console.log("App started");

const requestParams = {
    hostname: "host.com",
    key: fs.readFileSync("./resources/privatekey.pem"),
    cert: fs.readFileSync("./resources/publiccert.pem"),
    // ca: fs.readFileSync("./resources/publiccert.pem"),
    rejectUnauthorized: false,
    path: "/odata/Contacts?$expand=Personal",
    method: "GET"
};

const httpsReq = https.request(requestParams, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    console.log('-------Data----------');

    res.on('data', (d) => {
        process.stdout.write(d);
    });
});

httpsReq.on('error', (e) => {
    console.error(e);
});
httpsReq.end();

console.log("App Ended");