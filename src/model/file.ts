import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
    original_file: {
        type: String,
    },
    framed_file: {
        type: String,
    }
})

const File = mongoose.model('File', fileSchema);
export default File;