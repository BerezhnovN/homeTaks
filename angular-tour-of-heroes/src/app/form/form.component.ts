import { Component, OnInit } from '@angular/core';
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

  skillsList: ISkill[] = [
    { name: 'Жизнерадостность' },
    { name: 'Заинтересованность' },
    { name: 'Интеллект' },
  ];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/[А-я]/)]],
      surname: ['', [Validators.required, Validators.pattern(/[А-я]/)]],
      patronymic: ['', [Validators.required, Validators.pattern(/[А-я]/)]],
      email: ['', [Validators.email]],
      skills: this.fb.array([]),
    });
  }

  get skills() {
    return this.userForm.get('skills') as FormArray;
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.skillsList.push({name: value});
      this.skills.push(this.fb.control(value));
    }

    event.chipInput!.clear();
  }

  remove(skill: ISkill): void {
    const index = this.skillsList.indexOf(skill);

    if (index >= 0) {
      this.skillsList.splice(index, 1);
      this.skills.removeAt(index);
    }
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

  Clear() {
    this.userForm.reset();
    this.skills.clear()
    this.skillsList = [{name: 'Жизнерадостность'}, {name: 'Заинтересованность'}, {name: 'Интеллект'}];
    for (let i = 0; i < this.skillsList.length; i++) {
      this.skills.push(this.fb.control(this.skillsList[i].name));
    }
  }

  ngOnInit(): void {}
}

export interface ISkill {
  name: string;
}
