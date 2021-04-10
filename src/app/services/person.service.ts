import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    url = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getPersons(results?: number): Observable<Person[]> {

        if (!results) {
            results = 10;
        }
        console.log(results);

        return this.http.get(this.url + '?results=' + results).pipe(
            map(
                (res: any) => {
                    let personTmp: Person[] = [];
                    if (res.results) {
                        res.results.forEach(element => {
                            let person = {
                                name: element.name.first + ' ' + element.name.last,
                                gender: element.gender,
                                picture: element.picture.large
                            };
                            personTmp.push(person);
                        });
                    }
                    return personTmp;
                }
            )
        );
    }
}
