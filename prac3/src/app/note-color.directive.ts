import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appNoteColor]',
})
export class NoteColorDirective implements OnChanges {
  @Input('appNoteColor') status: 'static' | 'new' | 'updated' | 'deleted' =
    'static';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setColor();
  }

  setColor() {
    let color = 'white'; // default for static

    switch (this.status) {
      case 'new':
        color = '#d4edda'; // light green
        break;
      case 'updated':
        color = '#fff3cd'; // light orange
        break;
      case 'deleted':
        color = '#f8d7da'; // light red
        break;
    }

    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
