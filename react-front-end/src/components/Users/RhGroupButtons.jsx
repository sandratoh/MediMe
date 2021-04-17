
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextButton from "../TextButtonGroup";

const GroupedButtonTheme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#AED6B5",
      contrastText: "#fff"
    },
    secondary: {
      main: "#f77777",
      contrastText: "#fff",
    }
  },
});

export default function RhGroupedButtons(props) {
  

  
  const rhGroupArray = [
    { id: 1, name: "POSITIVE" },
    { id: 2, name: "NEGATIVE" },
    { id: 3, name: "UNKNOWN" },
  ];

  const colorByStates = (validation, valueSelected) => {
    return validation && !valueSelected ? "secondary" : "primary"
  };

  const rhGroup = rhGroupArray.map((value) => {
    return (
      <ThemeProvider theme={GroupedButtonTheme}>
      <TextButton
        key={value.id}
        color={colorByStates(props.validate, props.state)}
        setState={() => props.onChange(value.name)}
        groupButtons
        selected={value.name === props.state}
        value={value.name}
      >
        {value.name}
      </TextButton>
      </ThemeProvider>
    );
  });

  return <div className="grouped-buttons--container">{rhGroup}</div>;
}
