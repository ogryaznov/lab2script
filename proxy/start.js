const app = require('./server.js');

app.listen(proccess.env.PORT, () => {
	console.log('Server start at localhost:' + proccess.env.PORT);
});