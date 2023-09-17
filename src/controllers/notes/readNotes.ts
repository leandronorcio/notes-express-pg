import { RequestHandler } from 'express';
import { db } from '../../services/db';

export const readNotes: RequestHandler = async (req, res) => {
  const data = await db.query('SELECT * FROM notes');
  res.send(data.rows);
};
