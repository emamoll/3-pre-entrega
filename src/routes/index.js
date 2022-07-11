import passport from "passport";
import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth";
import { logger } from "../logs";

const router = Router();
const passportOptions = {
  badRequestMessage: "Falta el email o la cantrasenia",
};

router.get("/signup", (req, res) => {
  res.json({
    msg: "Complete con sus datos",
  });
});

router.post("/signup", (req, res, next) => {
  passport.authenticate("signup", passportOptions, (err, user, info) => {
      logger.info("Informacion de registro");
      logger.info(err, user, info);

      if (err) {
        logger.error(err);

        return next(err);
      }

      if (!user) {
        logger.error("Error de registro");

        return res.status(401).json({
          msg: "Error de regristo",
        });
      } else
        res.json({ msg: "Registro completado" });
    })(req, res, next);
});

export default router;
