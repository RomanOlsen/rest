import { dbContext } from "../db/DbContext.js"

class MissionService {
  async getMissionForRat(ratID) {
    const mission = await dbContext.Missions.findById(ratID)
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