import {Component} from '@angular/core';
import {FaceSnapComponent} from '../face-snap/face-snap.component';
import {FaceSnapsService} from '../services/face-snaps.service';
import {FaceSnap} from '../models/face-snap';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  standalone: true,
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent {
  faceSnaps?: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) {
  }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
  }

}
