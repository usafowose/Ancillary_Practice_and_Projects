const events = require("events");
const { emit } = require("process");

function createEmitter(onOpen, onClose) {    
  let emitter1 = new events.EventEmitter(); 
//   let emitter2 = new events.EventEmitter()
     emitter1.addListener('open')
     emitter1.addListener('close')
     emitter1.on('open', onOpen); 
     emitter1.on('close', onClose)

  let listen2 = emitter1.addListener('close', () => console.log(onClose))
  return listen, listen2; 
}

function opened(emitter) {
    emitter.emit('open'); 
}
function closed(emitter) {
return emitter.emit('close');
}

let emitter = createEmitter(
  () => console.log("Opened!"), () => console.log("Closed!")
);
opened(emitter);
closed(emitter);

module.exports.createEmitter = createEmitter;
module.exports.opened = opened;
module.exports.closed = closed;