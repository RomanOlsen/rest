import { dbContext } from "../db/DbContext.js"

class MissionService {
  async getMissions() {
    const missions = await dbContext.Missions
    .find()
    .populate('Rats', 'name')
    .populate('Locations', 'country') 
    return missions
  }
}
export const missionService = new MissionService()