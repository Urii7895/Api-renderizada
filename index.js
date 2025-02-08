import app from './app.js';
import './database.js';

app.listen(app.get("port"), () => { console.log(` Deam this shit it's running on port: ${app.get("port")}`);
});


