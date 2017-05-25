import { Injectable } from '@angular/core';
import { multireddit } from './multireddit';

@Injectable()
export class multiredditService {    
    readonly multireddits: multireddit[] = [{
        "title": "Future",
        "subreddits": ["futurology", "TheFutureIsNow", "Automate", "artificial", "MachineLearning"]
    },
    {
        "title": "Humor",
        "subreddits": ["talesfromtechsupport", "photoshopbattles", "programminghorror", "ProgrammerHumor", "tifu", "techsupportmacgyver"]
    },
    {
        "title": "Cycling",
        "subreddits": ["bicycling", "cycling", "biketouring", "whichbike", "bikecommuting", "Bikeporn", "EveryDayRide", "bicycleculture"]
    },
    {
        "title": "Nintendo",
        "subreddits": ["nintendo", "NintendoSwitch", "Mario", "truezelda", "urazelda", "pokemon"]
    },
    {
        "title": "LearnNewStuff",
        "subreddits": ["lifehacks", "LifeProTips", "everymanshouldknow", "DIY", "YouShouldKnow", "todayilearned"]
    },
    {
      "title": "Cats",
      "subreddits": ["Cats", "CatBellies", "CatLoaf", "Toebeans", "KittensGame"]
    }];

}; 

    // {
    //     "title": "",
    //     "subreddits": []
    // }