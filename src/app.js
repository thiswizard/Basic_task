import express from 'express';
import authRouter from './src/routes/auth.router.js';

const app = express();
const PORT = 3000;


app.use(express.json());


app.use('/auth', authRouter);


app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
