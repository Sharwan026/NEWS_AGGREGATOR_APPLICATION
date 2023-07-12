import { Link } from 'react-router-dom';
import '../pages/register.css';
const Register = () =>{
    return(
        <div className="total1">
      <div>
  <meta charSet="UTF-8" />
  <title>Register Page</title>
  <link rel="stylesheet" media="screen" href="main.css" />
  <meta name="description" content="Online Kayıt Sayfası" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="author" content="Ebru Esra" />
  <div className="login">
    <h2>Register Page</h2>
    <form className="formregister" name="myForm" ng-controller="FormController">
      <p>Firstname <br />
        <input type="text" className="my-input" name="firstname" ng-model="userfirstname.text" required />
      </p>
      <div role="alert">
        <span className="error" ng-show="myForm.firstname.$error.required">Required!</span>
      </div>
      <p>Lastname <br />
        <input type="text" name="lastname" ng-model="userlastname.text" required />
      </p>
      <div role="alert">
        <span className="error" ng-show="myForm.lastname.$error.required">Required!</span>
      </div>
      <p>Phone Number <br />
        <input type="text" ng-model="userphone.text" required />
      </p>
      <p>Mail Adress <br />
        <input type="email" name="mail" ng-model="email.text" required />
      </p>
      <div role="alert">
        <span className="error" ng-show="myForm.mail.$error.required">Required!</span>
        <span className="error" ng-show="myForm.mail.$error.email">Not valid email!</span>
      </div>
      <p>Password <br />
        <input type="password" name="password" ng-model="password" placeholder="New Password" pw-check="confirmPassword" />
      </p>
      <p>Password Again <br />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" ng-model="confirmPassword" />
      </p>
      <br />
      <div role="alert">
        <span className="error" ng-show="myForm.password.$error.pwmatch"> Passwords don't match. </span>
      </div>
    </form>
    <br />
    <button className="button" type="submit" id="submit" value="Submit" ng-disabled="myForm.$invalid && submitted">Register</button>

  </div>
    <Link to="/#">Already have a SignIn</Link >
</div>

</div>
)
}
export default Register;