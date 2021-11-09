var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10
console.log(playerName, playerHealth, playerAttack);
console.log(Math);

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min );
  return value;
}

var enemies = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
var cost;
console.log(enemies);
console.log(enemies[0], enemies[1], enemies[2]);
console.log(enemies.length);
var damage = randomNumber(playerAttack - 3, playerAttack +3);
var enemyDamage = randomNumber(enemyAttack - 3, enemyAttack + 3);

var battle = "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'Skip' to choose."


var fight = function(enemyName){
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    
    var promptFight = window.prompt(battle);
    

    //if player choses to fight, then fight

    if(promptFight === "fight" || promptFight === "FIGHT"){
        // remove enemys health by subtracting the enemy health by player attack value
        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        playerHealth = Math.max(0, playerHealth - enemyDamage);
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        window.alert(playerName + " still has " + playerHealth + " health left.");
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        while(playerHealth > 0 && enemyHealth > 0){
            var continueBattle = window.prompt("Would you like to continue the battle? Enter 'yes or no' to choose" );
            if(continueBattle === "Yes" || continueBattle === "yes"){
                enemyHealth = Math.max(0, enemyHealth - damage);
                console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
                playerHealth = Math.max(0 , playerHealth - enemyDamage);
                console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
                window.alert(playerName + " still has " + playerHealth + " health left.");
                window.alert(enemyName + " still has " + enemyHealth + " health left.");

                if(playerHealth <= 0){
                    window.alert(enemyName + " worked their magic on " + playerName + " and " + playerName + " suffered a horrible awful yet painful death!");
                    break;
                 }

                 if(enemyHealth <= 0) {
                    window.alert(playerName + " destroyed " + enemyName +  " and " + enemyName + " Screamed his final robot scream and died!");
                    playerMoney = playerMoney + 10;
                    window.alert(playerName + " now has " + playerMoney + " dollars.");
                    break;
            } 
            
        }
    } 
} else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if(confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight!");
        playerMoney = playerMoney - 10;
        window.alert(playerName + " now has " + playerMoney + " dollars.");
        console.log("playerMoney" , playerMoney);
    } else {
        fight(enemyName);
    }
} else {
    window.alert("You need to choose a valid option. Try Again!");
    promptFight;
} 
    
}

var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
for(var i = 0; i < enemies.length; i++){
          if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      
            var pickedEnemyName = enemies[i];
            enemyHealth = randomNumber(40, 60);
      
            fight(pickedEnemyName);

            if(playerHealth > 0 && i < enemies.length -1){
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
          if(playerHealth > 0){
              window.alert("Great job, you've survived the game! You now have a score of " + playerMoney);
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
        var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        );
        
        switch (shopOptionPrompt) {
            case "REFILL": // new case
            case "refill":
              if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
          
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
              }
              else {
                window.alert("You don't have enough money!");
              }
          
              break;
            case "UPGRADE": // new case
            case "upgrade":
              if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
          
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
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
                
    }


    startGame();

endGame();


