var img;
var canv;
var m;
var m2;
var m3;
var m4;
var m5;
var m6;
var h;
var w;
function uplo(){
  canv = document.getElementById("c");
  img = document.getElementById("im");
  m = new SimpleImage(img);
  m2 = new SimpleImage(img);
  m3 = new SimpleImage(img);
  m4 = new SimpleImage(img);
  m5 = new SimpleImage(img);
  m6 = new SimpleImage(img);
  m.drawTo(canv);
}
function redd(){
  for(var pix of m2.pixels()){
    pix.setRed(255);
  }
  m2.drawTo(canv);
}
function rainb()
{
  h = m3.getHeight();
  w = m3.getWidth();
  var r = h/7;
  var r2 = 2*r;
  var r3 = 3*r;
  var r4 = 4*r;
  var r5 = 5*r;
  var r6 = 6*r;
  var r7 = 7*r;
  var dd = document.getElementById("d");
  dd.innerHTML = h + "   BY   " + w;
  for(var pik of m3.pixels())
  {
   if(pik.getY()< r){
    pik.setRed(250);
   }
   else if(pik.getY()< r2)
   {
    pik.setRed(255);
    pik.setGreen(165);
   }
    else if(pik.getY()< r3)
   {
    pik.setRed(255);
    pik.setGreen(255);
   }
    else if(pik.getY()< r4)
    {
      pik.setGreen(255);
    }
   else if(pik.getY()< r5)  {
     pik.setBlue(255);
   }
    else if(pik.getY()< r6)
    { 
      pik.setRed(75);
      pik.setBlue(130);
    }
    else if(pik.getY()< r7)
    {
      pik.setRed(238);
      pik.setGreen(130);
      pik.setBlue(238);
    }
  } m3.drawTo(canv);  
  
}
function mg(){
for(var pix of m4.pixels()){
    var avg = (pix.getRed() + pix.getBlue() + pix.getGreen())/3;
    pix.setRed(avg);
    pix.setBlue(avg);
    pix.setGreen(avg);
  }
  m4.drawTo(canv);
}
function mag(){
  var t = m5.getWidth()/2;
  var t2 = m5.getHeight()/4;
  for(var po of m5.pixels())
  {
   
    if(po.getX()<po.getY()){
      po.setBlue(100);
      po.setRed(100);
      po.setGreen(100);
    }
    if(po.getX()<t)
    {
      po.setRed(17);
      po.setGreen(215);
      po.setBlue(237);
    }
     if(po.getY()<t2)
    {
      po.setRed(232);
      po.setGreen(146);
      po.setBlue(216);
    }
  }
  m5.drawTo(canv);
}
function bl()
{
  var ib = new SimpleImage(m6.getWidth(),m6.getHeight());
  var X=null;
  var Y=null;
  for(var p of ib.pixels())
  {
   var t = Math.random();
    X=p.getX();
    Y=p.getY();
    if(t>0.5)
    {
      ib.setPixel(X,Y,m6.getPixel(X,Y));
    } 
    
  }
  ib.drawTo(canv);
}
function ress()
{
  m.drawTo(canv);
}