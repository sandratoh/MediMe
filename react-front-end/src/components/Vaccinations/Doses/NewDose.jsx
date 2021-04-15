// Libraries
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

// Components
import TextInput from "../../TextInput";
import DateInput from "../../DateInput";
import IconButton from "../../IconButton";

// Helpers
import { currentDate } from "../../../helpers/dateHelpers";
import { dataContext } from "../../hooks/DataProvider";

// Stylesheet
import "../../../styles/form.scss";

export default function DoseNew() {
  const { addDoseRecord, vaccinationDetailId } = useContext(dataContext);

  const [date, setDate] = useState(currentDate());
  const [serialNumber, setSerialNumber] = useState("");
  const [adminSite, setAdminSite] = useState("");
  // may need to change logic for if users don't have a next scheduled date
  const [nextDoseDate, setNextDoseDate] = useState(currentDate());

  // Redirect state
  const [redirect, setRedirect] = useState(false);

  // Validate form error state
  const [validate, setValidate] = useState(false);

  const onCancel = () => setRedirect(true);

  const onSave = () => {
    const doseData = {
      date_taken: date,
      serial_number: serialNumber,
      administration_site: adminSite,
      next_scheduled_dose: nextDoseDate,
    };

    addDoseRecord(doseData).then((res) => {
      (doseData.date_taken && doseData.serial_number && doseData.administration_site) 
        ? setRedirect(true) 
        : setValidate(true);
    });
  };

  return (
    <section className="clinics-new">
      {redirect && <Redirect to="/vaccinations" />}
      <h1 className="clinics-list--title">New Vaccination Dose</h1>
      <div className="clinics-form--container">
        <div className="clinics--form--field">
          <DateInput value={date} setInput={setDate} validate={validate}>
            Date:
          </DateInput>
          <TextInput required value={serialNumber} setInput={setSerialNumber} validate={validate}>
            Serial Number:
          </TextInput>
          <TextInput required value={adminSite} setInput={setAdminSite} validate={validate}>
            Administration Site:
          </TextInput>
          <DateInput
            notRequired
            value={nextDoseDate}
            setInput={setNextDoseDate}
          >
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
