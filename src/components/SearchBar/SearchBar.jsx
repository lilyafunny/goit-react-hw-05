import { Formik, Form, Field } from "formik"
import s from './SearchBar.module.css'

const SearchBar = ({ handleChangeQuery }) => {


    const onSubmit = values => {
        const query = values.query.trim();
        if (!query) {
            <h2>Please enter a query</h2>;
            return;
        }
        console.log(query);
        handleChangeQuery(query);

    };

    const initialValues = {
        query: '',
    };


    return (
        <div className={s.cont}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <Field name='query' />
                    <button className={s.btn} type="submit">Search</button>
                </Form>
            </Formik>

        </div>
    )
}

export default SearchBar