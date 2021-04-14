import { useContext } from "react"
import { dataContext } from "../hooks/DataProvider"
import VaccinationCard from "./VaccinationCard";

export default function VaccinationsList() {
  const { vaccinations } = useContext(dataContext)
  
  return (
    <div>

      <h1>Vaccinations</h1>
      <VaccinationCard />
    </div>
  )
}