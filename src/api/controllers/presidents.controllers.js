const Presidents = require ("../models/presidents.models")

const getAllPresidents = async (req,res)=> {
    try {
        const allPresidents = await Presidents.find();
        return res.status(200).json(allPresidents);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getPresident = async (req,res)=> {
    try {
        const {id} = req.params
        const allPresidents = await Presidents.findById(id);
        return res.status(200).json(allPresidents);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getThePresident = async (req,res)=> {
    try {
        const {number} = req.params
        const allPresidents = await Presidents.find({number});
        return res.status(200).json(allPresidents)
    } catch (error) {
        return res.status(500).json(error)
    }
};
// const getThePresident = async (req,res)=> {
//     try {
//         const {number} = req.query
//         const filters = {} 
//         if (number){
//         filters.number = number
//         }
//         const allPresidents = await Presidents.find(filters).select ("name number portrait party election")
//         res.json(allPresidents)
//     } catch (error) {
//         return res.status(500).json(error)
//     }
// };


const getTheParty = async (req,res)=> {
    try {
        const {party} = req.params
        const allPresidents = await Presidents.find({party});
        return res.status(200).json(allPresidents)
    } catch (error) {
        return res.status(500).json(error)
    }
};


const postNewPresidents = async (req,res)=> {
    try{
        const {name, number, party, portrait, election} = req.body
        const newPresidents = new Presidents({name, number, party, portrait, election});
        const createdPresident = await newPresidents.save();
        return res.status(201).json(createdPresident);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const putPresidents = async (req,res)=> {
    try{
    const{id} = req.params;
    const putPresidents = new Presidents(req.body);
    putPresidents._id = id;

    const presidentsDb = await Presidents.findByIdAndUpdate(id, putPresidents, {new: true});
    if(presidentsDb){
        return res.status(404).json({"message": "President not found"});
    }
    return res.status(200).json(presidentsDb);
} catch (error){
    return res.status(500).json(error)
}
};

const deletePresidents = async (req,res)=> {
    try{
        const{id} = req.params;
        const presidentsDb = await Presidents.findByIdAndDelete(id);
        if(!presidentsDb){
            return res.status(404).json({"message": "President not found"});
        }
        return res.status(200).json(presidentsDb);
    } catch (error){
        return res.status(500).json(error)
    }
    };

module.exports = {getAllPresidents, getPresident, getTheParty, getThePresident, postNewPresidents, putPresidents, deletePresidents};