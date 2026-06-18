"use strict";
import NobleCitizen from "./class.nobleCitizen.js";
import Citizen from "./class.citizen.js";
import Building from "./class.building.js";
import NobleBuilding from "./class.nobleBuilding.js";

export default class Village{
    constructor(name){
        this.name = name;
        this.buildings = [];
        this.citizens = [];
    }
    addBuilding(name, capacity, nobel = false){
        this.buildings.push(nobel ? new NobleBuilding(name, capacity) : new Building(name, capacity));
    }
    addCitizen(name, nobel = false){
        let newCitizen = nobel ? new NobleCitizen(name) : new Citizen(name);
        this.citizens.push(newCitizen);
        this.shelterCitizen(newCitizen);
    }
    shelterCitizen(citizen){
        for(const building of this.buildings){
            if(building.addResident(citizen))
                return true;
        }
        return false;
    }
    shelterTheWorthy(){
        for(const citizen of this.citizens){
            if(citizen.home == null)
                this.shelterCitizen(citizen);
        }
    }
    printCitizenDirectory(){
        for(const building of this.buildings){
            building.listAllResidents();
        }
        this.listAllHomeless();
    }
    listAllHomeless(){
        console.log(`%cHomeless people of ${this.name}:`, "background-color: #a00; color: white;");
        for (const citizen of this.citizens){
            if (citizen.home == null)
                console.log(String(citizen));
        }
    }

}
/**
 * Create a Village class. Each village should have
 * - a name
 * - an array of its buildings
 * - an array of its citizens
 *
 * You can see in main.js what methods a village should provide.
 * implement them.
 */