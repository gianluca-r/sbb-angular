import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

/** Animations used by Lightbox. */
export const LightboxAnimations: {
  readonly slideLightbox: AnimationTriggerMetadata;
} = {
  /** Animation that slides the Lightbox in and out of view and fades the opacity. */
  slideLightbox: trigger('slideLightbox', [
    // Note: The `enter` animation doesn't transition to something like `translate3d(0, 0, 0)
    // scale(1)`, because for some reason specifying the transform explicitly, causes IE both
    // to blur the dialog content and decimate the animation performance. Leaving it as `none`
    // solves both issues.
    state('enter', style({ transform: 'none', opacity: 1 })),
    state('void', style({ transform: 'translate3d(0, 25%, 0) scale(0.9)', opacity: 0 })),
    state('exit', style({ transform: 'translate3d(0, 25%, 0)', opacity: 0 })),
    transition('* => *', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
  ])
};
