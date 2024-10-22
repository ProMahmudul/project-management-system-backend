import { Router } from "express";
import auth from "./routes/auth";
import user from "./routes/user";
import agentdash from "./routes/agentdash";

// guaranteed to get dependencies
export default () => {
  const app = Router();
  auth(app);
  user(app);
  agentdash(app);

  return app;
}
