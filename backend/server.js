const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

require('dotenv').config();
const app = express();

const router = require('./components/router.component');

const {
    ATLAS_URI,
    PORT = 5000
} = process.env;

app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", router)

mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`\nhttp://localhost:${PORT}`)))
    .catch((e) => console.log(e.message));
