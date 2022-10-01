export const isObjectId = (objectId: string) => {
  const ObjectId = require('mongoose').Types.ObjectId
  return ObjectId.isValid(objectId) ? true : false
}
