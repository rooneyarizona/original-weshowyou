const fs = require("fs");

fs.writeFileSync("message.txt", "Video data", (err) => {
    if (err) throw err;
    console.log("Success!");
});