import { missionService } from "../services/MissionService.js";
import { ratService } from "../services/RatService.js";
import BaseController from "../utils/BaseController.js";

export class RatController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('', this.getRats)
      .get(':ratId/missions', this.getMissionForRat)

  }

  async getMissionForRat(req, res, next) {
    try {
      const ratId = req.params.ratId
      const mission = await missionService.getMissionForRat(ratId)
      res.send(mission)
    } catch (error) {
      next(error) 
    }
  }

  async getRats(request, response, next) {
    try {
      const rats = await ratService.getRats()
      response.send(rats)
    } catch (error) {
      next(error)
    }


  }
}