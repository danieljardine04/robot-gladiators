var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'Skip' to choose.");

    //if player choses to fight, then fight

    if(promptFight === "fight" || promptFight === "FIGHT"){
        // remove enemys health by subtracting the enemy health by player attack value
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        
        if(enemyHealth <= 0) {
            window.alert(playerName + " destroyed " + enemyName +  " and " + enemyName + " Screamed his final robot scream and died!");
            playerMoney + 10;
            window.alert(playerName + " now has " + playerMoney + " dollars.");
        }
        else {
           window.alert(enemyName + " still has " + enemyHealth + " health left.");
       }

       playerHealth = playerHealth - enemyAttack;
       console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

       if(playerHealth <= 0){
           window.alert(enemyName + " worked his magic on " + playerName + " and " + playerName + " suffered a horrible awful yet painful death!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth  + " Health remaining.");
       }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if(confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight!");
            playerMoney = playerMoney - 2;
            window.alert(playerName + " now has " + playerMoney + " dollars.");
        } else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try Again!");
    }

    

    // Log a resulting message to the console so we know that it worked.


    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the 'playerHealth' variable



    // Log a resulting message to the console so we know that it worked. 

}

fight();