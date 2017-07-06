import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
@Directive({
    selector: '[myMathJax]'
})
export class MathJaxDirective implements OnChanges {
    @Input('myMathJax') myMathJax: string;

    constructor(private el: ElementRef) {
    }

    ngOnChanges() {
       this.el.nativeElement.innerHTML = this.myMathJax;
       MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.el.nativeElement]);
    }
}
