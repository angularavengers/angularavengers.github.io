import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'AIM (Ambition in Mind)';
   isActive_sourabh="active";
   isActive_lokesh="";
   isActive_krishan="";
   isActive_abhina="";
    
    setActive(target){
      
   this.isActive_sourabh="";
   this.isActive_lokesh="";
   this.isActive_krishan="";
   this.isActive_abhina="";
    this[target]="active"

          
    }
}
