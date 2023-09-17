import { RequestHandler } from 'express';
import { db } from '../../services/db';

export const createNote: RequestHandler = async (req, res) => {
  const { content } = req.body;

  try {
    const data = await db.query(
      'INSERT INTO notes(content) VALUES($1) RETURNING *',
      [content]
    );
    res.status(201).send(data.rows[0]);
  } catch (error) {
    res.status(500);
  }
};
