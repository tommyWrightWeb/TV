if (process.env.NODE_ENV !== 'production') {
   require('dotenv').config();
}



const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

console.log(stripeSecretKey, stripePublicKey)

const express = require('express')

const fs = require('fs')

const app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())

app.get('/tvSearch', function (req, res) {

   res.render('tvSearch.html')

})


app.listen(3000);