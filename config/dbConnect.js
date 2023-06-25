const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try {
        const conn = mongoose.connect('mongodb://localhost:27017/digitic');
        console.log("database Connect success");
    } catch (error) {
       console.log("database error");
    }
}

module.exports = dbConnect