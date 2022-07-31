import InvalidUuidError from '../../../errors/invalid-uuid.error';
import UniqueEntityId from '../unique-entity-id.vo';
import {v4 as uuidv4, validate as uuidValidate } from 'uuid';

function spyValidateMethod() {
  return jest.spyOn(UniqueEntityId.prototype as any, "validate" )
}

describe ("Unique EntityId Unit Tests", () => {
  it('shoul throw error when uuid is invalid', () => {
    const validateSpy = spyValidateMethod()
    expect(() => new UniqueEntityId('fake id')).toThrow(new InvalidUuidError)
    expect(validateSpy).toHaveBeenCalled();
  })

  it('should accept a uuid passed in constructor', () => {
    const validateSpy = spyValidateMethod()
    const uuid = "bf31ce92-c79a-4b5e-aeb3-413329afd816"
    const vo = new UniqueEntityId(uuid)
    expect(vo.value).toBe(uuid);
    expect(validateSpy).toHaveBeenCalled();
  })

  it('should accept a uuid passed in constructor', () => {
    const validateSpy = spyValidateMethod()
    const uuid = "bf31ce92-c79a-4b5e-aeb3-413329afd816"
    const vo = new UniqueEntityId(uuid)
    expect(uuidValidate(vo.value)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  })
})