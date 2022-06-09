import React, { useState, Fragment } from "react";




const App = () => {

  return (
    <div className="app-container">
      <form >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
           
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form >
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
        
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
         
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;