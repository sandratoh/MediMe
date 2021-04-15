// Libraries
import { useContext, useState } from "react";
import { Redirect } from "react-router";

// Components
import BackButton from "../../BackButton";
import TextInput from "../../TextInput";
import DateInput from "../../DateInput";
import IconButton from "../../IconButton";

// Helpers
import { dataContext } from "../../hooks/DataProvider";

// Stylesheet
import "../../../styles/form.scss";

const doses = [
  {
    id: 1,
    vaccination_id: 1,
    serial_number: "SB22S987NOW",
    date_taken: "2021-03-15",
    administration_site: "Sunset Community Centre",
    next_scheduled_dose: "2021-09-01"
  }
];

export default function DoseEdit() {
  
  const [redirect, setRedirect] = useState('');
  
  const { vaccinationDetail, vaccinations, doseDetail, allDoses, editDoseRecord } = useContext(dataContext);
  
  // Mock id until merged with GET dose branch
  const mockVaccinationDetail = 7;
  const mockDoseDetail = 8;

  // Find vaccine from vaccine id
  const vaccination = vaccinations.find((vaccination) => vaccination.id === mockVaccinationDetail);

  // Fnd dose from dose id
  const dose = allDoses.find((dose) => dose.id === mockDoseDetail);

  console.log('vaccination', vaccination);
  console.log('dose', dose);

  const [serialNum, setSerialNum] = useState(doses[0].serial_number);
  const [dateTaken, setDateTaken] = useState(doses[0].date_taken);
  const [administrationSite, setAdministrationSite] = useState(doses[0].administration_site);
  const [nextDose, setNextDose] = useState(doses[0].next_scheduled_dose);

  const onCancel = () => setRedirect(true);

  const onSave = () => {
    const doseDetail = {
      id: mockVaccinationDetail,
      serial_number: serialNum,
      date_taken: dateTaken,
      administration_site: administrationSite,
      next_scheduled_dose: nextDose,
      doseId: mockDoseDetail
    }
    console.log('doseDetail before save:', doseDetail);

    editDoseRecord(doseDetail).then((res) => {
      console.log('updated doseDetail:', doseDetail);
      console.log('res', res);
      // to uncomment after merging
      // !res.data.error && setRedirect(true);
    });
  };

  return (
    <section className="clinics-new">
      {redirect && <Redirect to="/vaccinations" />}
      <div className="clinics-list--icons">
        <BackButton />
      </div>
      <h1 className="clinics-list--title">Update Vaccination Dose</h1>
      <div className="clinics-form--container">
        <div className="clinics--form--field">
          <DateInput date={dateTaken} onChange={setDateTaken}>
            Date Taken:
          </DateInput>
          
          <TextInput required value={serialNum} setInput={setSerialNum}>
            Serial Number:
          </TextInput>
          <TextInput value={administrationSite} setInput={setAdministrationSite} >
            Administration Site:
          </TextInput>

          <DateInput notRequired date={nextDose} onChange={setNextDose} >
            Next Scheduled Date:
          </DateInput>
        </div>
        <div className="clinics-form--user-action">
          <IconButton
            cancel
            variant="outlined"
            color="secondary"
            onClick={onCancel}
          >
            Cancel
          </IconButton>
          <IconButton
            save
            variant="contained"
            color="secondary"
            onClick={onSave}
          >
            Save
          </IconButton>
        </div>
      </div>
    </section>
  );
}