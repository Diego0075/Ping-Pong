/*/function createRect() {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.querySelector("svg");
  const rec = document.createElementNS(svgNS ,'rect');
    rec.setAttribute('width', 100);
    rec.setAttribute('height', 100);
    rec.setAttribute('x', 50);
    rec.setAttribute('y', 50);
    rec.setAttribute('fill', 'red');
    
   svg.appendChild(rec);
  }
  
  window.onload = createRect;


function jugador1() {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.querySelector("svg");
  const rec = document.createElementNS(svgNS ,'rect');
    rec.setAttribute('width', 15);
    rec.setAttribute('height', 115);
    rec.setAttribute('x', 15);
    rec.setAttribute('y', 350);
    rec.setAttribute('fill', 'White');
   svg.appendChild(rec);
  }


  function pelota(){
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.querySelector("svg");
  const circle = document.createElementNS(svgNS ,'circle');
    circle.cx.baseVal.value = 60;
    circle.cy.baseVal.value = 120;
    circle.r.baseVal.value = 30;
    circle.style.fill = "White";
    svg.appendChild(circle);
}

window.onload=() => {
  let svg=document.getElementById("tablero");
  jugador1,pelota;

}
*/



  /*class jugador1{
  constructor(ancho,alto,posx,posy){

    this.ancho=ancho;
    this.alto=alto;
    this.posx=posx;
    this.posy=posy;
    this.rect=document.createElementNS("http://www.w3.org/2000/svg","rect");
    this.rect.setAttributeNS(null,"width",this.ancho);
    this.rect.setAttributeNS(null,"height",this.alto);
    this.rect.setAttributeNS(null,"x",this.posx);
    this.rect.setAttributeNS(null,"y",this.posy);
    this.rect.setAttributeNS(null,"style","fill:White");

}   
  }
*/

  class Pelota{
    constructor(posx,posy,radio,velx,vely,contenedor){
        this.posx=posx;
        this.posy=posy;
        this.radio=radio;
        this.velx=velx;
        this.vely=vely;

        this.circle=document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circle.setAttributeNS(null,"cx",this.posx);
        this.circle.setAttributeNS(null,"cy",this.posy);
        this.circle.setAttributeNS(null,"r",this.radio);
        this.circle.setAttributeNS(null,"fill","White");
        contenedor.appendChild(this.circle);
    }
    moverPelota(){
      this.posx = this.posx+this.velx;
      this.circle.setAttributeNS(null,"cx", this.posx);
  
      this.posy = this.posy+this.vely;
      this.circle.setAttributeNS(null,"cy", this.posy);

      //Detectar colisiones
      let svg = document.getElementById("svg");
      let tamanoSVG = svg.getBoundingClientRect();
      if (this.posx <=0 || this.posx>=tamanoSVG.width)
        this.velx *= -1;

      if (this.posy <=0 || this.posy>=tamanoSVG.height)
        this.vely *= -1;
    
       

        // if(this.posx >=barraizq.posx.animVal.value-this.radio && this.posx <=barraizq.posx.animVal.value+barraizq.width.animVal.value && this.posy+this.radio>=barraizq.posy.animVal.value && this.posy-this.radio<=(barraizq.posy.animVal.value+barraizq.height.animVal.value)){
          // this.velx *= -1;
          // if(this.velx>=-20){
              // this.velx  -=2;
          // }
        }
      
    




  };

  class barraizq{
    constructor(nombre,posx,posy,ancho,alto,contenedor){
      this.nombre=nombre;
      this.posx=posx;
      this.posy=posy
      this.ancho=ancho;
      this.alto=alto;

      this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      this.rect.setAttributeNS(null, "x", this.posx);
      this.rect.setAttributeNS(null, "y", this.posy);
      this.rect.setAttributeNS(null, "width", this.ancho);
      this.rect.setAttributeNS(null, "height", this.alto);
      this.rect.setAttributeNS(null, "fill", "White");
      contenedor.appendChild(this.rect);
    }

    moverup(){
      if(this.posy>0){
      this.posy-=5;
      console.log(this.posy);
      }
    }

    moverdown(){
      if(this.posy<425){
      this.posy+=5;
      console.log(this.posy);
      }
      
    }

    pintar(){
      this.rect.setAttributeNS(null, "y", this.posy);
    }

    moverBarraizq(){
      document.addEventListener('keypress', (e) =>{
        switch(e.key){
          case 'w':
            this.moverup();
            //console.log(this.posy);
            break;
          case 's':
            this.moverdown();
            break;
        }
      });
    }



  }


    

    class barradcha{
      constructor(nombre,posx,posy,ancho,alto,contenedor){
        this.nombre=nombre;
        this.posx=posx;
        this.posy=posy
        this.ancho=ancho;
        this.alto=alto;
  
        this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.rect.setAttributeNS(null, "x", this.posx);
        this.rect.setAttributeNS(null, "y", this.posy);
        this.rect.setAttributeNS(null, "width", this.ancho);
        this.rect.setAttributeNS(null, "height", this.alto);
        this.rect.setAttributeNS(null, "fill", "White");
        contenedor.appendChild(this.rect);
      }


      moverup(){
        if(this.posy>0){
        this.posy-=5;
        console.log(this.posy);
        }
      }
  
      moverdown(){
        if(this.posy<425){
        this.posy+=5;
        console.log(this.posy);
        }
        
      }
  
      pintar(){
        this.rect.setAttributeNS(null, "y", this.posy);
      }
    

      moverBarradcha(){
        document.addEventListener('keydown', (r) =>{
          switch(r.key){
            case 'ArrowUp':
              this.moverup();
              //console.log(this.posy);
              break;
            case 'ArrowDown':
              this.moverdown();
              break;
          }
        });
      }



      }
  

 



window.onload = ()=>{
  let svg= document.getElementById("svg");
   pelota = new Pelota(550,150,10,3,3,svg);
   jugadorizq = new barraizq("barraizq",15,150,15,75,svg);
   jugadordcha = new barradcha("barradcha",1070,150,15,75,svg)


setInterval(anima,15);
setInterval(jugadorizq.moverBarraizq(),20);
setInterval(jugadordcha.moverBarradcha(),20)
}

var pelota;

function anima(){
  pelota.moverPelota();
  // jugadoizq.moverBarraizq();
  jugadorizq.pintar();
  jugadordcha.pintar();


}

/*var pelota= document.getElementById("pelota");
var posx=0;
var posy=0;
let jugador1= document.getElementById("jugador1");
let mover = 10;





function moverj1up(){
  let posj1actual= parseInt(jugador1.getAttribute("y"));
  jugador1.setAttribute("y", posj1actual+moverarriba);

}

function moverj1down(){
  let posj1actual= parseInt(jugador1.getAttribute("y"));
  jugador1.setAttribute("y", posj1actual+moverbajo);
}


let movx = jugador1.getAttribute("cx")


window.addEventListener('keyup', (e) =>{
  switch(e.key){
    case 'w':
      moverj1up();
      break;
    case 's':
      moverj1down();
      break;
  }
});*/