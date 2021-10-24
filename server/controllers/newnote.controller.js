const Newnote = require("../models/newnote.model");
const bcrypt = require("bcrypt");

//New note create
exports.create = (req, res, next) => {
    if (!req.body) {
        res.status(400).json({
            message: "Content Canot be Empty...!"
        });
    };

    const newnote = new Newnote({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        delete_status: req.body.delete_status
    });

    Newnote.create(newnote, (err, data) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        }
        else {
            res.status(201).json({
                Created: data
            });
        };
    });
};

exports.updateNewNote = (req, res, next) => {
    if (!req.body) {
        res.status(400).json({
            message: "Content Can Not be empty..."
        });
    };
    const update = {
        "id": req.body.id,
        "title": req.body.title,
        "description": req.body.description
    };

    Newnote.updateNewNote(update, (err, data) => {
        if (err)
            res.status(500).json({
                message: err.message
            });
        else res.status(201).json({
            Data: data
        });
    });
};

