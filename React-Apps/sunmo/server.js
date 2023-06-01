const e = require('express');

const app = e();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Listening on port ' + port));

app.get('/intro', (req, res) => {
  console.log('hit / endpt');
  res.status(200).send({
    
  });
  return;
});


