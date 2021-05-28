s1 = 1; //Needed this variable to keep the loops running please ignore
killswitch = 0; //Defines killswitch variable
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}; // I didnt write this part lol I just know it adds a sleep function
s2 = async function(amount, time){ //Creates the s2 function for adding cookies at a set interval
  while(s1 = 1){ //keeps this constantly running
    if(killswitch == 1){
      break; //Checks if the killswitch has been activated and if it has it kills the script
    };
    await sleep(time); // Pauses the script for the amount of time specified in the "time" variable in the s2 function before adding more cookies
    Game.cookies = Game.cookies+amount // Adds the specified amount of cookies to the total amount of cookies
  }
};
wipe = async function(){
  Game.Reset() // Uses the built in reset function cause I'm lazy
} // Clears all save data except name
