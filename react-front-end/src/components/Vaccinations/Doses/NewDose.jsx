// Libraries
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

// Components
import TextInput from "../../TextInput";
import DateInput from "../../DateInput";
import DateInput2 from "../../DateInput2";
import IconButton from "../../IconButton";

// Helpers
import { currentDate } from "../../../helpers/dateHelpers";
import { dataContext } from "../../Provider/DataProvider";

// Stylesheet
import "../../../styles/form.scss";

export default function NewDose() {
  const { addDoseRecord } = useContext(dataContext);

  const [date, setDate] = useState(currentDate());
  const [serialNumber, setSerialNumber] = useState("");
  const [adminSite, setAdminSite] = useState("");
  // may need to change logic for if users don't have a next scheduled date
  const [nextDoseDate, setNextDoseDate] = useState(null);

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
      doseData.date_taken &&
      doseData.serial_number &&
      doseData.administration_site
        ? setRedirect(true)
        : setValidate(true);
    });
  };

  return (
    <section className="doses-new">
      {redirect && <Redirect to="/vaccinations" />}
      <h1 className="doses-form--title">New Vaccination Dose</h1>
      <div className="doses-form--container">
        <div className="doses-form--field">
          <DateInput value={date} setInput={setDate} validate={validate}>
            Date:
          </DateInput>
          <TextInput
            required
            value={serialNumber}
            setInput={setSerialNumber}
            validate={validate}
          >
            Serial Number:
          </TextInput>
          <TextInput
            required
            value={adminSite}
            setInput={setAdminSite}
            validate={validate}
          >
            Administration Site:
          </TextInput>
          <div className="doses-form--next">
            <DateInput2
              notRequired
              date={nextDoseDate}
              setInput={setNextDoseDate}
            >
              Next Scheduled Date:
            </DateInput2>
          </div>
        </div>
        <div className="doses-form--user-action">
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
