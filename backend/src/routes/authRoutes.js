import express from 'express';

const router = express.Router();

router.post('/register', async (req, res) => {
  res.send('Register Success');
});
router.post('/login', async (req, res) => {
  res.send('Login Success');
});

export default router;
