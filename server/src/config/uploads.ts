import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {

	storage: multer.diskStorage({

    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    
		filename: (request, file, callback) => {
			const filaHash = crypto.randomBytes(10).toString('hex');
			const fileName = `${filaHash}-${file.originalname}`;

			return callback(null, fileName);
		}
	}),
};