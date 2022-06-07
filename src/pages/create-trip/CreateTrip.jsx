import { React, useState } from "react";
import "./createTrip.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Formik, Form } from "formik";

function CreateTrip() {
  const [file, setFile] = useState("");

  return (
    <div>
      <div className="createTrip">
        <Sidebar />
        <div className="createTripContainer">
          <Navbar />
          <div className="formInput">
            <div className="title">CREATE TRIP</div>
            <Formik
              initialValues={{
                destination: "",
                description: "",
                file: "",
              }}
              onSubmit={(values) => {
                const formData = new FormData();
                formData.append("destination", values.destination);
                formData.append("description", values.description);
                formData.append("file", values.file);

                console.log(values);
              }}
            >
              {({ handleSubmit, handleChange, setFieldValue }) => (
                <Form id="createTripForm">
                  <div className="formGroup">
                    <label for="destination">Destination</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setFieldValue("destination", e.target);
                      }}
                      className="formControl"
                      name="destination"
                      id="destination"
                    ></input>
                    <label for="description">Description</label>
                    <textarea
                      type="text"
                      onChange={(e) => {
                        setFieldValue("description", e.target);
                      }}
                      className="formControl"
                      name="description"
                      id="description"
                    ></textarea>
                    <label for="uploadImage">Upload Image</label>

                    <input
                      type="file"
                      accept="image/*"
                      name="file"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                        setFieldValue("file", e.currentTarget.files[0]);
                      }}
                    />
                    <div className="imgContainer">
                      <img className="imgUpload img-fluid" src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} />
                    </div>
                  </div>
                  <div className="btn">
                    <button type="submit" onClick={handleSubmit} className="btnSubmit">
                      Submit
                    </button>
                    <button className="btnBack" type="button">
                      Back
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
