let {spawm} = require('child_process');
spawn('sudo apt install docker').on('close',() => {
spawn('sudo apt install docker-compose').on('close',() => {
spawn('docker-compose up');

})

});