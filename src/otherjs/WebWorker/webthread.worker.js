var Rondomindex;
function numRes(){
  Rondomindex = Math.floor(Math.random()*3);
  postMessage(Rondomindex);
  setTimeout("numRes()",500);
}
numRes();
