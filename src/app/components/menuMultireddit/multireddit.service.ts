import { Injectable } from '@angular/core';
import { multireddit } from './multireddit';

@Injectable()
export class multiredditService {    
    readonly multireddits: multireddit[] = [{
        "title": "Future",
        "subreddits": ["futurology", "TheFutureIsNow", "Automate", "artificial", "MachineLearning"]
    },
    {
        "title": "TechHumor",
        "subreddits": ["talesfromtechsupport", "programminghorror", "ProgrammerHumor", "tifu", "techsupportmacgyver"]
    }];


}; 