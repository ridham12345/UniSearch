// class creates a web server lisiting on port 8080

import app from './api/app.js';

const port = 8080;

app.listen(port, () => {
    console.log(`Server started on port ${port} ...`);
});