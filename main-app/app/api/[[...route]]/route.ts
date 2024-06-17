import { Hono } from "hono";
import { handle } from "hono/vercel";
import insightsController from "../(controllers)/insightsController";
import propertyController from "../(controllers)/propertyController";
import userController from "../(controllers)/userController";
import imagesController from "../(controllers)/imagesController";

// Increase performance by using either Drizzle, or Prisma Accelerate
// export const runtime = "edge";

const app = new Hono().basePath("/api");

// app.use(clerkMiddleware());
app.route("/user", userController);
app.route("/insights", insightsController);
app.route("/properties", propertyController);
app.route("/images", imagesController);

export const GET = handle(app);
export const POST = handle(app);
