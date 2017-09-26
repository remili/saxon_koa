const Koa = require('koa');
const app = new Koa();
const router = require('./routes/index');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');


app.use( async ( ctx,next ) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms)`);
});

//解析post请求的数据
app.use(bodyParser());
//跨域
app.use(cors());

app.use(router.routes());

app.listen(3000);
console.log('[demo] is starting at port 3000');
