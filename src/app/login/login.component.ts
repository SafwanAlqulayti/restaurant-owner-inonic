import { Input, Component, Output, EventEmitter,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: 'log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService:AuthService
    ) { }
  formGroup = new FormGroup({});
  data:any

//   submit() {
//   if (this.form.valid) {
//     this.submitEM.emit(this.form.value);
//   }
// }
// @Input()
//  error: string | null | undefined;

// @Output() submitEM = new EventEmitter();
  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  async loginProcess(){
    if(this.formGroup.valid){
        (await this.authService.login(this.formGroup.value)).subscribe(async (result:any) => {
          this.data = result
         await alert(this.data)

        if(result.success){
           alert({accessToken:this.data})
        }else{
          alert( this.data.message)
        }
      })
    }
  }
}
