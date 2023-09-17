import { RequestHandler } from 'express';
import { db } from '../../services/db';

export const deleteNote: RequestHandler = async (req, res) => {
  console.log('is this reached');
  try {
    const { id } = req.params;
    await db.query('DELETE FROM notes WHERE id = $1 RETURNING id', [id]);
    res.sendStatus(204);
  } catch (error) {
    res.status(500);
  }
};
