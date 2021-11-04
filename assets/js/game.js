var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10
console.log(playerName, playerHealth, playerAttack);

var enemies = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyAttack = 12;
console.log(enemies);
console.log(enemies[0], enemies[1], enemies[2]);
console.log(enemies.length);


var fight = function(enemyName){
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'Skip' to choose.");
    

    //if player choses to fight, then fight

    if(promptFight === "fight" || promptFight === "FIGHT"){
        // remove enemys health by subtracting the enemy health by player attack value
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemies[i] + ". " + enemies[i] + " now has " + enemyHealth + " health remaining.");
        playerHealth = playerHealth - enemyAttack;
        console.log(enemies[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        window.alert(playerName + " still has " + playerHealth + " health left.");
        window.alert(enemies[i] + " still has " + enemyHealth + " health left.");
        while(playerHealth > 0 && enemyHealth > 0){
            var continueBattle = window.prompt("Would you like to continue the battle? Enter 'yes or no' to choose" );
            if(continueBattle === "Yes" || continueBattle === "yes"){
                enemyHealth = enemyHealth - playerAttack;
                console.log(playerName + " attacked " + enemies[i] + ". " + enemies[i] + " now has " + enemyHealth + " health remaining.");
                playerHealth = playerHealth - enemyAttack;
                console.log(enemies[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
                window.alert(playerName + " still has " + playerHealth + " health left.");
                window.alert(enemies[i] + " still has " + enemyHealth + " health left.");

                if(playerHealth <= 0){
                    window.alert(enemies[i] + " worked his magic on " + playerName + " and " + playerName + " suffered a horrible awful yet painful death!");
                    break;
                 }

                 if(enemyHealth <= 0) {
                    window.alert(playerName + " destroyed " + enemyName +  " and " + enemies[i] + " Screamed his final robot scream and died!");
                    playerMoney = playerMoney + 10;
                    window.alert(playerName + " now has " + playerMoney + " dollars.");
            } else{
                break;
            }
        
    }
    
    }

    

    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if(confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight!");
            playerMoney = playerMoney - 2;
            window.alert(playerName + " now has " + playerMoney + " dollars.");
            console.log("playerMoney", playerMoney);
        } else {
            fight(enemies[i]);
        }
    } else {
        window.alert("You need to choose a valid option. Try Again!");
    }

}

for(var i = 0; i < enemies.length; i++){
   var pickedEnemyName = enemies[i];
   ememyHealth = 50;
    fight(enemies[i]);
}


