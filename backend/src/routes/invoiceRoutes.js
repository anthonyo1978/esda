import { Router } from 'express';
import {
  getInvoiceList, 
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} from '../controllers/invoiceController.js';

const router = Router();

router.get('/', getInvoiceList);       
router.get('/:id', getInvoiceById);     
router.post('/', createInvoice);        
router.put('/:id', updateInvoice);      
router.delete('/:id', deleteInvoice);   

export default router;
