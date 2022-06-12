// get form element
let form=document.getElementById("form1");
// Arrow function for form submit event
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let amount=document.getElementById("amount").value;
  let quality=document.getElementById("quality").value;
  let tip=0;
  let output=document.getElementById("text");
  // pre-defined service quality
  let required_quality=['great' , 'ok' , 'poor'];
  // check if input quality is valid
  if (required_quality.includes(quality)==false) {
    output.innerHTML="<p style ='color:red'>Service quality is invalid!</p>";
    return;
  }
  else {
    // check if input amount is valid
    if (amount < 5 || amount > 500) {
      output.innerHTML = "<p style = 'color:red' > Amount entered is invalid! </p>";
    }
    else {
      // $10 tip for great service quality
      if (quality==="great") {
        tip=10;
      }
      // $5 tip for ok service quality
      else if (quality=== "ok") {
        tip=5;
      }
      output.innerHTML="<p style='color:green' > The ticket was $ "+amount+" and the tip is $ "+tip+" for a "+quality+" service quality </p>"
    }
  }
});
