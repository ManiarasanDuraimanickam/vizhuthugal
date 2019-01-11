import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-newmember',
    templateUrl: './NewMember.component.html',
    styleUrls: ['./NewMember.component.css']
})
export class NewMemberComponent implements OnInit {
    form: FormGroup;

    public constructor(private fb: FormBuilder) { }
    ngOnInit() {
        this.form = this.fb.group({
            name: ['', Validators.required],
            fatherName: ['', Validators.required],
            gender: ['', Validators.required],
            isActive: ['', Validators.required],
            doj: ['', Validators.required],
            memberID: ['', Validators.required],
            password: ['', Validators.required],
            contactNo: ['', Validators.required],
            countryCode: ['', Validators.required],
            hasLoginRights: ['', Validators.required],
            role: ['', Validators.required]
        });
    }

    onSubmit() {
        if (!this.form.valid) {
            return;
        }
    }

    isFieldInvalid(field: String) {

    }
}
