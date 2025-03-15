import { Schema } from "mongoose";

export const LocationSchema = new Schema(
  {
    country: {type:String, required: true},
    area: {type:String, required: true},
    labels: {type:Array, required: true},



  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)

LocationSchema.virtual('Account', {ref: 'Account', localField: 'locationId', foreignField: '_id', justOne: true })
