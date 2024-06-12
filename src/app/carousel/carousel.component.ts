import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  images = [
    { src: './assets/certidão-de-nascimento.jpg', alt: 'Imagem 1' },
    { src: './assets/certidão-de-nascimento.jpg', alt: 'Imagem 2' },
    { src: './assets/certidão-de-nascimento.jpg', alt: 'Imagem 3' },
  ];
}
