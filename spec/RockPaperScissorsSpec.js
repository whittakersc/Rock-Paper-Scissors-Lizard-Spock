describe("Rock-Paper-Scissors", function() {

  beforeEach(function() {

    player1 = new Player();
    player2 = new Player();
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.result()).toBe('rock smashes scissors');

      });

      it('should beat lizard', function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.result()).toBe('rock crushes lizard');
      });

      it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.result()).toBe('paper covers rock');

      });

    });

    describe('paper', function() {

      it('should beat rock', function() {

        player1.picks('paper');
        player2.picks('rock');
        expect(game.result()).toBe('paper covers rock');

      });

      it('should beat spock', function() {

        player1.picks('paper');
        player2.picks('spock');
        expect(game.result()).toBe('paper disproves spock');
      });

      it('should lose to scissors', function() {

        player1.picks('paper');
        player2.picks('scissors');
        expect(game.result()).toBe('scissors cuts paper');

      });

    });

    describe('scissors', function() {

      it('should beat paper', function() {

        player1.picks('scissors');
        player2.picks('paper');
        expect(game.result()).toBe('scissors cuts paper');

      });

      it('should beat lizard', function() {

        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.result()).toBe('scissors decapitates lizard');

      });

      it('should lose to rock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        expect(game.result()).toBe('rock smashes scissors');

      });

    });

    describe('spock', function() {

    it('should beat rock', function() {

        player1.picks('spock');
        player2.picks('rock');
        expect(game.result()).toEqual('spock vaporizes rock');

    });

    it('should beat scissors', function() {

      player1.picks('spock');
      player2.picks('scissors');
      expect(game.result()).toBe('spock melts scissors');
    });

  });

  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.result();
        });

        expect(drawGameResults).toEqual(['Draw', 'Draw', 'Draw']);

      });

    });

  });

});