import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import React, { useState, useEffect } from "react";

function Signup() {
    const [formObject, setFormObject] = useState({})

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("you've reached this point - sign up")
        // if (formObject.title && formObject.author) {
        //     API.saveUser({
        //         title: formObject.title,
        //         author: formObject.author,
        //         synopsis: formObject.synopsis
        //     })
        //         .then(res => loadBooks())
        //         .catch(err => console.log(err));
        // }
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    return (
        <Container fluid>
            <div className="hero is-primary is-bold">
                <div className="hero-body">
                    <div className="container animation">
                        <div className="animate seven">
                            <span>D</span><span>i</span><span>n</span><span>D</span><span>e</span><span>r</span>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section wrapper">
                <div className="container">
                    <h1 className="title">
                        Sign Up Form
                </h1>
                    <p className="subtitle">
                        Enter email and password below to access <strong>DinDer</strong>.
                </p>

                    <form>
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input onChange={handleInputChange} name="email_input" id="email_input" className="input" type="email" placeholder="Email">
                                </input>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <input onChange={handleInputChange} id="password-input" className="input" type="password" placeholder="Password">
                                </input>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <FormBtn id="form_signup" onClick={handleFormSubmit}>
                                    Sign Up
                                </FormBtn>
                            </p>
                        </div>
                    </form>
                    <p>Already have an account? Login <a href="/">HERE</a></p>
                </div>
            </section>

        </Container>
    )
}

export default Signup;