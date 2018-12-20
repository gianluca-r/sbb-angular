import { Component } from '@angular/core';

@Component({
  selector: 'sbb-option-selection-showcase',
  templateUrl: './option-selection-showcase.component.html',
  styleUrls: ['./option-selection-showcase.component.scss']
})
export class OptionSelectionShowcaseComponent {

  required: boolean;
  disabled: boolean;
  checked: boolean;
  modelValue = 'value1';

  radioOptions = [{
    'name': 'Option 1',
    'value': 'value1'
  }, {
    'name': 'Option 2',
    'value': 'value2'
  }, {
    'name': 'Option 3',
    'value': 'value3'
  }];

  required2: boolean;
  disabled2: boolean;
  checked2: boolean;
  modelValue2 = 'value1';

  checkboxOptions = [{
    'name': 'Check 1',
    'value': 'value1',
    'selected': true
  }, {
    'name': 'Check 2',
    'value': 'value2',
    'selected': false
  }, {
    'name': 'Check 3',
    'value': 'value3',
    'selected': false
  }];
}
