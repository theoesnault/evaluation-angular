import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// Partie 1
interface Utilisateur {
  nom: string;
  prenom: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  usersList: Array<Utilisateur> = [];

  constructor(private formBuilder: FormBuilder) {}

  // FormBuilder
  formulaire = this.formBuilder.group({
    nom:    ['', [Validators.required, Validators.minLength(5)]],
    prenom: ['', [Validators.required, Validators.minLength(5)]],
    email:  ['', [Validators.required, Validators.email]],
    age:    ['', [Validators.required, Validators.min(0)]]
  });

  // Getters pour les valeurs du formulaire

  get nom(){ return this.formulaire.get('nom') }

  get prenom(){ return this.formulaire.get('prenom') }

  get email(){ return this.formulaire.get('email') }

  get age(){ return this.formulaire.get('age') }

  // Etape 2
  // formulaire = new FormGroup({
  //   nom: new FormControl('', Validators.required),
  //   prenom: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   age: new FormControl('', [Validators.required, Validators.min(0)])
  // })

  /**
   * Execution à l'envoi du formulaire
   */
  onSubmit(): void {
    console.log('form submitted! ', this.formulaire.value)
    let data = this.formulaire.value;
    console.log(data.valid)
    if (data.nom !== "" && 
    data.prenom !== "" && 
    data.email !== "" &&
    data.age !== "") {
      this.usersList.push(data);
      this.formulaire.reset();
    }else{
      console.log("Erreur dans le formulaire")
    }
  }

  ngOnInit(): void {}

}
