import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"
import { ratService } from "./RatService.js"

class MissionService {

  async getMissionForRat(ratId) {
    // this.getMissions()
    // const ratNeedingMissions = await ratService.getRatbyID(ratId)

    const mission = await dbContext.Missions.find().populate('rat', '-name -picture').find({ratId: ratId}).populate('location')

    if (ratId == null) {
      throw new BadRequest('invalid id')
    }

    return mission
  }



  async createMission(newData) {
    const mission = await dbContext.Missions.create(newData)
    await mission.populate('rat', '-name -picture')
    await mission.populate('location')
    return mission
  }
  async getMissions() {
    const missions = await dbContext.Missions.find().populate('rat', '-name -picture').populate('location')
    
    return missions
  }
}
export const missionService = new MissionService()