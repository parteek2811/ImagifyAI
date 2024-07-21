import { model, models, Schema, Document } from "mongoose";

// Define the IUser interface
export interface IUser extends Document {
    clerkId: string;
    email: string;
    username: string;
    photo: string;
    firstName?: string; // Optional
    lastName?: string; // Optional
    planId: number;
    creditBalance: number;
}

// Define the UserSchema
const UserSchema = new Schema<IUser>({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    planId: { type: Number, default: 1 },
    creditBalance: { type: Number, default: 10 },
}, {
    timestamps: true,
});

const User = models?.User || model<IUser>('User', UserSchema);

export default User;
