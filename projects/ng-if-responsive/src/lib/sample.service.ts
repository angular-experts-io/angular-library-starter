import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SampleService {

    public getBestFramework(): string {
        return 'Angular';
    }
}
