import { Schema } from "mongoose";

export const RatSchema = new Schema(
  {
    name: {type:String, required: true},
    callSign: {type:String, required: true},
    picture: {type:String, required: true},
    specialties: {type:Array, required: true}, // unsure what to put for type


  }
)