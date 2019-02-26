import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1 style="text-align: center; font-weight: bold"> Ops... Page not found - 404 </h1>

        <div class="container" style="margin-top: 10px; margin-bottom: 30px">
          <div class="jumbotron">

            <h3 style="text-align: center"> Wildcard routes and 404 handling  </h3>

          </div>
        </div>

      </div>
    </div>
  `
})
export class NotFoundComponent {

}
