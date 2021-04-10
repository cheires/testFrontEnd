import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
    selector: 'app-random-person',
    templateUrl: './random-person.component.html',
    styleUrls: ['./random-person.component.css']
})
export class RandomPersonComponent implements OnInit {

    persons: Person[] = [];
    loadMore = 10;

    constructor(private personService: PersonService) { }

    ngOnInit(): void {
        this.getPersons();
    }

    getPersons() {
        this.personService.getPersons().subscribe(
            result => {
                this.persons = this.persons.concat(result);
            }
        );
    }

    getMorePersons() {
        this.personService.getPersons(this.loadMore).subscribe(
            result => {
                this.persons = this.persons.concat(result);
            }
        );
    }

}
