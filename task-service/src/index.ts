import express from 'express';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { taskRoutes } from './routes/taskRoutes';
import { initTask } from './models/task';

dotenv.config();

const app = express();
app.use(express.json());

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'postgres',
});

initTask(sequelize);

sequelize.sync().then(() => {
  app.use('/tasks', taskRoutes);
  app.listen(3002, () => console.log('Task Service running on port 3002'));
}).catch((error) => {
  console.error('Failed to connect to database:', error);
});
