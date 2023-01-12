const Community = require('../models/Community');
const User = require('../models/User');


const CommunityController = {
    // get all communities in the database
    async GetCommunities(req,res){
        const Commuinties = await Community.find();
        if(Commuinties){
            res.json(Commuinties);
        } else {
            res.json({message: "error"});
        }
    },
    // create a community 
    async CreateCommunity(req,res){

        const user = await User.findOne({username: req.session.user}).then(results => {
                const id = results._id;
                 
                return id;
            }
        ).catch(err => {
             
        
        })

        const community = new Community({
            name: req.body.name,
            description: req.body.description,
            creator: user
        });

        await community.save().then(
            results => {
                 
                res.json({ message: "Community Created"});
            }
        ).catch(err => {
             


        })
    },
    // join a community
    async JoinCommunity(req,res){
        // find the user id
        const user = await User.findOne({username: req.session.user}).then(results => {
                const id = results._id;
                 
                return id;
            }
        ).catch(err => {
             
        
        
        }
        )
         

        // push the user id into the community users array


        const community = await Community.findById({_id: req.params.id}).then(results => {
            results.users.push(user);
            results.save().then(results => {
                res.json({message: `Joined ${results.name}`});
            }).catch(err => {
                 
            })
        }
        ).catch(err => {
             
        }
        )
    },

}


module.exports = CommunityController;