import express, { json } from 'express'
import { addItem, allItems, deleteItem, searchItem, updateItem } from '../controllers/itemController.js'


const router = express.Router()

router.post('/createItem', addItem)
router.get('/allItems', allItems)
router.get('/searchItems', searchItem)
router.put('/updateItem/:id', updateItem)
router.delete('/deleteItem/:id', deleteItem)


export default router