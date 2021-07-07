import { Router } from 'express';
import CreateUserController from './controllers/CreateUserController';
import CreateTagController from './controllers/CreateTagController'; 
import AuthenticateUserController from './controllers/AuthenticateUserController';
import CreateComplimentController from './controllers/CreateComplimentController';
import ListUserReceiverComplimentController from './controllers/ListUserReceiverComplimentController';
import ListUserSenderComplimentController from './controllers/ListUserSenderComplimentController';
import ListTagsController from './controllers/ListTagsController';

import ensureAdmin from './middlewares/ensureAdmin';
import ensureAuthenticated from './middlewares/ensureAuthenticated';


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiverComplimentController = new ListUserReceiverComplimentController();
const listUserSenderComplimentController = new ListUserSenderComplimentController();
const listTagsService = new ListTagsController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get('/tags', ensureAuthenticated, listTagsService.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliment', ensureAuthenticated, createComplimentController.handle);

router.get('/users/compliments/send', ensureAuthenticated, listUserSenderComplimentController.handle);
router.get('/users/compliments/receive', ensureAuthenticated, listUserReceiverComplimentController.handle);

export default router;