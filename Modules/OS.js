var os = require('os');

console.log("Operating System Information");
console.log("----------------------------");

console.log("Operating System:", os.type());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("OS Release:", os.release());
console.log("Hostname:", os.hostname());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());
console.log("Temporary Directory:", os.tmpdir());
console.log("CPU Information:", os.cpus());