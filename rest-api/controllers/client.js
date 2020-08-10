const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Client.find().populate('users').populate('products')
            .then((client) =>{
                console.log("In=>",client)
                res.send(client)
            } )
            .catch(next);
    },

    post: (req, res, next) => {
        const { client, username, email, time } = req.body;    //const { _id } = req.user;
console.log(req.body)
        models.Client.create({ client, username, email, time})
            .then((client) => {
      console.log('Inside', client, username, email, time)
        
               
           
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Product.updateOne({ _id: id }, { description })
            .then((updatedOrigami) => res.send(updatedOrigami))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Product.deleteOne({ _id: id })
            .then((removedOrigami) => res.send(removedOrigami))
            .catch(next)
    }
};