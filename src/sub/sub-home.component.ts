import { Component } from "@angular/core";

@Component({
  selector: "sub-home",
  template: `
    <h3>Sub Home Components {{hello}}</h3>
  `
})
export class SubHomeComponent {
  hello:string = "hello ok!";
}
