import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  signform:FormGroup;

  constructor(private datiUtenti:LoginServiceService ,private fb: FormBuilder,private router: Router) {

    this.signform = this.fb.group({
      username:'',
      password:''
    });

   }

  ngOnInit(): void {
  }

  onSubmit(user){
    this.datiUtenti.add(user);
    this.return();
  }
  return(){
    this.router.navigateByUrl("/login");
  }

}
