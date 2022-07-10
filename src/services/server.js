import express from "express";
import helmet from "helmet";
import session from "express-session";
import passport from "passport";
import { loginFunc, signupFunc } from "./auth";
import mainRouter from "../routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "mySecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 600000,
    },
  })
);
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());

passport.use("login", loginFunc);
passport.use("signup", signupFunc);
app.use("/api", mainRouter);

export default app;
