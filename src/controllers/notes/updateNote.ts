import { RequestHandler } from 'express';
import { db } from '../../services/db';

export const updateNote: RequestHandler = async (req, res) => {
  const { content } = req.body;
  const { id } = req.params;

  try {
    const data = await db.query(
      'UPDATE notes SET content = $1 WHERE id = $2 RETURNING *',
      [content, id]
    );
    res.send(data.rows[0].count);
  } catch (error) {
    res.status(500);
  }
};
