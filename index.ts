import express from 'express';
import { notesRouter } from './src/routes/notes';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/notes', notesRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
