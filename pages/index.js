import { Field, Formik } from "formik";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import axios from "axios";

const IndexPage = () => {
  const handleFormSubmit = async (values) => {
    const { data } = await axios.post("http://localhost:3001/sign-in", {email: values.email, password: values.password});

    console.log("RESULT", data);
  };

  return (
    <div>
      <Formik onSubmit={handleFormSubmit} initialValues={{email: "", password: ""}}>
        {({handleSubmit}) => (
          <form onSubmit = {handleSubmit}>
            <p>
              <Field name="email">
                {({field}) =>(
                  <label>
                    Email<Input type="email" {...field} />
                  </label>
                )}
              </Field>
            </p>
            <p className="my-3">
              <Field name="password">
                {({field}) =>(
                  <label>
                    Password<Input type="password" {...field} />
                  </label>
                )}
              </Field>
            </p>
            <p>
              <Button type="submit">Sign In</Button>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default IndexPage;