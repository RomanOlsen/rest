import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { RatSchema } from '../models/Rat.js';
import { LocationSchema } from '../models/Location.js';
import { MissionSchema } from '../models/Mission.js';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Rats = mongoose.model('Rats', RatSchema)
  Locations = mongoose.model('Locations', LocationSchema)
  Missions = mongoose.model("Missions", MissionSchema)
}

export const dbContext = new DbContext()
