import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const User = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'user'] },
});

User.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export interface UserDocument extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  role: string;
}
