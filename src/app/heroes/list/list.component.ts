import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  public deletedHero?:string;

  removeLastHeroe(){
    this.deletedHero = this.heroNames.pop();
  }

  Reset(){

    this.heroNames = ['Spiderman','Ironman','Hulk','Thor'];
    this.deletedHero='';
  }
}
