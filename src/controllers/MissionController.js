import { response } from "express";
import { missionService } from "../services/MissionService.js";
import BaseController from "../utils/BaseController.js";

export class MissionController extends BaseController {
  constructor() {
    super('api/missions')
    this.router
      .post('', this.createMission)
      .put('/:id', this.updateMission)
      .get('', this.getMissions)
  }

  async updateMission(request, response, next) {
    try {
      const ID = request.params.id
      const missionData = request.body
      const mission = await missionService.updateMission(ID, missionData)
      response.send(mission)

    } catch (error) {
      next(error)
    }
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