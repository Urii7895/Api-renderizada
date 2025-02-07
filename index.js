import app from './app.js';
import './database.js';

app.listen(app.get("port"), () => { console.log(` Awebo esta shit está corriendo en el puerto: ${app.get("port")}`);
});


