export class FaceSnap {

  location?: string;
  snapped = false;
  id: string;

  constructor(
    public title: string,
    public description: string,
    public createdAt: Date,
    public totalSnaps: number,
    public imageUrl: string,
  ) {
    this.id = crypto.randomUUID().substring(0, 8);
  }

  private setLocation(location: string): void {
    this.location = location;
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }

  changeSnap(): void {
    if(!this.snapped) {
      this.snapped = true;
      this.totalSnaps++;
    } else {
      this.snapped = false;
      this.totalSnaps--;
    }
  }



}
