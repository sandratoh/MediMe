const fixtures = {
  clinics: [
    { id: 1, name: "Dr. Dodek Wenner Family Practice" },
    { id: 2, name: "Dr. Howard Liang S.H. Inc." },
    { id: 3, name: "Vancouver General Hospital" }
  ],
  clinical_visits: [
    {
      id: 1,
      user_id: 1,
      clinic_id: 3,
      doctor_id: 2,
      date: "2018-09-09T07:00:00.000Z",
      type_of_visit: "HOSPITAL",
      reason_for_visit: "Stomach pain and vomit",
      doctor_diagnosis: "Food poisoning"
    },
    {
      id: 2,
      user_id: 1,
      clinic_id: 1,
      doctor_id: 1,
      date: "2019-02-05T08:00:00.000Z",
      type_of_visit: "CLINIC",
      reason_for_visit: "Headache and fever",
      doctor_diagnosis: "Seasonal flu"
    },
  ],
  doctors: [
    { id: 1, name: "Dr. Sheldon Cooper" },
    { id: 2, name: "Dr. Drake Ramoray" },
    { id: 3, name: "Dr. Ross Geller" },
  ],
  labs: [
    { id: 1, name: "LifeLabs - Kingsway" },
    { id: 2, name: "Lifelabs - No.3 Rd" },
    { id: 3, name: "West Coast Medical Imaging - Burrard" },
  ],
  lab_records: [
    {
      id: 1,
      user_id: 1,
      date: "2018-09-15T07:00:00.000Z",
      referral_doctor_id: 1,
      lab_id: 3,
      type_of_test: "XRAY"
    },
    {
      id: 2,
      user_id: 1,
      date: "2019-03-30T07:00:00.000Z",
      referral_doctor_id: 2,
      lab_id: 1,
      type_of_test: "BLOOD"
    },
  ],
  medications: [
    {
      id: 1,
      name: "Warfarin",
      nickname: "Blood Clots",
      user_id: 1,
      prescribed_date: "2021-01-15T08:00:00.000Z",
      pharmacy_id: 1,
      prescribed_doctor_id: 2,
      refills_remaining: 3,
      instructions: "Take once per day, with or without food.",
      is_take_with_water: true,
      is_take_with_food: true
    },
    {
      id: 2,
      name: "Co-Trimoxazole",
      nickname: "Antibiotic",
      user_id: 1,
      prescribed_date: "2019-09-24T07:00:00.000Z",
      pharmacy_id: 2,
      prescribed_doctor_id: 2,
      refills_remaining: 0,
      instructions: "Double strenght, take 1/day for 3 weekd",
      is_take_with_water: true,
      is_take_with_food: true
    },
  ],
  pharmacies: [
    { id: 1, name: "Pharmasave - Broadway & Maple" },
    { id: 2, name: "Pure Integrative Pharmacy" },
    { id: 3, name: "The Pharmacy - Yaletown" },
  ],
  vaccinations: [
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
    },
  ],
  doses: [
    {
      id: 1,
      vaccination_id: 1,
      serial_number: "SB22S987NOW",
      date_taken: "2021-03-15T07:00:00.000Z",
      administration_site: "Sunset Community Centre",
      next_scheduled_dose: "2021-09-01T07:00:00.000Z"
    },
    {
      id: 2,
      vaccination_id: 2,
      serial_number: "AS8D7XX2LZK",
      date_taken: "2020-05-29T07:00:00.000Z",
      administration_site: "Cross Walk-In Clinic",
      next_scheduled_dose: null
    },
    {
      id: 3,
      vaccination_id: 2,
      serial_number: "KS3K9XZLZLK",
      date_taken: "2019-12-18T08:00:00.000Z",
      administration_site: "Safeway Pharmacy at Granville",
      next_scheduled_dose: "2020-05-29T07:00:00.000Z"
    },
  ],
  users: [
    {
    id: 1,
    first_name: "Rachel",
    last_name: "Greene",
    email: "rachel@email.com",
    password: "password",
    height_in_cm: 150,
    weight_in_lb: 120,
    blood_type: "O",
    rh_group: "POSITIVE"
    }
  ]
};

export default {
  defaults: { baseURL: "" },
  get: jest.fn(url => {
    if (url === "/api/clinics") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.clinical_visits
      });
    };

    if (url === "/api/clinics/list") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.clinics
      })
    };

    if (url === "/api/doctors") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.doctors
      })
    };

    if (url === "/api/labs") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.lab_records
      })
    };

    if (url === "/api/labs/list") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.labs
      })
    };
    
    if (url === "/api/medications") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.medications
      })
    };

    if (url === "/api/pharmacies") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.pharmacies
      })
    };
    
    if (url === "/api/vaccinations") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.vaccinations
      })
    };
    
    if (url === "/api/vaccinations/dose") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.doses
      })
    };

    if (url === "/api/users") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.users
      })
    };
  }),

  put: jest.fn((url, data) => {
    return Promise.resolve({
      status: 204,
      statusText: "No Content"
    })
  }),

  delete: jest.fn(url => {
    return Promise.resolve({
      status: 204,
      statusText: "No Content"
    })
  })
};