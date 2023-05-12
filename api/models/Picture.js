const mongoose = require ('mongoose')


const pictureSchema = new mongoose.Schema ({
    creator: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    title: String, 
    location: String,
    photos: [String],
    description: String,
    tags: [String],
    license: String,


});

const PictureModel = mongoose.model('Picture', pictureSchema);

module.exports = PictureModel;


