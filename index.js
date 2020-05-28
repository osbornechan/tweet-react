const express = require('express');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

process.env.PORT = process.env.PORT || 3000;

const app = express();

/*
 * =======================================================================
 * ================ REACT config                     =====================
 * =======================================================================
 */

app.use('/', express.static('public'));

/*
 * =======================================================================
 * ============== normal express routes go here   ========================
 * =======================================================================
 */

app.get('/banana', (request, response)=>{
  response.send("ehllo");
});

/*
 * =======================================================================
 * ==============   react express route           ========================
 * =======================================================================
 */

app.get('/react', (req, res) => {
  const myHtml = `
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      </head>
      <body>
        <div id="app"></div>
        <script type="text/javascript" src="/main.js"></script>
      </body>
    </html>
  `;
  res.send( myHtml );
});

/*
 * =======================================================================
 * ============                     LISTEN                   =============
 * =======================================================================
 */

app.listen(process.env.PORT, () => {
  console.log(`ssssserver is now running on http://localhost:${process.env.PORT}`);
});