import { Component, OnInit, Input, ChangeDetectionStrategy, forwardRef, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sbb-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButtonComponent),
    multi: true,
  } ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonComponent implements ControlValueAccessor {

  @ViewChild('inputRadio') inputRadio: ElementRef<HTMLElement>;

  @Input() inputId: string;
  @Input() name: string;
  @Input() inputValue: string;
  @Input() checked: boolean;

  disabled: boolean;

  onChange = (obj: any) => { };
  onTouched = (_: any) => { };

  constructor(private renderer: Renderer2) {}

  writeValue(value: any): void {
    this.renderer.setProperty(this.inputRadio.nativeElement, 'checked', !this.checked && this.inputValue === value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  click($event) {
    this.onChange($event.target.value);
    this.onTouched($event.target.value);
    this.writeValue($event.target.value);
  }

  setDisabledState(disabled: boolean) {
    this.renderer.setProperty(this.inputRadio.nativeElement, 'disabled', disabled);
  }

}
