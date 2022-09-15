  const form = document.getElementById('form');
    const name = document.getElementById('name');
      const phone = document.getElementById('phone');
        const email = document.getElementById('email');
          const memo = document.getElementById('memo');

          form.addEventListener('submit', (e) =>{
            let messages =[]
            if (name.value === '' || name.value == null){
              messages.push('Name is required')
            }
          	e.preventDefault()
          
    validateInputs();  
 });
          const setError = (element, message) => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');
errorDisplay.innerText = message;
inputControl.classList.add('error');
inputControl.classList.remove('success');

          }

          const setSuccess = element =>{
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');
errorDisplay.innerText = '';
inputControl.classList.add('success');
inputControl.classList.remove('remove');
          };

          const isValidEmail = email =>{
          	const re = /^(([^<>([\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          	return re.test(String(email).toLowerCase());
          }

          const validateInputs = () => {
          	const nameValue = name.value.trim();
          	const phoneValue = phone.value.trim();
          	const emailValue = email.value.trim();
          	const memoValue = memo.value.trim();

          	if (nameValue === '')
          	{
setError(name, 'Name is required');

          	} 
          	else {
setSuccess(name);
          	}

if (phoneValue ===''){
	setError(phone, 'Phone number is required');
}
else if
          (phoneValue.length < 10 || phoneValue.length > 10)
{
    setError(phone, 'Phone number must be digits only')
}
		else if (phoneValue = String){
			setError(phone, 'Enter digits only please')
		}

else{
	setSuccess(phone);
}


if (emailValue ===''){
setError(email, 'Email is required');
          }
  else if(!isValidEmail(emailValue)){
setError(email,'Provide valid email address');
  }
  else {
  	setSuccess(email);
  }
}
