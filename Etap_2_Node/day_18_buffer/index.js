// Tworzenie buffera i oznaczenie sztywnej wielkosci w bajtach
const buff = Buffer.alloc(20);


// Nadpisywanie buffera
buff.write('Hello World!', 'utf8');
console.log(buff);
console.log(buff.toString('hex'));
console.log(buff.toString('utf8'));


// Sprawdzenie dlugosci bajtow danej literki
console.log(Buffer.byteLength('Ź', 'utf8'));