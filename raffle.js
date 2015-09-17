var repliedYes = function (person) {
  return person.response === "yes"
}

module.exports = function (response, callback) {
  var yesPeeps = response.results.filter(repliedYes)
  var amountOfPlayers = yesPeeps.length
  var drawn = Math.round(Math.random() * amountOfPlayers)

  return callback(yesPeeps[drawn])
}
