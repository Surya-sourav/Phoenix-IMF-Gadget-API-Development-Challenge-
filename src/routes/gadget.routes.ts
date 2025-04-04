// src/routes/gadget.routes.ts
import { Router } from 'express';
import { 
  getAllGadgets, 
  createGadget, 
  updateGadget, 
  decommissionGadget, 
  selfDestructGadget 
} from '../controllers/gadget.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();

// Apply authentication middleware to all routes
router.use(protect);

// Routes
router.get('/', getAllGadgets);
router.post('/', createGadget);
router.patch('/:id', updateGadget);
router.delete('/:id', decommissionGadget);
router.post('/:id/self-destruct', selfDestructGadget);

export default router;