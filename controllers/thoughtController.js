const { Thought } = require('../models');

const thoughtController = {
    async getThoughts(req, res) {
        try {
            const dbThoughtData =  await Thought.find()

            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    async getSingleThought(req, res) {
        try {
            const dbThoughtData = await User.findOne({ _id: req.params.thoughtId})
            .populate('')

            res.json(dbThoughtData)
        } catch(err) {

        }
    },
}


module.exports = thoughtController; 
    
