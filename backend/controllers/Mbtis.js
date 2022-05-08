import MbtiModel from "../models/MbtiModel.js";

export const getAllMbtis = async(req, res) => {
    try {
        const mbtis = await MbtiModel.findAll();
        res.json(mbtis);
    } catch(error){
        res.json({message: error.message});
    }
};

export const getMbtiById = async(req, res) => {
    try{
        const mbti = await MbtiModel.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.json(mbti[0]);
    } catch(error){
        res.json({message: error.message});
    }
};

export const createMbti = async(req, res) => {
    try{
        await MbtiModel.create(req.body);
        res.json({message: "Mbti is added."});
    } catch(error){
        res.json({message: error.message});
    }
};

export const updateMbti = async(req, res) => {
    try{
        await MbtiModel.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json({message: "Mbti is added."});
    } catch(error){
        res.json({message: error.message});
    }
};

export const deleteMbti = async(req, res) => {
    try{
        await MbtiModel.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({message: "Mbti is deleted."});
    } catch(error){
        res.json({message: error.message});
    }
};