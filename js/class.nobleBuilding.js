"use strict";
import Building from "./class.building.js";
import NobleCitizen from "./class.nobleCitizen.js";

/**
 * Create a NobleBuilding class. It's basically the same as a regular building
 * with one exception: Only nobles allowed.
 */
export default class NobleBuilding extends Building {

    addResident(citizen) {
        if (!(citizen instanceof NobleCitizen))
            return false;

        return super.addResident(citizen);
    }
}