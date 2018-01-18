import app from './app';
import { PORT, MONGO_URI } from './config';

const server = app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(MONGO_URI);
    console.log(`Server is running on port: ${PORT}`);
    console.log(`Open your browser at localhost:${PORT}`);
});

export default server;
