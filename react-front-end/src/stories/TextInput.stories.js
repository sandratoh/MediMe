import TextInput from "../components/TextInput";

export default { 
  title: 'TextInput',
  component: TextInput,
 };

export const Required = () => (
  <TextInput
    required
  >
    Medical Center:
  </TextInput>
);

export const Optional = () => (
  <TextInput
  >
    Medical Center:
  </TextInput>
);


const clinical_visits =  [
  {
    id: 1,
    user_id: 1,
    clinic_id: 3,
    referral_doctor_id: 2,
    date: "2018-09-09T07:00:00.000Z",
    type_of_visit: "HOSPITAL",
    reason_for_visit: "Stomach pain and vomit",
    doctor_diagnosis: "Food poisoning"
  },
  {
    id: 2,
    user_id: 1,
    clinic_id: 1,
    referral_doctor_id: 1,
    date: "2019-02-05T08:00:00.000Z",
    type_of_visit: "CLINIC",
    reason_for_visit: "Headache and fever",
    doctor_diagnosis: "Seasonal flu"
  },
];


export const updateFormInputField = () => (
  <TextInput
    id="standard"
    defaultValue={clinical_visits[0].clinic_id}
  >
    Medical Center:
  </TextInput>
);