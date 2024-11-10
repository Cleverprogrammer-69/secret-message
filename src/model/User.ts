import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

export const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: [true, "Message content is required."],
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  email: string;
  username: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: string;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  message: Message[];
}

export const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  verifyCode: {
    type: String,
    required: [true, "Verigy code is required."],
  },
  verifyCodeExpiry: {
    type: String,
    required: [true, "Verify code expiry is required."],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  message: [MessageSchema],
});
