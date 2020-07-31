import { animation, trigger, animateChild, group,
    transition, animate, style, query } from '@angular/animations';
  
  export const Fader = 
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            width: '100%',
            opacity: 0
          }),
        ]),
        query(':enter', [
          animate('800ms ease',
            style({ opacity: 1 })
          )
        ])
      ]),
  ]);
  
  