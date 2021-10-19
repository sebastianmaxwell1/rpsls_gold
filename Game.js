

const choices = [
    'Rock',
    'Paper',
    'Scissors'
];

const rules = {
    'Rock': ['Scissors'],
    'Paper': ['Rock'],
    'Scissors' : ['Paper']
};

const rpsls = [
    'Rock',
    'Paper',
    'Scissors',
    'Lizard',
    'Spock'
];

const rulesRPSLS = {
    'Rock': ['Scissors', 'Lizard'],
    'Paper': ['Rock', 'Spock'],
    'Scissors': ['Paper', 'Lizard'],
    'Lizard': ['Spock', 'Rock']
};

module.exports.choices = choices;
module.exports.rules = rules;
module.exports.rpsls = rpslsl;
module.exports.rulesRPSLS = rulesRPSLS;