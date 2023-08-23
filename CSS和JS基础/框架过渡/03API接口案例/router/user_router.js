import express from 'express';
import { getAllUser } from '../router_handler/getUser.js'
const router = new express.Router()
router.get('/user', getAllUser)
export default router