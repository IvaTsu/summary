import Koa from 'koa';

// new instance of app
const app = new Koa();

// app handler
app.use(async (ctx) => {
    ctx.body = '<h1>Summary</h1>';
});

export default app;
