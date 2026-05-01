import express from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";
import router from "./routes.js";

dotenv.config();
const app = express();

app.use("/", router);

// For local development
if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

// Export for Vercel
export default serverless(app);