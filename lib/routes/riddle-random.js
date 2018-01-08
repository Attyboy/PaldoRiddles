'use strict';

const Boom = require('boom');

module.exports = {
    method: 'GET',
    path: '/riddle-random',
    options: {
        tags: ['api'],
        handler: async (request) => {

            const { Riddles } = request.models();

            // Count all Riddles
            const count = await Riddles.query().resultSize();

            // The only case that we can't find a riddle is if there aren't any in the DB
            if (count === 0) {
                throw Boom.notFound('Looks like we don\'t have any riddles. Sorry!');
            }

            // Use the total riddle count to determine a random offset
            const randomOffset = Math.floor(Math.random() * count);

            // Grab the Riddle at that random offset
            const randomRiddle = await Riddles.query().offset(randomOffset).first();

            return randomRiddle;
        }
    }
};
