const calculateBill = () =>{
    let billAmount = document.querySelector("#input-bill").value;
    billAmount = Number(billAmount);
    let tipAmount = document.querySelector("#input-tip").value;
    tipAmount = Number(tipAmount);

    let totalTip = ((billAmount/100) * tipAmount).toFixed(2);
    totalTip = Number(totalTip)
    const totalBill = (billAmount + totalTip).toFixed(2);

    const pBill = document.querySelector("#total-amount");
    pBill.innerHTML= `<strong>Total bill is: ${totalBill}$ </strong>`;
    const pTip = document.querySelector("#total-tip");
    pTip.innerHTML=`<strong>Total tip is: ${totalTip}$ </strong>`;
    return [totalBill,totalTip];
}