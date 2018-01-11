import app from './app';

const PORT = 7700;

const server = app.listen(PORT, (err) => {
    if (err) console.log(err);

    console.log(`Server is running on port: ${PORT}`);
    console.log(`Open your browser at localhost:${PORT}`);
});

export default server;
