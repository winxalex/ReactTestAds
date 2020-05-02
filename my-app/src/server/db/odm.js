import mongoose from 'mongoose'


const url = process.env.MONGODB_URI || `mongodb://localhost:27017/test-db`;



// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     // we're connected!
// });





export async function connectODM() {

    await mongoose.connect(url, { useNewUrlParser: true })
        .then(() => console.log(`Mongoose ODM connect to MongoDB ${url}`))
        .catch(err => console.error(err));

}