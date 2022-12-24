const playerController = require('../controllers/player.controller');
module.exports = function(app){
    app.post('/api/players', playerController.createPlayer);

app.get('/api/players', playerController.getAllPlayer);


app.get('/api/players/:id', playerController.getPlayer);
app.put('/api/players/:id', playerController.updatePlayer);
app.delete('/api/players/:id', playerController.deletePlayer);



}
