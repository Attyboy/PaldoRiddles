'use strict';

// Boom builds Error objects for hapi that represent HTTP errors
const Boom = require('boom');
const Data = require('../data');

module.exports = {
    method: 'GET',
    path: '/riddle-answer/{slug}',
    options: {
        handler: (request) => {

            const { slug } = request.params;
            const riddle = Data.getRiddle(slug);

            // array.find() returns undefined when unsuccessful
            // In that case, we give the client an HTTP 404 error

            if (!riddle) {
                throw Boom.notFound('Sorry, that riddle doesn\'t exist (yet)');
            }

            return riddle.answer;
        }
    }
};
