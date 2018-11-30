import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-like-componet',
  templateUrl: './like-componet.component.html',
  styleUrls: ['./like-componet.component.scss']
})
export class LikeComponetComponent implements OnInit {
  like = false;
  colore: String = "green";
  testo = "non mi piace" ;

  constructor() { }

  clickedButton = () => {
    this.like = !this.like;
    if ( this.colore === "green" || this.like === true) {
      this.colore = "blue";
      this.like = true;
      this.testo = "mi piace";
    } else {
      this.colore = "green";
      this.like = false;
      this.testo = "non mi piace";
    }
  }

  ngOnInit() {
  }

}


