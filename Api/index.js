const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(cors());



app.use(require('./rutas/persona'));
app.use(require('./rutas/entrenador'));
app.use(require('./rutas/rutina'));
app.use(require('./rutas/ejercicio'));
app.use(require('./rutas/dieta'));




app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});