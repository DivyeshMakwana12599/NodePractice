const EventEmmiter = require('events');
const emmiter = new EventEmmiter();


emmiter.on('logging', arg => {
    console.log(arg.data);
});


emmiter.emit('logging', {data:'message'});

