import multer from 'multer'

const storage = multer.diskStorage({});

const filefilter = (req, file, cb) => {

    if (!file.mimetype.includes("pdf")) {
        return cb("invalid image formate!", false)
    }
    cd(null, true);
}

export const multerfile = multer({ storage, filefilter });