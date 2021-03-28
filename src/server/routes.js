/* @flow */
import fs from 'fs';
import path from 'path';
import type { express } from 'express';
import { tossr } from 'tossr';
import bodyParser from 'body-parser';

const cors = require('cors');

module.exports = (app: express) => {

    app.use(bodyParser.urlencoded({ extended: true }))

    app.use('/spa', (req, res) => {
      res.sendFile(path.resolve('./src/pages/__app.html'))
    })

    app.use('/ssr', (req, res) => {
        tossr(path.resolve('./src/pages/__app.html'), path.resolve('./dist/main.js'), req.url).then(html => {
            console.log(html)
            res.send(html)
        })
    })

    return app;
};
