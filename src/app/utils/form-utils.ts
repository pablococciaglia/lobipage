import { AbstractControl, FormArray, FormGroup, ValidationErrors } from '@angular/forms';

async function justWait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2500);
  });
}
export class FormUtils {
  static passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$';
  static namePattern = "^[a-z ,.'-]+$";
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';
  static onlyNumbersPattern = '^[0-9]+$'; // ^[0-9]*$

  static getTextErrors(errors: ValidationErrors) {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es obligatorio';
        case 'minlength':
          return `La longitud mínima es de ${errors['minlength'].requiredLength} caracteres`;
        case 'emailTaken':
          return 'Ya existe un usuario registrado con este correo electrónico';
        case 'min':
          return `El valor mínimo es ${errors['min'].min}`;
        case 'passwordMismatch':
          return 'Las contraseñas no coinciden';
        case 'max':
          return 'La edad máxima es de  ' + errors['max'].max + '  años';
        case 'maxlength':
          return (
            'No se pueden ingresar más que ' + errors['maxlength'].requiredLength + ' caracteres'
          );

        case 'pattern':
          if (errors['pattern'].requiredPattern === FormUtils.emailPattern) {
            return 'El correo electrónico no tiene un formato válido';
          }
          if (errors['pattern'].requiredPattern === FormUtils.notOnlySpacesPattern) {
            return 'El nombre de usuario no tiene un formato válido';
          }
          if (errors['pattern'].requiredPattern === FormUtils.passwordPattern) {
            return 'Debe tener al menos 1 número, 1 letra minúscula, 1 letra mayúscula y 1 símbolo';
          }
          if (errors['pattern'].requiredPattern === FormUtils.namePattern) {
            return 'El nombre y apellido no tienen el formato correcto';
          }
          if (errors['pattern'].requiredPattern === FormUtils.namePattern) {
            return 'El nombre y apellido no tienen el formato correcto';
          }
          if (errors['pattern'].requiredPattern === FormUtils.onlyNumbersPattern) {
            return 'El valor ingresado no tiene un formato válido';
          }
          return 'No tiene el formato correcto';
        case 'notPablo':
          return 'Solo hay un usuario con ese nombre permitido';
        default:
          return `Not controlled error ${key}`;
      }
    }
    return null;
  }

  static isValidField(form: FormGroup, field: string): boolean | null {
    return form.controls[field].errors ? form.controls[field].touched : null;
  }

  static getfieldError(form: FormGroup, field: string): string | null {
    if (!form.controls[field].errors) return null;
    const errors = form.controls[field].errors;
    return this.getTextErrors(errors);
  }

  static isValidFieldInArray(formArray: FormArray, index: number): boolean | null {
    return formArray.controls[index].errors && formArray.controls[index].touched;
  }

  static getfieldErrorInArray(formArray: FormArray, index: number): string | null {
    if (!formArray.controls[index].errors) return null;
    const errors = formArray.controls[index].errors;
    return this.getTextErrors(errors);
  }

  static equalMatchValidator(field1: string, field2: string) {
    return (formGroup: AbstractControl) => {
      const fieldValue = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;
      return fieldValue !== fieldValue2 ? { passwordMismatch: true } : null;
    };
  }

  static async checkingServerResponse(control: AbstractControl): Promise<ValidationErrors | null> {
    await justWait();
    const formValue = control.value;
    if (formValue === 'cocciaglia@gmail.com') {
      return {
        emailTaken: true,
      };
    }
    return null;
  }

  static notPabloUsers(control: AbstractControl): ValidationErrors | null {
    const formValue = control.value;
    if (formValue === 'pablococciaglia') {
      return {
        notPablo: true,
      };
    }
    return null;
  }
}
