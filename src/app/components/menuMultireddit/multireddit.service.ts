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
    },
    {
        "title": "Cycling",
        "subreddits": ["bicycling", "cycling", "biketouring", "whichbike", "bikecommuting", "Bikeporn", "EveryDayRide", "bicycleculture"]
    },
    {
        "title": "Nintendo",
        "subreddits": ["nintendo", "NintendoSwitch", "Mario", "truezelda", "pokemon"]
    },
    {
      "title": "Wholesome",
      "subreddits": ["UpliftingNews", "MadeMeSmile", "BeforeNAfterAdoption", "AnimalsBeingBros", "wholesomegifs"]
    }];

}; 

    // {
    //     "title": "",
    //     "subreddits": []
    // }