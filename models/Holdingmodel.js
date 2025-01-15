const {model} = require("mongoose");


const {Holdingschema} = require("../schemas/Holdingschema");


const Holdingmodel = new model("holding",Holdingschema);

module.exports = {Holdingmodel};