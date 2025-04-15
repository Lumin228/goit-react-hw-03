import css from '../ContactForm/ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useId } from 'react'

export const ContactForm = ({initialValues, onCreate, validation}) => {
    
    const phone = useId();
    const name = useId();

    return(
    <div>
        <Formik
        validationSchema={validation}
         initialValues={initialValues}
        onSubmit={onCreate}
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