const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Client.find()
            .then((origamies) => res.send(origamies))
            .catch(next);
    },

    post: (req, res, next) => {
        const { client } = req.body;    //const { _id } = req.user;
        models.Client.create({ client})
            .then((client) => {
      console.log('Inside', client)
        
               
           
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