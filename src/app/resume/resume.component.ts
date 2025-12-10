import { Component, ElementRef, signal } from '@angular/core';
import { AppMaterialModule } from '../shared/material-components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  standalone: true,
  imports: [AppMaterialModule,CommonModule],
})
export class ResumeComponent {


  constructor(private el: ElementRef) { }



  skills = [
    { name: 'Angular', percentage: 90, logo: 'assets/logos/angular.png' },
    { name: 'TypeScript', percentage: 85, logo: 'assets/logos/typescript.png' },
    { name: 'CSS', percentage: 90, logo: 'assets/logos/css.png' },
    { name: 'RxJS', percentage: 75, logo: 'assets/logos/rxjs.png' },
    { name: 'Flutter', percentage: 60, logo: 'assets/logos/Flutter.png' },
    { name: 'Html', percentage: 95, logo: 'assets/logos/html.png' },
    { name: 'Ionic', percentage: 70, logo: 'assets/logos/ionic.png' },
    { name: 'JavaScript', percentage: 75, logo: 'assets/logos/js.png' },
    { name: 'React', percentage: 40, logo: 'assets/logos/react.png' },

  ];

  getColorByPercentage(p: number): string {
    if (p >= 90) return '#2e7d32';
    if (p >= 75) return '#388e3c';
    if (p >= 60) return '#fbc02d';
    if (p >= 40) return '#ff9800';
    return '#f44336';
  }


  education = [
    {
      title: 'Ingeniería de software',
      period: '2020 – 2024',
      institution: 'Corporación Universitaria Iberoamericana.'
    },
    {
      title: 'Diplomado en Desarrollo Web',
      period: '2023',
      institution: 'Bogotá Institute of Tecnology.'
    },
    {
      title: 'Tecnologia Biomedica',
      period: '2013 - 2015',
      institution: 'SENA.'
    }
  ];

    images = [
    'assets/certificados/ing.jpg',
    'assets/certificados/desarrolloweb.png',
    'assets/certificados/desarrolloweb2.png',
    'assets/certificados/htmlcss.jpg',
    'assets/certificados/ionic.png',
    'assets/certificados/rest.jpg', 
  ];

 currentIndex = 0;
  animationClass = '';

  changeSlide(direction: 'next' | 'prev') {
    this.animationClass = direction === 'next' ? 'slide-out-left' : 'slide-out-right';

    setTimeout(() => {
      if (direction === 'next') {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      } else {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      }

      this.animationClass = direction === 'next' ? 'slide-in-right' : 'slide-in-left';
    }, 200);

    setTimeout(() => {
      this.animationClass = '';
    }, 400);
  }

  next() {
    this.changeSlide('next');
  }

  prev() {
    this.changeSlide('prev');
  }

  download() {
    const link = document.createElement('a');
    link.href = 'assets/cv/cv.pdf'; // Cambiar por el nombre de tu archivo
    link.download = 'CV_David_Perez.pdf'; // Nombre con el que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
