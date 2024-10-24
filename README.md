Project: Registration Form with Pabbly Connect Integration
Description
This project is a registration form for an English course that captures user information and sends it to a Google Sheet using Pabbly Connect. The form allows users to submit details such as their full name, email, phone number, preferred English level, time preference, and comments. It also includes validation to ensure that mandatory fields are filled correctly.

Upon submission, the form triggers different webhooks based on whether the form is complete or incomplete. The system distinguishes between new submissions and returning users by checking existing records in the Google Sheet through a Pabbly lookup step.

Features
Form Validation: Ensures that required fields such as full name and email are filled, and applies specific validation rules for phone number formatting.
Dynamic Webhook Integration: Based on the completeness of the form, data is sent to either a "complete" or "incomplete" webhook URL via Pabbly Connect.
Returning User Detection: Checks if the user has previously submitted the form by looking up their email address in the Google Sheet, and updates the record if necessary.
Automated Data Capture: Sends the form data directly to Google Sheets for record-keeping and further processing.
Status Tracking: Adds a static field status with the value "new" to indicate that the submission is a new entry.
Technologies Used
Angular: Used for the frontend framework and form handling.
Pabbly Connect: For automating the workflow and integrating the form data with Google Sheets.
Google Sheets: Stores and processes user data submitted via the form.
Tailwind CSS: Applied for responsive styling of the landing page.
Material Design (Angular Material): Used to implement form elements and user-friendly alerts.
Usage
Fill in the form with the required details.
Upon successful submission, a notification will appear confirming that the data has been sent.
If some fields are missing or invalid, an error message will be displayed.

Links
Google Sheets Integration: https://docs.google.com/spreadsheets/d/1F43FJE7ulJ1bOy7uJHVU2Ai0tja_vu4dgdkKyElKqRA/edit?usp=sharing
Pabbly Workflow 1 : https://connect.pabbly.com/workflow/mapping/IjU3NjYwNTZjMDYzNDA0M2M1MjZjNTUzNDUxMzUi_pc
Pabbly Workflow 2 : https://connect.pabbly.com/workflow/mapping/IjU3NjYwNTZjMDYzNDA0MzM1MjY1NTUzNzUxMzYi_pc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
