var player = {

   playerName: window.prompt("What is your robot's name?"),
   playerHealth: 100,
   attack:  10,
   playerMoney: 10,

   reset: function(){
     this.playerHealth = 100;
     this.attack = 10;
     this.playerMoney = 10;
   },

   refillHealth: function() {
     this.playerHealth += 50;
     this.Money -= 7;
     window.confirm("You now have " + this.money + " Dollars left." );
   },
   
   upgradeAttack: function(){
     this.attack += 6;
     this.money -= 7;
     window.confirm("You now have " + this.money + " Dollars left." );
   }
}


var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min );
  return value;
}
var enemies = [
  {
    name: "Roberto",
    attack: 12,
  },
  
  {
    name: "Amy Android",
    attack: 13,
  },
  {
    name: "Robo Trumble",
    attack: 14,
  }
]

var cost;
console.log(enemies);
console.log(enemies.length);


var attack = function(attacker){
  return attacker.attack +randomNumber(-3, 3);
  
}

var battle = "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'Skip' to choose."


var fight = function(enemy){
  //Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");
  
  var promptFight = window.prompt(battle);
  

  //if player choses to fight, then fight
  
  if(promptFight === "fight" || promptFight === "FIGHT"){
    console.log(player.playerHealth);
    // remove enemys health by subtracting the enemy health by player attack value
    enemy.health = Math.max(0, enemy.health - attack(player));
    console.log(player.playerName + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
    player.playerHealth = Math.max(0, player.playerHealth - attack(enemy));
    console.log(enemy.name + " attacked " + player.playerName + ". " + player.playerName + " now has " + player.playerHealth + " health remaining.");
    window.alert(player.playerName + " still has " + player.playerHealth + " health left.");
    window.alert(enemy.name + " still has " + enemy.health + " health left.");
    while(player.playerHealth > 0 && enemy.health > 0){
      var continueBattle = window.prompt("Would you like to continue the battle? Enter 'yes or no' to choose" );
            if(continueBattle === "Yes" || continueBattle === "yes"){
              enemy.health = Math.max(0, enemy.health - attack(player));
              console.log(player.playerName + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
              player.playerHealth = Math.max(0 , player.playerHealth - attack(enemy));
                console.log(enemy.name + " attacked " + player.playerName + ". " + player.playerName + " now has " + player.playerHealth + " health remaining.");
                window.alert(player.playerName + " still has " + player.playerHealth + " health left.");
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
                
                if(player.playerHealth <= 0){
                  window.alert(enemy.name + " worked their magic on " + player.playerName + " and " + player.playerName + " suffered a horrible awful yet painful death!");
                  break;
                }
                
                if(enemy.health <= 0) {
                  window.alert(player.playerName + " destroyed " + enemy.name +  " and " + enemy.name + " Screamed his final robot scream and died!");
                  player.playerMoney = player.playerMoney + 10;
                  window.alert(player.playerName + " now has " + player.playerMoney + " dollars.");
                  break;
                } 
                
              }
            } 
          } else if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if(confirmSkip) {
              window.alert(player.playerName + " has chosen to skip the fight!");
              player.playerMoney = player.playerMoney - 10;
      window.alert(player.playerName + " now has " + player.playerMoney + " dollars.");
      console.log("playerMoney" , player.playerMoney);
    } else {
      fight(enemy.name);
    }
  } else {
    window.alert("You need to choose a valid option. Try Again!");
    promptFight;
  } 
  
}

var startGame = function() {
  player.reset();
  for(var i = 0; i < enemies.length; i++){
    var pickedEnemyObj = enemies[i];
    pickedEnemyObj.health = randomNumber(40, 60);
    if (player.playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      
      
      fight(pickedEnemyObj);
      
      if(player.playerHealth > 0 && i < enemies.length -1){
        shop();
         }
      }
          else {
            window.alert("You have lost your robot in battle! Game Over!");
           
          }
        }
      };
    

      
      var endGame = function(){
          window.alert("The game has now ended. Let's see how you did!");
          if(player.playerHealth > 0){
              window.alert("Great job, you've survived the game! You now have a score of " + player.playerMoney);
            } else {
                window.alert("You have lost your robot in battle. He suffered a painful death and will hold it against you in his robot afterlife.");
            }
            var playAgainConfirm = window.confirm("Would you like to play again?");
            if(playAgainConfirm){
                startGame();
            } else{window.alert("Thank you for playing Robot Gladiators! Come back soon! or don't we don't really care.");
        }
      }

    var shop = function() {
        var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
        
        switch (shopOptionPrompt) {
            case "REFILL": // new case
            case "refill":
              if (player.playerMoney >= 7) {
                player.refillHealth();
                window.alert("Refilling player's health by 50 for 7 dollars. Player now has " + player.playerHealth + " Health.");
              }
              else {
                window.alert("You don't have enough money!");
              }
          
              break;
            case "UPGRADE": // new case
            case "upgrade":
              if (player.playerMoney >= 7) {
                player.upgradeAttack();
                window.alert("Upgrading player's attack by 6 for 7 dollars. You now have " + player.attack + " Attack. " );
              }
              else {
                window.alert("You don't have enough money!");
              }
          
              break;
            case "LEAVE": // new case
            case "leave":
              window.alert("Leaving the store.");
              break;
            default:
              window.alert("You did not pick a valid option. Try again.");
              shop();
              break;
          }
          if(player.playerMoney > 7){
            var continueShopping = window.confirm("Would you like to continue shopping?");
            if(continueShopping){
              shop();
            }
          }
                
    }


   



