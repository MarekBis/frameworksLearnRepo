import Cards from "./components/Card";
import Form from "./components/Form";
import { useState } from "react";
export default function App() {
  const [formData, setFormData] = useState({
    holder: "Felicia Leire",
    number: "9535 6473 3224 191E",
    dateMonth: "MM",
    dateYear: "YY",
    CVC: "XXX"
  });
  const handleFormDataChange = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value
    }));
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
      <Form
        handleFormDataChange={handleFormDataChange}

      />
    </div>
  )
}