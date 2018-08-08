
(() => {
  const form = document.querySelector('form');
  const formResponse = document.querySelector('#js-form-response');

    function toggleButtonState(button) {
      button.disabled = !button.disabled;
      button.innerHTML = button.disabled ? '<div class="loading-dots"></div>' : 'SEND';
      // button.getAttribute('data-label');
    }




    form.onsubmit = e => {
      e.preventDefault();

    // Escape if the honeypot has been filled
   
    if(document.getElementById("honeypot").value !== "") return false;
     
    const submitButton = e.target.querySelector('[type="submit"]');
    toggleButtonState(submitButton);

      //Prep data to send
      const data = {};
      const formElements = Array.from(form);


      formElements.map(input => (data[input.name] = input.value));
      console.log(JSON.stringify(data));

      //construct http request
      var xhr = new XMLHttpRequest();
      xhr.open(form.method,form.action,true);
      xhr.setRequestHeader('Accept','application/json; charset=utf-8');
      xhr.setRequestHeader('Content-Type','application/json; charset=utf-8');
      xhr.send(JSON.stringify(data));
      xhr.onloadend = response => {
        toggleButtonState(submitButton);
        if(response.target.status === 200) {
          form.reset();
          formResponse.innerHTML = 'Thanks for the message. I\'ll be in touch shortly'
        }else{
          formResponse.innerHTML = 'Something went wrong';
          console.error(JSON.parse(response.target.response).message);
        }
      };
    };
})();