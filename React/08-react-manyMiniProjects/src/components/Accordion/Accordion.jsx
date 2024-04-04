import { useState } from "react"
import "./accordion.css"
import data from './data'
const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    if (getCurrentId === selected) {
      return setSelected(null);
    }
    setSelected(getCurrentId);
  }
  const handleMultiSelection = (getCurrentId) => {
    const cpyMultiple = [...multiple];
    const indexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (indexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);

    } else {
      cpyMultiple.splice(indexOfCurrentId, 1);
    }
    console.log(cpyMultiple)
    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <button className= {`multi ${multiSelection ? 'green' : 'red'}`} onClick={() => setMultipleSelection(!multiSelection)}>Multi Selection</button>
      <div className="accordion">
        {
          data && data.length > 0 ?
            data.map((dataItem) => (
              <div className="item" key={dataItem.id}>
                <div className="title"
                  onClick={
                    multiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }>
                  <h3>{dataItem.question}</h3>
                  {
                    selected === dataItem.id ? <span>-</span> : <span>+</span>
                  }
                </div>
                {/* POKUD JE MULTIPLE SELECTION ON */}
                {multiSelection
                // POKUD ID JIZ EXISTUJE V SEZNAMU MULTIPLE TAK ZOBRAZ
                  ? multiple.indexOf(dataItem.id) !== (-1) && (
                    <div className="answer">{dataItem.answer}</div>
                  )
                  // POKUD JE MULTIPLE SEL. OFF
                  // POKUD JE SELECTED ID TAK ZOBRAZ
                  : selected === dataItem.id && (
                    <div className="answer">{dataItem.answer}</div>
                  )
                }
                {/* DALSI VARIANTA */}
                {/* {
                  selected === dataItem.id || multiple.indexOf(dataItem.id) !==-1 ?
                    <div className="answer">
                      {dataItem.answer}
                    </div>
                    :
                    null
                } */}
              </div>
            ))
            :
            <div>No data found</div>
        }
      </div>
    </div>
  )
}

export default Accordion