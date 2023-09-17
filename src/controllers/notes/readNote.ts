import { RequestHandler } from 'express';
import { db } from '../../services/db';

export const readNote: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const data = await db.query('SELECT * FROM notes WHERE id = $1', [id]);
  res.send(data.rows[0]);
};
