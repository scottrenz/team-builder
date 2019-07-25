import React from 'react';
import useForm from "./useForm";

const Form = (props) => {
    const { values, handleChange, handleSubmit } = useForm(getData);

    const getData = values => {
        props.setMember( [...props.member, ...values] );
      };

    return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">

          <form onSubmit={handleSubmit}>
          <div className="field">
                <label className="label">Name</label>
                <div className="control">
                <input className="input" type="text" name="name" onChange={handleChange} value={values.name} required />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                <input className="input" type="email" name="email" onChange={handleChange} value={values.email} required />
                </div>
              </div>
              <div className="field">
                <label className="label">Role</label>
                <div className="control">
                <input className="input" type="text" name="role" onChange={handleChange} value={values.role} required />
                </div>
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;