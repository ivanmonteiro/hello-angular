import { AbstractControl, ValidationErrors } from "@angular/forms";
import { timeout } from "q";

export class PasswordValidators {
    static validOldPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value !== "1234") 
                    resolve({ invalidOldPassword: true});
                else
                    resolve(null);
            }, 1800);
            
        });
    }

    static passwordsShouldMatch(control: AbstractControl) : Promise<ValidationErrors | null> {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        return new Promise((resolve) => {
        if (newPassword.value !== confirmPassword.value)
            resolve({ passwordsShouldMatch: true});
        else
            resolve(null);
        });
    }
}