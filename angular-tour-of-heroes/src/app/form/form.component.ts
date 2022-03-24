import { ThirdPageComponent } from './../book/third-page/third-page.component';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  userForm: FormGroup;
  addOnBlur: boolean = true;
  info = {};
  visible: boolean = false;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  @ViewChild('skillInput')
  skillInput!: ElementRef<HTMLInputElement>;

  skillsList = [
    { name: 'Жизнерадостность' },
    { name: 'Заинтересованность' },
    { name: 'Интеллект' },
  ];

  readonly powers: string[] = this.skillsList.map((el) => el.name);

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/[А-я]/)]],
      surname: ['', [Validators.required, Validators.pattern(/[А-я]/)]],
      patronymic: ['', [Validators.required, Validators.pattern(/[А-я]/)]],
      email: ['', [Validators.email]],
      skills: this.fb.array(this.powers.map((el) => new FormControl(el))),
    });
  }

  get skills() {
    return this.userForm.get('skills') as FormArray;
  }

  add(event: MatChipInputEvent): void {
    const value = event.value.trim() || '';

    if (value) {
      this.skills.push(this.fb.control(value));
    }

    event.chipInput!.clear();
  }

  remove(index: number): void {
    this.skills.removeAt(index);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.userForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  onSubmit() {
    this.info = this.userForm.value;
    this.visible = true;
  }

  clear() {
    this.userForm.reset();
    this.skills.clear();
    this.skills.controls.splice(3);
    while (this.skills.controls.length < 3) {
      this.skills.push(this.fb.control(''));
    }
    this.skills.patchValue(this.powers);
    this.visible = false;
  }

  ngOnInit(): void {}
}
