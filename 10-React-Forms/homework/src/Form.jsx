import React, {useState} from 'react';

export function validate(input){
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

  if(!input.password){
    errors.password="Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)){
    errors.password="Password is invalid";
  }

  return errors;
};

export default function  Form() {
  
  // const [username, setUsername]= useState("");
  // const [password, setPassword]= useState("");

  //estado input
  const [input, setInput] = useState({
    username:"",
    password:"",
  });

  //funcion cambio de input
  const handleInputChange = function(e){
    
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));

    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  //estado errors
  const [errors, setErrors]= useState({});

  return (
    <form>
      <div>
        <div>
          <label>Username:</label>
          <input 
            className={errors.username && 'danger'}
            type="text" name="username"  
            onChange={handleInputChange}
            value={input["username"]}
          />
          {errors.username && (
            <p className='danger'>{errors.username}</p>
          )}
        </div>
        
        <div>
          <label>Password:</label>
          <input 
            className={errors.password && "danger"}
            type="password" name="password"  
            onChange={handleInputChange}
            value={input["password"]}
          />
          {errors.password && (
            <p className='danger'>{errors.password}</p>
          )}

        </div>
          <input type="submit" name="submit" value="Submit" />
      </div>
      ...
    </form>
  )
}
