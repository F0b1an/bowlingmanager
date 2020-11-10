//The game starts here (duhh :/)
console.log('Starting game...');
//Teams & score
var teams = [["Henk", "Matt", "Jan", "Peet"],["Nick", "Gerry", "Peter", "Hendrick"]];
var scoreTeams = [[0, 0, 0, 0],[0, 0, 0, 0]];

//function names explain themselves
function FirstThrow() {
    firstThrow = Math.floor(Math.random() * 11);
    return firstThrow;
}
function SecondThrow(){
    secondThrow = Math.floor((Math.random() * (11 - firstThrow)));
    return secondThrow;
}

function winner(){
    var highestInTeam1 = Math.max(...scoreTeams[0]);
    var highestInTeam2 = Math.max(...scoreTeams[1]);
    var mvpTeam1 = scoreTeams[0].indexOf(Math.max(...scoreTeams[0]));
    var mvpTeam2 = scoreTeams[1].indexOf(Math.max(...scoreTeams[1]));

    if (scoreTeams[0] > scoreTeams[1]) {
        alert("Team 1 wins the match!");
        console.log("\n Team 1 wins the match!");
    } else {
        alert("Team 2 wins the match!");
        console.log("\n Team 2 wins the match!");
    }
    if (highestInTeam1 > highestInTeam2) {
        console.log("the MVP is " + teams[0][mvpTeam1] + " from team 1 with " + highestInTeam1 + " points");
    } else if (highestInTeam1 == highestInTeam2) {
        console.log("the MVPs are " + teams[0][mvpTeam1] + "and " + teams[1][mvpTeam2] + " both with " + highestInTeam1 + " points");
    } else {
        console.log("the MVP is " + teams[1][mvpTeam2] + " from team 2 with " + highestInTeam2 + " points!")
    }
}

//the rounds
for (var rounds = 1; rounds < 11; rounds++) {
    console.log("\n Round: " + rounds);
    var firstThrow = 0;
    var secondThrow = 0;
    // the turn of team 1
    for (var i = 0; i < teams[0].length; i++) {
        console.log("\n it is " + teams[0][i] + "'s turn:");
        FirstThrow();
        if (firstThrow == 10) {
            console.log(teams[0][i] + " threw a strike!");
        } else {
            console.log(teams[0][i] + " threw " + firstThrow + " on his first throw");
            SecondThrow();
       			if (secondThrow == 10) {
            		console.log(teams[1][i] + " threw a strike on his second throw!");
       		} else {
            		console.log(teams[0][i] + " threw " + secondThrow + " on his second throw");
       		}
        }
        scoreTeams[0][i] = scoreTeams[0][i] + firstThrow + secondThrow;
        console.log(teams[0][i] + " threw a total of: " + (firstThrow + secondThrow));
       
        firstThrow = 0;
        secondThrow = 0;
    } // the turn of team 2
    for (var i = 0; i < teams[1].length; i++) {
        console.log("\n it is " + teams[1][i] + "'s turn.");
        FirstThrow();
        if (firstThrow == 10) {
            console.log(teams[1][i] + " threw a strike!");
        } else {
            console.log(teams[1][i] + " threw " + firstThrow + " on his first throw");
            SecondThrow();
        	if (secondThrow == 10) {
            	console.log(teams[1][i] + " threw a strike on his second throw!");
        	} else {
            	console.log(teams[1][i] + " threw " + secondThrow + " on his second throw");
        	}
        }
        scoreTeams[1][i] = scoreTeams[1][i] + firstThrow + secondThrow;
        console.log(teams[1][i] + " threw a total of: " + (firstThrow + secondThrow));
       
        firstThrow = 0;
        secondThrow = 0;
    }
}
console.log(" ");
//the score of the players will be displayed by the code below
for (var i = 0; i < teams[0].length; i++) {
    console.log(teams[0][i] + " scored: " + scoreTeams[0][i]);
}        

for (var i = 0; i < teams[0].length; i++) {
    console.log(teams[1][i] + " scored: " + scoreTeams[1][i]);
}
// the functions that declare the winner and the mvp(s) are called here
winner();