import { Component } from "@angular/core";
import { WfGuidService } from '@nx-build-error/test-libs-error';

@Component({
  selector: "nx-build-error-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "nx-build-error";
  guid = "";

  constructor(private guidSvc: WfGuidService) {
    this.guid = guidSvc.generate();
  }
}
