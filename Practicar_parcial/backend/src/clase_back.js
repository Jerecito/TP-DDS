import express from "express"
import cors from "cors"

const app = express();
app.use(express.json());
const corsOptions = {origin: '*',};
app.use(cors(corsOptions));

export default app