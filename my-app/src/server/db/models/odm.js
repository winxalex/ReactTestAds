import mongoose from 'mongoose'


const url = process.env.MONGODB_URI || `mongodb://localhost:27017/test-db`;



// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     // we're connected!
// });




let odm = null;

export async function getODM() {
    if (odm) return odm;

    odm = await mongoose.connect(url, { useNewUrlParser: true })
        .catch(err => console.error(err));



    return odm;
}