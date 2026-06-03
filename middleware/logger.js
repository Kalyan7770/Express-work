const logger =(req,res,next) => {
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDay();
const hour = today.getHours();
const minute = today.getMinutes();
const seconds = today.getSeconds();
let start = Date.now();
res.on("finish",() =>{
    let end = Date.now();
    let duration = end - start;
    let logMessage = `${year}-${month}-${day}-T${hour}:${minute}:${seconds} ${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`;
    console.log(logMessage);

});

     next();
};
export default logger;