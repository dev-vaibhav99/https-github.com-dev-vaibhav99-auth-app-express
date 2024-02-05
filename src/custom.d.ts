// // custom.d.ts
export declare global {
  namespace Express {
    interface Request {
      user?: any; // Adjust the type of 'user' according to your user model
      inputType: string;
    }
  }
}
