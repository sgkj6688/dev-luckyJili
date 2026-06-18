const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3033;

// 使用cors中间件
app.use(cors()); // 允许所有域
// 或者指定允许的域
// app.use(cors({ origin: 'http://localhost:3033/' }));
// app.use(cors({ authority:'jiliv3-api.southasiabp.online',origin: 'http://localhost:3033' }));
// app.use(cors({ origin: 'https://jiliv3-api.southasiabp.online' }));
app.use(express.static(".")); // 设置静态文件目录为当前目录
// 自定义 MIME 类型（如果需要）
app.use((req, res, next) => {
    // console.log(req.url);
    res.setHeader("Content-Type", "text/css");
    res.setHeader("Content-Type", "application/javascript");
    res.setHeader("Content-Type", "text/javascript");
    res.setHeader("Content-Type", "application/cconb+json");
    res.setHeader("Content-Type", "Access-Control-Allow-Origin");
    
    // if (req.url === "/styles.js") {
    //     res.setHeader("Content-Type", "text/javascript");
    // }
    next();
});


// app.options('*', (req, res) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3033/');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.sendStatus(204);
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
