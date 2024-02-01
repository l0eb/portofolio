const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path');
const dotenv = require('dotenv')
const cors = require('cors')


dotenv.config()
const app = express();
app.use(cors({origin:'*'}))
const port = process.env.PORT ; // Set the port you want to use
// console.log(port)

app.use(bodyParser.json())
const routes = require('./routes/routes')
// // Serve the static files from the 'dist' directory
// app.use(express.static(path.join(__dirname, 'dist')));

// // Handle all routes by serving 'index.html'
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });


app.get('/',(req,res)=>{
  res.send('hi')
})
app.use('/api',routes)


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
