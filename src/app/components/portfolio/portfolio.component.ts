import { Component } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  
  isHidden:boolean = true;
  image : string ='';


  imgSrc:string[] = [
    "images/poert1.png",
    "images/port2.png",
    "images/port3.png",
    "images/poert1.png",
    "images/port2.png",
    "images/port3.png"
  ]

  appearModel(imgss:string){
    this.isHidden = false ; 
    this.image =imgss;
  }

  hideModel(eventtarget : EventTarget | null , imgRef:any){
    if(eventtarget == imgRef){
      return;
    }else{
      this.isHidden= true ;
    }
  }

}
