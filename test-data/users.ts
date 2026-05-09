import * as dotenv from 'dotenv';
dotenv.config();

export const validUser = {
  username: process.env.ADMIN_USERNAME || 'Admin',
  password: process.env.ADMIN_PASSWORD || '',
};

export const invalidUser = {
  username: 'Admin',
  password: 'wrongpassword',
};

export const newEmployee = {
  firstName: 'Carlos',
  middleName: 'Eduardo',
  lastName: 'Ramirez',
};

export const leaveData = {
  leaveType: 'CAN - Vacation',
  fromDate: '2026-01-15',
  toDate: '2026-01-16',
  comment: 'Vacaciones familiares',
};