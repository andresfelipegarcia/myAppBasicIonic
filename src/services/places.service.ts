import {AngularFireDatabase} from 'angularfire2/database'
import {Injectable} from "@angular/core";

@Injectable()

export class PlacesService {
  constructor(public afDB: AngularFireDatabase){

  }

  public getPlaces(){
    return this.afDB.list('/places/');
  }

  public getPlace(id){
    return this.afDB.list('/places/' + id);
  }

  public createPlace(place){
    return this.afDB.database.ref('/places/' + place.id).set(place);
  }

  public editPlace(place){
    return this.afDB.database.ref('/places/' + place.id).set(place);
  }

  public deletePlace(place){
    return this.afDB.database.ref('/places/' + place.id).remove();
  }
}
