new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
  },
  methods: {
    startNewGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },

    attack: function () {
      if (this.checkPlayerOption()) {
        return;
      }

      //You attack monster
      var damage = this.inputDamage(20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        textlog: "Player hits Monster for " + damage,
      });

      //Monster attack you
      var damage = this.inputDamage(20);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        textlog: "Monster hits Player for " + damage,
      });

      this.checkPlayerOption();
    },

    specialAttack: function () {
      if (this.checkPlayerOption()) {
        return;
      }

      //You attack monster
      var damage = this.inputDamage(40);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        textlog: "Player hits Monster for " + damage,
      });

      //Monster attack you
      var damage = this.inputDamage(20);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        textlog: "Monster hits Player for " + damage,
      });

      this.checkPlayerOption();
    },

    heal: function () {
      if (this.playerHealth <= 70) {
        var damage = this.inputHeal(20);
        this.playerHealth += damage;
        this.turns.unshift({
          isPlayer: true,
          textlog: "Player heals for " + damage,
        });
      } else {
        return alert("Can not Heal!");
      }
    },

    giveUp: function () {
      alert("You Lost!");
      this.gameIsRunning = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },

    inputDamage: function (damageMax) {
      return Math.floor(Math.random() * Math.floor(damageMax));
    },

    inputHeal: function (heal) {
      return Math.floor(Math.random() * Math.floor(heal));
    },

    checkPlayerOption: function () {
      if (this.monsterHealth <= 0) {
        if (confirm("You Won!, New Game?")) {
          this.startNewGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You Lost!, New Game?")) {
          this.startNewGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
  },
});
