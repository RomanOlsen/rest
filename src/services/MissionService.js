import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"
import { ratService } from "./RatService.js"

class MissionService {
  async updateMission(ID, updateData) {
    const mission = await dbContext.Missions.findById(ID).populate('rat')
    if (ID == null) {
      throw new BadRequest('invalid id')
    }
    //.populate('rat')
    mission.completed = updateData.completed
    await mission.save()


    return mission
  }

  async getMissionForRat(ratId) {
    // this.getMissions()
    // const ratNeedingMissions = await ratService.getRatbyID(ratId)

    // const mission = await dbContext.Missions.find().populate('rat', '-name -picture').find({ratId: ratId}).populate('location')
    // const missionsbyRat = await dbContext.Rats.findById(ratId).populate('missions')
    const lastTry = await dbContext.Missions.find({ ratId: ratId })//.populate('rat').populate('location')
    // const lastTry2 = await dbContext.Missions.find({"ratId": ratId}).populate('rat').populate('location')
    if (ratId == null) {
      throw new BadRequest('invalid id')
    }

    return lastTry
  }

  async getMissionForLocation(Id) {
    const lastTry = await dbContext.Missions.find({ locationId: Id }).populate('rat', '-name -picture')

    if (Id == null) {
      throw new BadRequest('invalid id')
    }

    return lastTry
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