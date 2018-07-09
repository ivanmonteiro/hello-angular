import { DataService } from "./data.services";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GithubService extends DataService {
    constructor(http: Http) {
        super('https://api.github.com/users/SeaBassTian/followers', http);
    }
}