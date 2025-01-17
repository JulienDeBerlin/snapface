import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap';


@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  private faceSnaps: FaceSnap[] = this.fetchFaceSnap();

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }


  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }


  snapFaceSnapById(faceSnapId: string): void {
    this.getFaceSnapById(faceSnapId).changeSnap()
  }


  fetchFaceSnap() {
    return [
      new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis toujours !',
        new Date(),
        450,
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      ).withLocation('au vert'),
      new FaceSnap(
        'Barnabé',
        'Mon meilleur ami depuis toujours !',
        new Date(),
        140,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      ).withLocation('à la montagne'),
      new FaceSnap(
        'Cunégonde',
        'Mon meilleur ami depuis toujours !',
        new Date(),
        34,
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      )
    ];
  }


}
