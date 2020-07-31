const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Product.find().populate('users')
            .then((origamies) => res.send(origamies))
            .catch(next);
    },

    post: (req, res, next) => {
        const { description, quantity, price, img, title } = req.body;
        const { _id } = req.user;
 

      
        models.Product.create({ description, quantity, price, img, title, author: _id })
            .then((createdOrigami) => {
                console.log("Yep: ",createdOrigami)
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { purchase: createdOrigami } }),
                    models.Product.findOne({ _id: createdOrigami._id })
                ]);
            })
            .then(([modifiedObj, origamiObj]) => {
                res.send(origamiObj);
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