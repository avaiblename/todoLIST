import express from 'express';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { authRoutes } from './routes/authRoutes';
import { initUser } from './models/user';

dotenv.config();

const app = express();
app.use(express.json());

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'postgres',
});

initUser(sequelize);

sequelize.sync().then(() => {
  app.use('/auth', authRoutes);
  app.listen(3001, () => console.log('Auth Service running on port 3001'));
}).catch((error) => {
  console.error('Failed to connect to database:', error);
});
