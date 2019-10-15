import {
  Directive,
  HostListener,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
@Directive({
  selector: '[lazyScroll]'
})
export class NgxLazyScrollDirective {
  @Input() limit: number = 1;
  @Input() heightAdjust: string = '0';
  @Output() stepEvent = new EventEmitter();
  @HostListener('scroll', ['$event']) scrollHandler(event): void {
    const tracker = event.target;
    const limit = tracker.scrollHeight + Number(this.heightAdjust);
    if (Number(tracker.offsetHeight) + Number(tracker.scrollTop) > limit) {
      this.limit++;
      this.stepEvent.emit(this.limit);
    }
  }



}