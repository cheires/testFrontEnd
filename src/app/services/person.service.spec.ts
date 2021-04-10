import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PersonService } from './person.service';
import { Person } from '../models/person';

const mockData = {
    results: [
        {
            gender: "female",
            name: { "title": "Ms", "first": "Kristin", "last": "Hughes" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/6.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
            },
            email: "kristin.hughes@example.com"
        },
        {
            gender: "female",
            name: { "title": "Ms", "first": "Kristin", "last": "Hughes" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/6.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
            },
            email: "kristin.hughes@example.com"
        },
        {
            gender: "female",
            name: { "title": "Ms", "first": "Kristin", "last": "Hughes" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/6.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
            },
            email: "kristin.hughes@example.com"
        },
        {
            gender: "female",
            name: { "title": "Ms", "first": "Kristin", "last": "Hughes" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/6.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
            },
            email: "kristin.hughes@example.com"
        },
        {
            gender: "female",
            name: { "title": "Ms", "first": "Kristin", "last": "Hughes" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/6.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
            },
            email: "kristin.hughes@example.com"
        }, {
            gender: "female",
            name: { "title": "Ms", "first": "Kristin", "last": "Hughes" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/6.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
            },
            email: "kristin.hughes@example.com"
        }, {
            gender: "female",
            name: { "title": "Ms", "first": "Kristin", "last": "Hughes" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/6.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
            },
            email: "kristin.hughes@example.com"
        }, {
            gender: "female",
            name: { "title": "Ms", "first": "Kristin", "last": "Hughes" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/6.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
            },
            email: "kristin.hughes@example.com"
        }, {
            gender: "female",
            name: { "title": "Ms", "first": "Kristin", "last": "Hughes" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/6.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
            },
            email: "kristin.hughes@example.com"
        }, {
            gender: "female",
            name: { "title": "Ms", "first": "Kristin", "last": "Hughes" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/6.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
            },
            email: "kristin.hughes@example.com"
        }
    ]
};

describe('PersonService', () => {
    let service: PersonService,
        httpMock: HttpTestingController;

    const loadMore = 10;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                PersonService
            ]
        });
        service = TestBed.inject(PersonService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it(`Should get ${loadMore} random person`, () => {
        // Expecetd data
        const dummyPersons: Person[] = [
            { name: 'Kristin Hughes', gender: 'female', picture: 'https://randomuser.me/api/portraits/women/6.jpg' },
            { name: 'Kristin Hughes', gender: 'female', picture: 'https://randomuser.me/api/portraits/women/6.jpg' },
            { name: 'Kristin Hughes', gender: 'female', picture: 'https://randomuser.me/api/portraits/women/6.jpg' },
            { name: 'Kristin Hughes', gender: 'female', picture: 'https://randomuser.me/api/portraits/women/6.jpg' },
            { name: 'Kristin Hughes', gender: 'female', picture: 'https://randomuser.me/api/portraits/women/6.jpg' },
            { name: 'Kristin Hughes', gender: 'female', picture: 'https://randomuser.me/api/portraits/women/6.jpg' },
            { name: 'Kristin Hughes', gender: 'female', picture: 'https://randomuser.me/api/portraits/women/6.jpg' },
            { name: 'Kristin Hughes', gender: 'female', picture: 'https://randomuser.me/api/portraits/women/6.jpg' },
            { name: 'Kristin Hughes', gender: 'female', picture: 'https://randomuser.me/api/portraits/women/6.jpg' },
            { name: 'Kristin Hughes', gender: 'female', picture: 'https://randomuser.me/api/portraits/women/6.jpg' }
        ];
        service.getPersons(loadMore).subscribe(result => {
            expect(result.length).toEqual(loadMore);
            expect(result).toEqual(dummyPersons);
        });

        const request = httpMock.expectOne(`${service.url}?results=${loadMore}`);

        expect(request.request.method).toBe('GET');

        request.flush(mockData);

        expect(service).toBeTruthy();
    });
});
