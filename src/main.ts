import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import { config } from "./configs/config";
import { ApiError } from "./errors/api-error";
import { authRouter } from "./routers/auth.router";
// import { read, write } from "./fs.service";
import { userRouter } from "./routers/user.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/auth", authRouter);

// app.put(
//   "/users/:userId",
//   async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       if (!req.body.name || req.body.name.length < 3) {
//         throw new ApiError(
//           "Name is required and should be minimum 3 symbols",
//           400,
//         );
//       }
//       if (!req.body.email || !req.body.email.includes("@")) {
//         throw new ApiError("Email is required", 400);
//       }
//       if (!req.body.password || req.body.password.length < 8) {
//         throw new ApiError(
//           "Password is required and should be minimum 8 symbols",
//           400,
//         );
//       }
//       const users = await read();
//       const index = users.findIndex(
//         (user) => user.id === Number(req.params.userId),
//       );
//
//       if (index === -1) {
//         throw new ApiError("User not found", 404);
//       }
//       const user = users[index];
//       user.name = req.body.name;
//       user.email = req.body.email;
//       user.password = req.body.password;
//
//       await write(users);
//       res.status(201).json(user);
//     } catch (e) {
//       next(e);
//     }
//   },
// );
//
// app.delete(
//   "/users/:userId",
//   async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const users = await read();
//       const index = users.findIndex(
//         (user) => user.id === Number(req.params.userId),
//       );
//
//       if (index === -1) {
//         throw new ApiError("User not found", 404);
//       }
//       users.splice(index, 1);
//       await write(users);
//       res.sendStatus(204);
//     } catch (e) {
//       next(e);
//     }
//   },
// );

app.use(
  "*",
  (error: ApiError, req: Request, res: Response, next: NextFunction) => {
    const status = error.status ?? 500;
    const message = error.message ?? "Something wrong";
    console.log(error.message);
    res.status(status).json({ status, message });
  },
);

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});
// CRUD
// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE

// create-users -> users (POST)
// get-list-users -> users (GET)
// get-user-by-id -> users/:id (GET)
// update-user -> users/:id (PUT)
// delete-user -> users/:id (DELETE)

console.log(config.mongoUri);
app.listen(config.port, async () => {
  await mongoose.connect(config.mongoUri);
  console.log(`Server has been started on port ${config.port}`);
});
