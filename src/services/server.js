import express from "express";
import helmet from "helmet";
import mainRouter from '../routes'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.get('/api', mainRouter);

export default app;
