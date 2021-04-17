// Components
import TextInput from "../components/TextInput";

export default {
  title: "TextInput",
  component: TextInput,
};

export const Required = () => <TextInput required>Medical Center:</TextInput>;

export const Optional = () => <TextInput>Medical Center:</TextInput>;

export const Error = () => (
  <TextInput error required helperText="Can't be blank." validate value={""}>
    Medical Center:
  </TextInput>
);

export const updateFormInputField = () => (
  <TextInput id="standard" defaultValue="Stomach ache">
    Medical Center:
  </TextInput>
);
