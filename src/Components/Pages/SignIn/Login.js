import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import firebase from "../../../firebase";
import { AuthContext } from "./Auth.js";

  const SignIn = ({ history }) => {
    const handleLogin = useCallback(
      async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          history.push("/finalizar-agendamento");  
        } catch (error) {
          alert(error);
        }
      },
      [history]
    );
  
    const { currentUser } = useContext(AuthContext);
  
    if (currentUser) {
      return <Redirect to="/" />;
    }
  
    return (
      <div id="app">
        <section class="section">
          <div class="container mt-5">
            <div class="row">
              <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                <div class="login-brand">
                  <h1>Seven</h1>
                </div>

                <div class="card card-primary">
                  <div class="card-header">
                    <h4>Entrar</h4>
                  </div>

                  <div class="card-body">
                    <form 
                      onSubmit={handleLogin}
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
                          <div class="float-right">
                            <a
                              href="auth-forgot-password.html"
                              class="text-small"
                            >
                              Esqueceu a Senha?
                            </a>
                          </div>
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
                        >
                          Entrar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="mt-5 text-muted text-center">
                  Você ainda não tem uma conta?{" "}
                  <Link to="/SignUp">Criar conta</Link>
                </div>
                <div className="simple-footer">
                  <p>
                   
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  export default withRouter(SignIn);