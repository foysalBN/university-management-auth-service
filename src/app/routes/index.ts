import { Router } from 'express';
import { academicSemesterRoute } from '../modules/academicSemester/academicSemesterRoute';
import { userRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoutes: {
  path: string;
  route: Router;
}[] = [
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/academic-semester',
    route: academicSemesterRoute,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, academicSemesterRoute);
});

// router.use('')
// app.use('/api/v1/user', userRoutes);

export default router;
