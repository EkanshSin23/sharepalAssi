const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/newdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log('successful');
}).catch((e) => {
    console.log(e);
})

const schema = new mongoose.Schema({
    city: {
        type: String
    }
}, { collection: 'user-data' })
const City = new mongoose.model("City", schema);
module.exports = City;