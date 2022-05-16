const {readdir} = require('fs').promises;

(async () => {
   const list = await readdir('../.');
   console.log(list);
})();