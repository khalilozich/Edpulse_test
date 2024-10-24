import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
 
  form: FormGroup;
  phone : string= '';
  englishLevel: string = '';
  timePreference: string = '';
  comments: string = '';
  

  constructor(private fb: FormBuilder, private http: HttpClient, private snackBar: MatSnackBar ) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^\d{10}$/)]],
      englishLevel: [''],
      timePreference: [''],
      comments: [''],
      statut: 'new' 
      
    });
  }
 


  onSubmit() {
    // Définir les URLs des webhooks
    const completeWebhookUrl = 'https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZjMDYzNDA0MzM1MjY1NTUzNzUxMzYi_pc'; // URL pour le formulaire complet
    const incompleteWebhookUrl = 'https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZjMDYzNDA0M2M1MjZjNTUzNDUxMzUi_pc'; // URL pour le formulaire incomplet

    // Vérifier si les champs obligatoires sont remplis
    const fullName = this.form.get('fullName')?.value;
    const email = this.form.get('email')?.value;

    if (fullName && email) {
        const phone = this.form.get('phone')?.value;
        const englishLevel = this.form.get('englishLevel')?.value;
        const timePreference = this.form.get('timePreference')?.value;

        if (phone && englishLevel && timePreference) {
            // Si le formulaire est complet, envoyer les données au webhook complet
            this.http.post(completeWebhookUrl, this.form.value)
                .pipe(
                    catchError(error => {
                        console.error('Erreur lors de l\'envoi des données:', error);
                        this.openSnackBar('Erreur lors de l\'envoi des données.', 'error');
                        return of(null); 
                    })
                )
                .subscribe(response => {
                    if (response) {
                        console.log('Données envoyées au webhook complet avec succès:', response);
                        this.openSnackBar('Formulaire soumis avec succès !', 'success');
                      } else {
                        this.openSnackBar('Échec de l\'envoi des données.', 'error');
                      }
                });
        } else {
            // Si le formulaire est incomplet, envoyer les données au webhook incomplet
            this.http.post(incompleteWebhookUrl, this.form.value)
                .pipe(
                    catchError(error => {
                        console.error('Erreur lors de l\'envoi des données:', error);
                        this.openSnackBar('Erreur lors de l\'envoi des données.', 'error');
                        return of(null); // Gérer l'erreur si nécessaire
                    })
                )
                .subscribe(response => {
                    if (response) {
                        this.openSnackBar('Formulaire incomplet soumis avec succès.', 'info');
                        console.log('Données envoyées au webhook incomplet avec succès:', response);
                    } else {
                        this.openSnackBar('Échec de l\'envoi des données.', 'error');
                        console.log('Échec de l\'envoi des données au webhook incomplet.');
                    }
                });
            console.log('Formulaire incomplet, veuillez remplir tous les champs requis.');
            this.openSnackBar('Formulaire incomplet, veuillez remplir tous les champs requis', 'info');
        }
    } else {
        this.openSnackBar('Les champs nom et email sont obligatoires.', 'error');
    }
}
openSnackBar(message: string, type: string) {
    let panelClass = ['snackbar-success'];
    if (type === 'error') {
      panelClass = ['snackbar-error'];
    } else if (type === 'info') {
      panelClass = ['snackbar-info'];
    }

    this.snackBar.open(message, 'Fermer', {
      duration: 6000, // Durée en millisecondes
      panelClass: panelClass
    });
  }



}
