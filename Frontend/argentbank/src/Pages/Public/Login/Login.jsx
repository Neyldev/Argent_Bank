import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { accountService } from '@/_Services/accountService';

const Login = () => {

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const initialValues = {
        email: "",
        password: ""
    };


    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Veuillez entrer une adresse email valide").required("Veuillez entrer votre adresse email"),
        password: Yup.string().required("Veuillez entrer un mot de passe")
    });

    const onSubmit = async (data) => {

        try {
            accountService.loginUser(data)
                .then(response => {
                    accountService.saveToken(response.data.body.token);
                    navigate("/auth/user", { replace: true });

                })
                .catch(error => {
                    setMsg(error)
                    alert('Veuillez entrer une adresse mail et/ou un mot de passe valide')
                })
        } catch (error) {
            if (error.response) {
                setMsg(error.response)
            }
        }
    };

    return (
        <div className="main bg-dark">
            <section className="sign-in-content">

                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>

                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" placeholder="Email" autoComplete="off"></Field>
                            <ErrorMessage name="email" component="p" className='errorMessage' />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" placeholder="******" autoComplete="off"></Field>
                            <ErrorMessage name="password" component="p" className='errorMessage' />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                        </div>

                        <button className="sign-in-button" type='submit'>Sign In</button>
                    </Form>
                </Formik>
            </section>
        </div>
    );
};

export default Login;