import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

// Array

let theCoaches: Coach[] = [];

// Agrego a los Coach al Array

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

// Los muestro por consola

for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
