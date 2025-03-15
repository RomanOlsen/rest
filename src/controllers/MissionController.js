import { response } from "express";
import { missionService } from "../services/MissionService.js";
import BaseController from "../utils/BaseController.js";

export class MissionController extends BaseController {
  constructor() {
    super('api/missions')
    this.router
    .get('', this.getMissions)
    .post('', this.createMission)
  }

  async getMissions(request, response, next) {
    try {
      const missions = await missionService.getMissions()
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }
  async createMission(request, response, next) {
    try {
      const missionData = request.body
      const mission = await missionService.createMission(missionData)
      response.send(mission)
    } catch (error) {
      next(error)
    }
  }
}