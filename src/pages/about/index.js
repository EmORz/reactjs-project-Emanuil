import React, { Component } from "react";
import Raper from "../../components/page-wrapper";
import styles from "./index.module.css";
import UserContext from "../../Context";
import Input from "../../components/Input";
import Button from "../../components/button/submit-button";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: "",
      clients: [],
      username: "",
      email: "",
      error: false
    };
  }

  componentDidMount() {
    this.loadClients();
  }
  loadClients = async () => {
    const promise = await fetch("http://localhost:9999/api/client");
    const clients = await promise.json();

    this.setState({
      clients,
    });
  };
  handleChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;
    this.setState(newState);
  };
  onSubmitC = (e) => {
    e.preventDefault();

    const time = Date();

    debugger;
    const { client, username, email } = this.state;

    if(username.length<=0 && client.length<=0 && email.length<=0){
      this.setState({
        error: {
          message: "Check the Form for errors",
          errors: {
            data: "Enter some data in boxs!",
          },
        },
      });
      return
    }

    const emailValidate = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)
    if(!emailValidate){
      this.setState({
        error: {
          message: "Check the Form for errors",
          errors: {
            data: "Your email is not valid!",
          }
        }
      });
      return
    }

    if(client.length<10 ){
      this.setState({
        error: {
          message: "Check the Form for errors",
          errors: {
            data: "Enter message with more than 10 characters!",
          }
        }
      });
      return
    }

    debugger;
    fetch("http://localhost:9999/api/client", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ client, username, email, time }),
    });

    window.location.reload();
  };

  static contextType = UserContext;

  render() {
    const { client, clients, username, email } = this.state;

    let errors = null;
    if (this.state.error) {
      errors = (
        <div>
          <h2>{this.state.error.message}</h2>
      <h2>{this.state.error.errors.data}</h2>

        </div>
      );
    }
    return (
      <Raper>
        <div className={styles.container}>
          <div>
            <h1>Контакти</h1>
            <br></br>
            {errors}
            <form onSubmit={this.onSubmitC}>
              <label for="client">
                Форма за споделяне на мнения за сайта? Коментарите не са
                анонимни!
              </label>
              <br />
              <br />

              <Input
                value={username}
                onChange={(e) => this.handleChange(e, "username")}
                label="Username"
                id="username"
              />
              <br />

              <Input
                value={email}
                onChange={(e) => this.handleChange(e, "email")}
                label="Email"
                id="email"
              />
              <br />

              <textarea
                value={client}
                onChange={(e) => this.handleChange(e, "client")}
                type="text"
                id="client"
                placeholder="Споделете впечетления ...?"
              ></textarea>
              <br />

              <Button title="Send" />
            </form>
            <h2>Коментари на клиенти</h2>
            {clients.map((o, index) => (
              <div>
                <h3>
                  {index}.{o.client}
                </h3>
                <p>Автор: {o.username}</p>
                <time>{o.time.split(" ").slice(0, 5).join("-")}</time>
              </div>
            ))}
            <h2>За връзка с нас:</h2>

            <div>
              <p>
                Център за обслужване на клиенти тел. 084 440 40 81, 084 480 48
                80 E-mail: service@emo.project.bg
              </p>
            </div>

            <div>
              <div>
                <br></br>
                <h2>
                  <b>Работно време</b> :
                </h2>
                <p>9.00 - 17.00 ч. - понеделник до петък</p>
              </div>
              <br></br>
              <div className={styles.formElement}>
                <form>
                  <label for="description">Форма за въпроси?</label>
                  <br />
                  <textarea
                    type="text"
                    id="description"
                    placeholder="Вашият въпрос ...?"
                  ></textarea>
                  <br />

                  <Button title="Send" />
                </form>
              </div>

              <br></br>
              <iframe
                width="800"
                height="800"
                src="https://docs.google.com/forms/d/e/1FAIpQLScK9OCKP18NZW1IhyVbRWoe6e1ISMZJaDL1nFr5w6R_rXhGSg/viewform"
              ></iframe>
              <br></br>
            </div>
            <br></br>
            <h1>Ще ни намериш тук!</h1>
            <iframe
              width="800"
              height="800"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385.8819870632953!2d26.52640124686279!3d43.52674131364883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40af0e86d16cde67%3A0x65e0237e5731aa47!2z0KDQtdCz0LjQvtC90LDQu9C90LAg0LHQuNCx0LvQuNC-0YLQtdC60LAg0J_RgNC-0YQuINCR0L7Rj9C9INCf0LXQvdC10LIg0KDQsNC30LPRgNCw0LQ!5e0!3m2!1sbg!2sbg!4v1561963978132!5m2!1sbg!2sbg"
            ></iframe>
            <br />
          </div>
        </div>
      </Raper>
    );
  }
}

export default About;
