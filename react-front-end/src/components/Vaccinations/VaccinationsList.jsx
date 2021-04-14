import { useContext } from "react"
import { dataContext } from "../hooks/DataProvider"

export default function VaccinationsList() {
  const { vaccinations } = useContext(dataContext)
  
  console.log("vaccinations:", vaccinations);
  return (
    <div>

      <h1>Vaccinations List Page</h1>
    </div>
  )
}