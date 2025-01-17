import {Component} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {FaceSnapsService} from '../services/face-snaps.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {DatePipe, NgClass, NgStyle, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-single-face-snap-component',
  imports: [
    UpperCasePipe,
    DatePipe,
    NgClass,
    NgStyle,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  standalone: true,
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;
  snapButtonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
    this.snapButtonText = this.faceSnap.snapped ? 'Oops, un Snap!' : 'Oh Snap!';
  }


  onModifySnap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
  }

  get dynamicColor(): string {
    return `rgb(0, ${this.faceSnap.totalSnaps}, 0)`;
  }


}
