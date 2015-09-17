var request = require('request')
var raffle = require('./raffle')

module.exports = function (settings, render) {
  var url = 'http://api.meetup.com/2/rsvps?key=' + settings.key + '&sign=true&event_id=' + settings.event_id 
  request(url, function(err, response, body) {
    if(err) {throw err}
    raffle(JSON.parse(body), render)
  })
}

