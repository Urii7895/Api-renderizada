import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://baduri490:kabbalamijo8@cluster1.b6s45.mongodb.net/ownbase')
.then((db) => console.log('mongo atlas conectado papasito'))
.catch((error)=> console.error('error a conectar la base de datos cagalar',error));

export default mongoose;
