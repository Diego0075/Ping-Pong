
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
    
       
        //Colisiones Barra izq
         if(this.posx >=jugadorizq.posx+this.radio&& this.posx-this.radio <=jugadorizq.posx+jugadorizq.ancho&& this.posy+this.radio>=jugadorizq.posy && this.posy-this.radio<=(jugadorizq.posy+jugadorizq.alto)){
           console.log("perfes");
           
          this.posx= jugadorizq.posx+jugadorizq.ancho+this.radio;

           this.velx *= -1; //Controlador de velocidad
           if(this.velx>=-15){
               this.velx  +=3;
               
           }
        }
        
        //Colisiones Barra dcha

        if(this.posx >=jugadordcha.posx-this.radio && this.posx<=jugadordcha.posx-this.radio+jugadordcha.ancho && this.posy+this.radio>=jugadordcha.posy && this.posy-this.radio<=(jugadordcha.posy+jugadordcha.alto)){
          console.log("perfes2")

          this.posx = jugadordcha.posx-this.radio-1;

          this.velx *= -1; //Controlador de velocidad
          if(this.velx >= 15){
          this.velx  -=3;
          }
        }

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
      this.posy-=10;
      // console.log(this.posy);
      }
    }

    moverdown(){
      if(this.posy<425){
      this.posy+=10;
      // console.log(this.posy);
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
        this.posy-=10;
        // console.log(this.posy);
        }
      }
  
      moverdown(){
        if(this.posy<425){
        this.posy+=10;
        // console.log(this.posy);
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

