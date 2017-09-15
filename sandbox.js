let discourse = require('./services/discourse')
let R = require('ramda')
let sniff = require('supersniff')

let x = discourse.getActionsByUsername('mpj', 0, '2')

.then(x => x.user_actions.map(R.pick(['action_type', 'slug', 'excerpt'])))
.then(sniff)
x