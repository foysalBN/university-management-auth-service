import { RequestHandler } from 'express';
import { academicSemesterService } from './academicSemester.service';

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = await academicSemesterService.createSemester(
      academicSemesterData
    );
    res.status(200).json({
      success: true,
      message: 'Successfully created Academic Semester',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const academicSemesterController = {
  createSemester,
};
