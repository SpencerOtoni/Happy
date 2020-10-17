import { Router } from 'express'
import multer from 'multer';

import uploadConfig from './config/uploads'

import OrphanagesController  from './controllers/OrphanagesController'
const orphanagesController = new OrphanagesController()

const routes = Router()
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), orphanagesController.create)
routes.get('/orphanages', orphanagesController.index)
routes.get('/orphanages/:id', orphanagesController.show)

export default routes