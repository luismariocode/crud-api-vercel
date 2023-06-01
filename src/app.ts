import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares';
import MessageResponse from './interface/MessageResponse';

//Rutas
import IndexRoutes from './routes/index.route';
import UsersRoutes from './routes/users.route';
import DirectoryRoutes from './routes/contact.route';


require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Use body-parser as middlewar

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Conexión correcta.',
  });
});

app.use('/api/v1', IndexRoutes);
app.use('/api/v1/users', UsersRoutes);
app.use('/api/v1/directory', DirectoryRoutes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);





export default app;
