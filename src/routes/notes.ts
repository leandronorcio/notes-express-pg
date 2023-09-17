import express from 'express';
import { createNote } from '../controllers/notes/createNote';
import { updateNote } from '../controllers/notes/updateNote';
import { readNotes } from '../controllers/notes/readNotes';
import { deleteNote } from '../controllers/notes/deleteNote';
import { readNote } from '../controllers/notes/readNote';
import { verifyExistence } from '../middlewares/verifyExistence';

const router = express.Router();

router.get('/', readNotes);
router.get('/:id', readNote);
router.post('/', createNote);
router.put('/:id', verifyExistence, updateNote);
router.delete('/:id', verifyExistence, deleteNote);

export { router as notesRouter };
