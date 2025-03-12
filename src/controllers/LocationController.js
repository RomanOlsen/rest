import { locationService } from "../services/LocationService.js";
import BaseController from "../utils/BaseController.js";

export class LocationController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getLocations)
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