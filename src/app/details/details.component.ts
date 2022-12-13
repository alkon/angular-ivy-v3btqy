import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  imports: [NgOptimizedImage],
})
export class DetailsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
