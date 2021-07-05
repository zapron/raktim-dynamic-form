import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  let [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    todayDate: '',
    orderDueDate: '',
    dateOfEvent: '',
    timeOfEvent: '',
    eventLocation: '',
    typeOfEvent: '',
    noOfGuests: '',
    pickUpTime: '',
    deliveryMethod: ''
  });
  const onChangeHandler = e => {
    let { type, name, value, checked } = e.target;
    if (type === 'text' || type === 'radio') {
      form[name] = value;
    } else if (type === 'checkbox') {
      form[name] = [...(form[name] || []), value];
      if (!checked) {
        form[name] = [...form[name].filter(f => f !== value)];
      }
    }
    setForm({ ...form });
  };
  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(form);
    console.log(
      `Unfilled fields ${Object.values(form).filter(d => d === '').length}`
    );
  };
  return (
    <form action="/">
      <div className="info">
        <input
          className="fname"
          type="text"
          name="name"
          placeholder="Full name"
          onChange={onChangeHandler}
          value={form.name}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={onChangeHandler}
          value={form.email}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          onChange={onChangeHandler}
          value={form.phone}
        />
        <input
          type="text"
          name="todayDate"
          placeholder="Today's date"
          onChange={onChangeHandler}
          value={form.todayDate}
        />
        <input
          type="text"
          name="orderDueDate"
          placeholder="Order due date"
          onChange={onChangeHandler}
          value={form.orderDueDate}
        />
        <input
          type="text"
          name="dateOfEvent"
          placeholder="Date of event"
          onChange={onChangeHandler}
          value={form.dateOfEvent}
        />
        <input
          type="text"
          name="timeOfEvent"
          placeholder="Time of event"
          onChange={onChangeHandler}
          value={form.timeOfEvent}
        />
        <input
          type="text"
          name="eventLocation"
          placeholder="Event location"
          onChange={onChangeHandler}
          value={form.eventLocation}
        />
        <input
          type="text"
          name="typeOfEvent"
          placeholder="Type of event"
          onChange={onChangeHandler}
          value={form.typeOfEvent}
        />
        <select
          name="noOfGuests"
          type="select"
          onChange={e => {
            let x = form;
            x.noOfGuests = e.target.value;
            setForm(x);
          }}
        >
          <option value="number" disabled selected>
            Number of guests
          </option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
        <select
          name="pickUpTime"
          onChange={e => {
            let x = form;
            x.pickUpTime = e.target.value;
            setForm(x);
          }}
        >
          <option value="time" disabled selected>
            Pick up time
          </option>
          <option value="8:00am">8:00am</option>
          <option value="9:00am">9:00am</option>
          <option value="10:00am">10:00am</option>
          <option value="12:00pm">12:00pm</option>
          <option value="1:00pm">1:00pm</option>
          <option value="3:00pm">3:00pm</option>
          <option value="6:00pm">6:00pm</option>
          <option value="7:00pm">7:00pm</option>
        </select>
      </div>
      <h3>Delivery Metod</h3>
      <div className="metod">
        <div>
          <input
            type="radio"
            value="For pick up"
            onChange={onChangeHandler}
            id="radioOne"
            name="deliveryMethod"
            checked={form.deliveryMethod === 'For pick up'}
          />
          <label for="radioOne" className="radio">
            For pick up
          </label>
        </div>
        <div>
          <input
            type="radio"
            value="For delivery"
            onChange={onChangeHandler}
            id="radioTwo"
            name="deliveryMethod"
            checked={form.deliveryMethod === 'For delivery'}
          />
          <label for="radioTwo" className="radio">
            For delivery
          </label>
        </div>
      </div>
      <button href="/" className="button" onClick={onSubmitHandler}>
        Submit
      </button>
      <p style={{ color: 'red' }}>{`Unfilled fields ${
        Object.values(form).filter(d => d === '').length
      }`}</p>
    </form>
  );
}
