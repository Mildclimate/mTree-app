const express = require('express');
const app = express();
app.get('/api/hello', (_, res) => res.json({ msg: 'Hello from backend!' }));
app.listen(3000, () => console.log('Backend on :3000'));