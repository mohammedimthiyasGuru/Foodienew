import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class City_list{
    constructor() {

    }


   sheet1 = [{"id":1,"name":"American"},{"id":2,"name":"Asian"},{"id":3,"name":"Brazilian"},{"id":4,"name":"Burgers"},{"id":5,"name":"Cakes & Bakery"},{"id":6,"name":"Chicken"},{"id":7,"name":"Chinese"},{"id":8,"name":"Desserts"},{"id":9,"name":"Fast food"},{"id":10,"name":"Filipino"},{"id":11,"name":"French"},{"id":12,"name":"German"},{"id":13,"name":"Greek"},{"id":14,"name":"Halal"},{"id":15,"name":"Healthy food"},{"id":16,"name":"Indian"},{"id":17,"name":"International"},{"id":18,"name":"Italian"},{"id":19,"name":"Japanese"},{"id":20,"name":"Korean"},{"id":21,"name":"Mediterranean"},{"id":22,"name":"Mexican"},{"id":23,"name":"Middle Eastern"},{"id":24,"name":"Non-alcoholic Drinks"},{"id":25,"name":"Pizza"},{"id":26,"name":"Sandwiches"},{"id":27,"name":"Sea Food"},{"id":28,"name":"Singaporean"},{"id":29,"name":"South East Asian"},{"id":30,"name":"Spanish"},{"id":31,"name":"Sushi"},{"id":32,"name":"Thai"},{"id":33,"name":"Vegetarian"},{"id":34,"name":"Vietnamese"},{"id":35,"name":"Western"},{"id":36,"name":" Swedish"},{"id":37,"name":" Latvian"},{"id":38,"name":"Scottish"},{"id":39,"name":" British"},{"id":40,"name":"Canadian"},{"id":41,"name":"Russian"},{"id":42,"name":"Jewish"},{"id":43,"name":"Polish"},{"id":44,"name":" Hawaiian"},{"id":45,"name":" Peruvian"},{"id":46,"name":"Salvadorian"},{"id":47,"name":"Cuban"},{"id":48,"name":"Tibetan"},{"id":49,"name":"Egyptian"},{"id":50,"name":" Belgian"},{"id":51,"name":"Irish"},{"id":52,"name":"Welsh"},{"id":53,"name":"Mormon"},{"id":54,"name":"Cajun"},{"id":55,"name":"Portuguese"},{"id":56,"name":"Turkish"},{"id":57,"name":" Haitian"},{"id":58,"name":"Tahitian"},{"id":59,"name":"Kenyan"},{"id":60,"name":"Algerian"},{"id":61,"name":"Nigerian"},{"id":62,"name":" Libyan"},{"id":63,"name":"Malaysian"}];
   sheet2 = [{"id":1,"name":"Animals & Pet Supplies"},
   {"id":2,"name":"Apparel & Accessories"},
   {"id":3,"name":"Animals & Pet Supplies > Pet Supplies"},
   {"id":4,"name":"Arts & Entertainment"},
   {"id":5,"name":"Business & Industrial"},
   {"id":6,"name":"Cameras & Optics"},
   {"id":7,"name":"Electronics"},
   {"id":8,"name":"Food, Beverages & Tobacco"},
   {"id":9,"name":"Furniture"},
   {"id":10,"name":"Hardware"},
   {"id":11,"name":"Health & Beauty"},
   {"id":12,"name":"Home & Garden"},
   {"id":13,"name":"Luggage & Bags"},
   {"id":14,"name":"Mature"},
   {"id":15,"name":"Media"},
   {"id":16,"name":"Office Supplies"},
   {"id":17,"name":"Religious & Ceremonial"},
   {"id":18,"name":"Software"},
   {"id":19,"name":"Sporting Goods"},
   {"id":20,"name":"Toys & Games"},
   {"id":21,"name":"Vehicles & Parts"}];


}
