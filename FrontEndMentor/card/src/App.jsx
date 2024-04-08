import Cards from "./components/Card";
import Completed from "./components/Completed";
import Form from "./components/Form";
import { useState } from "react";
export default function App() {
  const [buttonPressed, setButtonPressed] = useState(false);
  const [formData, setFormData] = useState({
    holder: "",
    number: "",
    dateMonth: "",
    dateYear: "",
    CVC: ""
  });
  const handleFormDataChange = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value
    }));
  }
  const handleButton = () => {
    setButtonPressed(!buttonPressed);
  }
  console.log(formData)

  return (
    <div className="grid md:gap-10 md:grid-cols-2">
      <Cards
        holderName={formData.holder}
        cardNumber={formData.number}
        dateMonth={formData.dateMonth}
        dateYear={formData.dateYear}
        CVC={formData.CVC}
      />
      <div>
        <div>
          {
            !buttonPressed
              ? <Form
                handleFormDataChange={handleFormDataChange}
                handleButton={handleButton}
                formData={formData}
              />
              : <Completed handleButton={handleButton} />
          }
        </div>
      </div>
    </div>
  )
}