function Pick(name) {
  this.name = name;
}

Pick.prototype.pairs = {
  scissors: { paper: 'cuts', lizard: 'decapitates'},
  paper:    { rock: 'covers', spock: 'disproves'},
  lizard:   { spock: 'poisons', paper: 'eats' },
  rock:     { scissors: 'smashes', lizard: 'crushes' },
  spock:    { rock: 'vaporizes', scissors: 'melts' }
}

Pick.prototype.beats = function(otherPick) {
  var verb = Pick.prototype.pairs[this.name][otherPick.name];

  if(verb !== undefined) {
    return [this.name, verb, otherPick.name].join(' ');
  } else {
    return false;
  }
}

// Player class
function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(playerPick) {
  this.pick = new Pick(playerPick);
  return this.name + " picked " + this.pick.name;
}

Player.prototype.randomPick = function() {
  var choices = Object.keys(Pick.prototype.pairs);
  var rand = choices[Math.floor(choices.length * Math.random())]

  return this.picks(rand);
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.result = function() {
  var p1Wins = this.player1.pick.beats(this.player2.pick);
  var p2Wins = this.player2.pick.beats(this.player1.pick);

  // console.log(p1Wins || p2Wins || 'draw');
  if(p1Wins) { this.winner = this.player1; return p1Wins; }
  if(p2Wins) { this.winner = this.player2; return p2Wins; }
  
  return 'Draw';
}