const express = require('express');
const contactme = require("../Controller/ContsctmeController")
const routers = express.Router();

routers.post('/products', contactme.CreateNew);

module.exports = routers;