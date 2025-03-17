import { locationService } from "../services/LocationService.js";
import { missionService } from "../services/MissionService.js";
import BaseController from "../utils/BaseController.js";

export class LocationController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getLocations)
      .get('/:id/missions', this.getMissionForLocation) // NOTE DONT FORGET SLASH

  }

   async getMissionForLocation(request, response, next) {
      try {
        const locId = request.params.id
        const mission = await missionService.getMissionForLocation(locId)
        response.send(mission)
      } catch (error) {
        next(error)
      }
    }

  async getLocations(request, response, next) {
    try {
      const locations = await locationService.getLocations()
      response.send(locations)
    } catch (error) {
      next(error)
    }
  }
}