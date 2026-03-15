const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/claude-project', (req, res) => {
 const filePath = 'shadow-52-week-roadmap-1.html'
    // __dirname ensures the path is relative to your project root
    res.sendFile(path.join(__dirname, filePath));
});
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});
app.listen(8080, '0.0.0.0', ()=>{
	console.log(`server started on port 8080 on http://127.0.0.1:8080`)
})
module.exports = app;
