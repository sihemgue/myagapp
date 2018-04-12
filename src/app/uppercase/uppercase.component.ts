import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uppercase',
  templateUrl: './uppercase.component.html',
  styleUrls: ['./uppercase.component.css']
})
export class UppercaseComponent implements OnInit {
  result = '';
  t = '';
  constructor() { }
  uppercase(t) {
    this.result = '';
   for (let i = 0; i <= t.length ; i++) {
      const code = t.charCodeAT(i);
      if ((code > 97) && (code < 122)) {
        const ch1 = String.fromCodePoint(code - 32);
        this.result = this.result.concat(ch1);
      }   else       {
       const ch2 = String.fromCharCode(code);
       this.result = this.result.concat(ch2);
       console.log(ch2);
      }

    }
  }
  ngOnInit() {
  }

}
