import { app } from './app.js';
//import { connectDB } from './config/configConnectionDB.js';
import { configEnv } from './config/configEnv.js';

//connectDB();
const port = configEnv.server.port;
app.listen(port, () => console.log(`Server on port ${port}`));