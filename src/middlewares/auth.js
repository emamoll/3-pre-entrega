import { logger } from "../logs/index";

export const isLoggedIn = (req, res, done) => {
  logger.info("Esta autenticado");
  logger.info(req.isAuthenticated());

  if (!req.isAuthenticated()) {
    logger.error("No estas autorizado");
    return res.status(401).json({ msg: "No estas autorizado" });
  } else done();
};
