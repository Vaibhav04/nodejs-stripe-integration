const { STRIPE_PUBLIC_KEY, STRIPE_SECRET_KEY } = require('../config');
const stripe = require('stripe')(STRIPE_SECRET_KEY);
const getHomePage = (req, res) => {
     res.render('index', { STRIPE_PUBLIC_KEY });
};

const purchase = async (req, res) => {
     try {
          const response = await stripe.charges.create({
               amount: req.body.price,
               source: req.body.id,
               currency: 'USD',
               description: 'Testing stripe with nodejs',
               shipping: {
                    name: 'Jenny Rosen',
                    address: {
                         line1: '510 Townsend St',
                         postal_code: '98140',
                         city: 'San Francisco',
                         state: 'CA',
                         country: 'US',
                    },
               },
          });
          res.json(200, {
               success: true,
               message: 'Succesfully purchased the items',
          });
     } catch (error) {
          res.json(500, { success: false, message: 'Some error ocurred' });
     }
};

module.exports = {
     getHomePage,
     purchase
};
