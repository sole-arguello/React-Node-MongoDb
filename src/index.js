import { app } from './app.js';
import { connectDB } from './config/configConnectionDB.js';

connectDB();
const port = 8080;
app.listen(port, () => console.log(`Server on port ${port}`));