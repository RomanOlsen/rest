import { missionService } from "../services/MissionService.js";
import BaseController from "../utils/BaseController.js";

export class MissionController extends BaseController {
  constructor() {
    super('api/missions')
    this.router
      .get('', this.getMissions)
  }
  async getMissions(request, response, next) {
    try {
      const missions = await missionService.getMissions()
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }
}