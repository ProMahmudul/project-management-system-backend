import { Router } from 'express';

export default (app: Router) => {
  app.get('/user', (req, res) => {
    res.status(200).json({ user: 'tobi' });
  });

  app.post('/user', (req, res) => {
    res.status(200).json({ user: 'tobi' });
  });

  app.put('/user', (req, res) => {
    res.status(200).json({ user: 'tobi' });
  });

  app.delete('/user', (req, res) => {
    res.status(200).json({ user: 'tobi' });
  });
}
