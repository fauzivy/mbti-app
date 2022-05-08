const db = require("../models");
const Mbti = db.mbti;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name){
        res.status(400).send({
            message: 'empty content',
        });
        return;
    }

    const mbti = {
        name: req.body.name,
        desc: req.body.desc,
    };

    Mbti.create(mbti)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message:
            err.message,
        });
    });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${title}%`}} : null;
    Mbti.findAll({ where: condition })
    .then((data) => { res.send(data)})
    .catch((err) => { res.status(500).send( { message: err.message, });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Mbti.findByPk(id)
    .then((data) => { if(data) {
        res.send(data);
    } else {
        res.status(404).send({
            message: `No mbti with ${id}`,
        });
    }})
    .catch((err) => { res.status(500).send( { message: err.message, });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Mbti.update(req.body, {
        where: {id: id},
    })
    .then((num) => {
        if (num == 1) {
            res.send({ message: "changed",});
        }else {
            res.send({message: `can't change ${id}`});
        }
    })
    .catch((err) => {
        res.status(500).send({
            message: "fault",
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Mbti.destroy({
        where: {id: id},
    })
    .then((num) => {
        if (num == 1) {
            res.send({ message: "deleted",});
        }else {
            res.send({message: `cant delete ${id}`});
        }
    })
    .catch((err) => {
        res.status(500).send({
            message:err.message,
        });
    });
};

exports.deleteAll = (req, res) => {
    Mbti.destroy({
        where: {},
        truncate: false,
        
    })
    .then((nums) => {
        res.send({message: `deleted ${nums}`});
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message,
        });
    });
};