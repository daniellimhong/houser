 
 module.exports = {

     getAllHouses: (req, res) => {
         const db = req.app.get('db');

         db.get_all_houses().then(houses => {
             res.status(200).send(houses)
         }).catch(err => console.log('Error with getting houses'))
     },

     postHouse: (req, res) => {
         const db = req.app.get('db');
        const { name, address, city, state, zip, img } = req.body;

         db.post_house([name, address, city, state, zip, img]).then(houses => {
             res.status(200).send(houses)
         }).catch(err => console.log('Error with posting house'))
     },

     deleteHouse: (req, res) => {
         const db = req.app.get('db');
         const { id } = req.params;

         db.delete_house(id).then(houses => {
             res.status(200).send(houses)
         }).catch(err => console.log('Error with deleting house'))
     }
 }