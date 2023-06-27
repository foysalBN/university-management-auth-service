import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  // database_url: process.env.DEV_DATABASE_URL, //🔥 temporary
  default_user_pass: process.env.DEFAULT_USER_PASSWORD,
};
