import css from '../ContactForm/ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useEffect, useId } from 'react'
import * as Yup from "yup";


export const ContactForm = ({onCreate}) => {
    
      const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    phone: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required")
  });

  const initValues = {username: "", phone: ""}

    const phone = useId();
    const name = useId();

    const onSubmit = (values, actions) => {
        onCreate(values);
        actions.resetForm();
    }

    return(
    <div>
        <Formik
        validationSchema={FeedbackSchema}
         initialValues={initValues}
        onSubmit={onSubmit}
        >
        <Form className={css.formGen}>
	        <Field type="text" name="username" id={name} />
            <ErrorMessage name="username" component="div" />

            <Field type="tel" name="phone" id={phone} />
            <ErrorMessage name="phone" component="div" />

			<button type="submit">Submit</button>
		</Form>
        </Formik>
    </div>
)
}