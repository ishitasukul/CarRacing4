class Form2{
    constructor(){
        this.leaderboard=createElement('h2'); 
    }

display(prank){
    this.leaderboard.html("Player, player.index+ : + prank");
    this.leaderboard.position(displayWidth/2-70,200);


}
}