import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import firebase from "../../../firebase";
//import Footer from '../../Footer';
import logo from '../../../assets/img//logo.png';
 
const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/signIn");
    } catch (error) {
      alert(error);
    }
  }, [history]);


    return (
      <div id="app">
        <section class="section">
          <div class="container mt-5">
            <div class="row">
              <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
              <div class="login-brand">
                  <img src={logo} alt="logo" width="200"  />
              </div>

                <div class="card card-primary">
                  <div class="card-header">
                    <h4>Criar conta</h4>
                  </div>

                  <div class="card-body">
                    <form 
                      onSubmit={handleSignUp}
                      method="POST"
                      action="#"
                      class="needs-validation"
                      novalidate=""
                    >
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          class="form-control"
                          name="email"
                          tabindex="1"
                          required
                          autofocus            
                        />
                        <div class="invalid-feedback">
                          Please fill in your email
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="d-block">
                          <label for="password" class="control-label">
                            Password
                          </label>
                        </div>
                        <input
                          id="password"
                          type="password"
                          class="form-control"
                          name="password"
                          tabindex="2"
                          required
                        />
                        <div class="invalid-feedback">
                          please fill in your password
                        </div>
                      </div>
                      <div class="form-group">
                        <button
                          type="submit"
                          class="btn btn-primary btn-lg btn-block"
                          tabindex="4"
                         // onClick={this.login} id='button-signin'
                        >
                          Criar conta
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="mt-5 text-muted text-center">
                  Você já possue uma conta?{" "}
                  <Link to="/SignIn">Entrar</Link>
                </div>
                <div className="simple-footer">
                 
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  export default withRouter(SignUp);