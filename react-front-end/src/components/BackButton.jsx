import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";

export default function BackButton() {

  const history = useHistory();
  
  return <ArrowBackIosIcon onClick={() => history.goBack()}/>

}