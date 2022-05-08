import ResultModel from "../models/ResultModel.js";

export const getAllResults = async(req, res) => {
    try {
        const results = await ResultModel.findAll();
        res.json(results);
    } catch(error){
        res.json({message: error.message});
    }
};

export const getResultById = async(req, res) => {
    try{
        const result = await ResultModel.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.json(result[0]);
    } catch(error){
        res.json({message: error.message});
    }
};

export const createResult = async(req, res) => {
    try{
        await ResultModel.create(req.body);
        res.json({message: "Result is added."});
    } catch(error){
        res.json({message: error.message});
    }
};

export const updateResult = async(req, res) => {
    try{
        await ResultModel.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json({message: "Result is added."});
    } catch(error){
        res.json({message: error.message});
    }
};

export const deleteResult = async(req, res) => {
    try{
        await ResultModel.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({message: "Result is deleted."});
    } catch(error){
        res.json({message: error.message});
    }
};

export const findLast = async(req, res) => {
    try{
        const result = await ResultModel.findOne({
            limit: 1,
            order: [[ 'createdAt', 'DESC' ]],
        });
        res.json(result['dataValues']);
    } catch(error){
        res.json({message: error.message});
    }
};