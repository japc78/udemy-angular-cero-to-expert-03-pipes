import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name =  'Capitan America';
  name2 = 'CaPtaIn aMeRiCa';
  arrayOfNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arrayOfHero: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot' ];
  PI: number = Math.PI;
  percentage = 0.234;
  salary = 12345.50;
  activar = true;

  hero = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    location: {
      street: 'xmen street',
      number: 20
    }
  };

  valuePromise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 3000);
  });

  dateToday: Date = new Date();

  language = 'es';

  videoUrl = 'https://www.youtube.com/embed/1OPDUhgrI24';
}
