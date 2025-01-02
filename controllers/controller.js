const path = require('path');
const express = require('express');
const Todo = require('../db/models');
const mongoose = require('mongoose');

module.exports.posttasks = async (req, res) => {    
    const { name, description } = req.body;
    console.log(name, description);
    if (!name || !description) return res.status(400).json({
        msg: "Please provide name/description both"
    });

    try {
        await Todo.create({ name, description });
        res.status(200).json({
            msg: "Todo insert success"
        })
    } catch (error) {
        res.status(500).json({
            msg: "Internal server error",
            error: error.message
        })
     }
}

module.exports.gettasks = async (req, res) => {
     try {
            let todos = await Todo.find({});
            res.status(200).json({
                todos
            })
        } catch (error) {
            res.status(500).json({
                msg: "Internal server error",
                error: error.message
            })
    }
}

module.exports.gettaskswithid= async (req, res) => {
    const id = req.params.id;
    try {
        let todo = await Todo.findOne({ _id: id});
        res.status(200).json({
            todo
        })
    }
    catch (error){
        res.status(500).json({
            msg: "Internal server error",
            error: error.message
        })
    }
}

module.exports.puttaskstatusbyid = async (req, res) => {
    const id = req.params.id;
    const status = req.body.status;
    try {
        let todo = await Todo.findOne({ _id: id });
        todo.status = status;
        await todo.save();
        res.status(200).json({
            msg: "Status update success"
        })
    }
    catch (error){
        res.status(500).json({
            msg: "Internal server error",
            error: error.message
        })
    }
}

module.exports.deletetaskbyid = async (req, res) => {
    const id = req.params.id;
    try {
        await Todo.deleteOne({ _id: id });
        res.status(200).json({
            msg: "Task delete success"
        })
    }
    catch (error){
        res.status(500).json({
            msg: "Internal server error",
            error: error.message
        })
    }
}