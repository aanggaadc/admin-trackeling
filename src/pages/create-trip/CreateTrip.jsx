import React from "react";
import "./createTrip.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Formik, Form } from "formik";

function createTrip() {
  return (
    <div>
      <div className="createTrip">
        <Sidebar />
        <div className="createTripContainer">
          <Navbar />
          <div className="formInput">
            <Formik
              initialValues={{
                destination: "",
                description: "",
                uploadImage: "",
              }}
            >
              <Form id="createTripForm">
                <div className="formGroup">
                  <label for="destination">Destination</label>
                  <input type="text" className="formControl" name="destination" id="destination"></input>
                  <label for="description">Description</label>
                  <input type="text" className="formControl" name="description" id="description"></input>
                  <label for="uploadImage">Upload Image</label>
                  <input type="text" className="formControl" name="uploadImage" id="uploadImage"></input>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default createTrip;
