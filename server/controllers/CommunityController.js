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
        const userID = await User.findOne({username: req.session.user}).then(results => {
                return results;
            }
        ).catch(err => {
             
        console.log(err);
        
        }
        )
         
        const communityId = req.params.id;


        // push the user id into the community users array


        const community = await Community.findById({_id: communityId}).then(results => {
        // push the community id into the user communities array
            userID.communities.push(results._id);
            userID.save();
            results.users.push(userID._id);
            results.save().then(results => {
                res.json({message: `Joined ${results.name}`});
            }).catch(err => {
                 
            })
        }
        ).catch(err => {
             console.log(err);
        }
        )
    },

}


module.exports = CommunityController;