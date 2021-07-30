import { TemplateRef } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[loop]'
})
export class LoopDirective {

  @Input() public loop?: number;

  private template: TemplateRef<any>;
  private viewContainer: ViewContainerRef;

  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef){
    this.template = templateRef;
    this.viewContainer = viewContainerRef;
  }

  ngOnInit(){
    if (this.loop != null) {
      for (let i = 0; i < this.loop; i++){
        this.viewContainer.createEmbeddedView(this.template);
      }
    }
  }

}
