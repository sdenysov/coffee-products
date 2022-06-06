import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({selector: '[appImageName]'})
export class ImageDirective implements OnInit {

  @Input('appImageName') image!: string;

  constructor(private renderer: Renderer2, private hostElementRef: ElementRef<HTMLImageElement>) {}

  ngOnInit(): void {
    const hostElement = this.hostElementRef.nativeElement;
    this.renderer.setAttribute(hostElement, 'src', `assets/images/${this.image}`);
  }
}
