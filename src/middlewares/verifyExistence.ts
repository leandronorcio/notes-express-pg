import { RequestHandler } from 'express';
import { db } from '../services/db';

export const verifyExistence: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const data = await db.query(
    `
    SELECT COUNT(*) AS count
    FROM notes
    WHERE id = $1;
`,
    [id]
  );

  if (data.rows[0].count === '0') {
    res.sendStatus(404);
  }
  next();
};
