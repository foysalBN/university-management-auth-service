import cors from 'cors';
import express, { Application } from 'express';
import router from './app/routes';
import globalErrorHandler from './middlewares/globalErrorHandler';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application router
app.use('/api/v1', router);

//testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     // throw new ApiError(400, "🔥 Error ")
//     Promise.reject(new Error('unhendled rejection'))
//     // next()
// })

// global error handler
app.use(globalErrorHandler);

export default app;
