s1 = 1;
killswitch = 0;
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
};
s2 = async function(amount, time){
  while(s1 = 1){
    if(killswitch == 1){
      break;
    };
    await sleep(time);
    Game.cookies = Game.cookies+amount
  }
};
wipe = async function(){
  Game.Reset()
}
