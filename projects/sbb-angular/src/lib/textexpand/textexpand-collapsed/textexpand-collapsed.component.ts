import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'sbb-textexpand-collapsed',
  templateUrl: './textexpand-collapsed.component.html',
  styleUrls: ['./textexpand-collapsed.component.scss']
})
export class TextexpandCollapsedComponent  {
  /**
   * Describes if textexpand-collapsed is hidden or not. Initially it isn't hidden.
   */
  @HostBinding('hidden')
  visible = false;

  /**
   * Css class of the textexpand-collapsed component.
   */
  @HostBinding('class') cssClass = 'sbb-textexpand-collapsed';
}
