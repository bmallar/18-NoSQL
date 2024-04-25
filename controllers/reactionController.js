const { reactionSchema } = require('../models');

const reactionController = {
    async createReaction(req, res) {
        try {
          const dbReactionData = await reactionSchema.create(req.body);
          res.json(dbReactionData);
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },

      async deleteReaction(req, res) {
        try {
          const dbReactionData = await reactionSchema.findOneAndDelete({ _id: req.params.reactionId })
    
        
         
          res.json({ message: 'Reaction deleted!' });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      }

}

module.exports = reactionController