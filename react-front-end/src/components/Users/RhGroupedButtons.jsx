// Components
import TextButtonGroup from "../TextButtonGroup";

// Material UI Components
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

//Stylesheets
import "./RhGroupedButtons.scss";

const GroupedButtonTheme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#AED6B5",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f77777",
      contrastText: "#fff",
    },
  },
});

export default function RhGroupedButtons(props) {
  const rhGroupArray = [
    { id: 1, name: "POSITIVE" },
    { id: 2, name: "NEGATIVE" },
    { id: 3, name: "UNKNOWN" },
  ];

  const colorByStates = (validation, valueSelected) => {
    return validation && !valueSelected ? "secondary" : "primary";
  };

  const rhGroup = rhGroupArray.map((value) => {
    return (
      <ThemeProvider key={value.id} theme={GroupedButtonTheme}>
        <TextButtonGroup
          color={colorByStates(props.validate, props.state)}
          setState={() => props.onChange(value.name)}
          groupButtons
          selected={value.name === props.state}
          value={value.name}
        >
          {value.name}
        </TextButtonGroup>
      </ThemeProvider>
    );
  });

  return <div className="rh-grouped-buttons--container">{rhGroup}</div>;
}
