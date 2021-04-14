import { findNameById } from './selectors';

const clinics = [
  {id: 1, name: "Dr. Dodek Wenner Family Practice"},
  {id: 2, name: "Dr. Howard Liang S.H. Inc."},
  {id: 3, name: "Vancouver General Hospital"},
];

const doctors = [
  {id: 1, name: "Dr. Gale Dodek-Wenner"},
  {id: 2, name: "Dr. Howard Liang"},
  {id: 3, name: "Dr. Gregory House"},
  {id: 4, name: "Dr. Sheldon Cooper"},
  {id: 5, name: "Dr. Drake Ramoray"},
  {id: 6, name: "Dr. Ross Geller"}
];

const labs = [
  {id: 1, name: "LifeLabs Medical Laboratory Services - Kingsway"},
  {id: 2, name: "Greig Associates X-Ray, Ultrasound & Mammography Inc. - Victoria Drive"},
  {id: 3, name: "West Coast Medical Imaging - New Westminster"},
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
