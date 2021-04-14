import { findNameById } from './selectors';

// Test data
const clinics = [
  {id: 1, name: "Dr. Dodek Wenner Family Practice"},
  {id: 2, name: "Dr. Howard Liang S.H. Inc."},
  {id: 3, name: "Vancouver General Hospital"}
];

const doctors = [
  {id: 1, name: "Dr. Gale Dodek-Wenner"},
  {id: 2, name: "Dr. Howard Liang"},
  {id: 3, name: "Dr. Gregory House"}
];

const labs = [
  {id: 1, name: "LifeLabs Medical Laboratory Services - Kingsway"},
  {id: 2, name: "Greig Associates X-Ray, Ultrasound & Mammography Inc. - Victoria Drive"},
  {id: 3, name: "West Coast Medical Imaging - New Westminster"}
];

const vaccinations = [
  {
  id: 1,
  user_id: 1,
  name: "Pfizer-BioNTech COVID-19",
  total_num_doses: 2
  },
  {
  id: 2,
  user_id: 1,
  name: "MMR Priorix",
  total_num_doses: 2
  }
];

// Selector test
describe('findNameById', () => {
  it('returns a string', () => {
    const arr = clinics;
    const id = 2;
    const result = findNameById(arr, id);

    expect(typeof result).toBe('string');
  });

  it('returns a string with a length matching the characters of requested name', () => {
    const arr = doctors;
    const id = 1;
    const result = findNameById(arr, id);

    const index = id - 1;
    const expectedLength = doctors[index].name.length;

    expect(result.length).toEqual(expectedLength)
  });

  it('returns null when no name is found', () => {
    const arr = labs;
    const id = 212;
    const result = findNameById(arr, id);

    expect(result).toEqual(null);
  });

  it('returns correct clinic name when given an clinic id that exists', () => {
    const arr = clinics;
    const id = 3;
    const result = findNameById(arr, id);

    const index = id - 1;

    expect(result).toEqual(clinics[index].name)
  });

  it('returns correct doctor name when given an doctor id that exists', () => {
    const arr = doctors;
    const id = 2;
    const result = findNameById(arr, id);

    const index = id - 1;

    expect(result).toEqual(doctors[index].name)
  });

  it('returns correct labs name when given an labs id that exists', () => {
    const arr = labs;
    const id = 3;
    const result = findNameById(arr, id);

    const index = id - 1;

    expect(result).toEqual(labs[index].name)
  });

  it('returns correct vaccination name when given an vaccination id that exists', () => {
    const arr = vaccinations;
    const id = 1;
    const result = findNameById(arr, id);

    const index = id - 1;

    expect(result).toEqual(vaccinations[index].name)
  });
});