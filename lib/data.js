'use strict';

exports.getRiddle = (slug) => {
    const bySlug = (riddle) => riddle.slug === slug;
    return exports. riddles.find(bySlug);
};

exports.riddles = [
    {
        slug: 'no-body',
        question: 'I have a head & no body, but I do have a tail. What am I?',
        answer: 'A coin'
    }
];
