type Enum = Record<string | number, string | number>;

function getNumericEnumValues(enumeration: Enum): number[] {
  return Object.values(enumeration)
    .filter(val => typeof val === 'number')
    .map(val => val as number);
}

export { getNumericEnumValues };
