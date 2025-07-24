
import React, { useState } from 'react';

function QuoteForm() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    city: '',
    income: '',
    dependents: ''
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculateCover = (income, age, dependents) => {
    let base = income * 5;
    if (age < 30) base *= 0.8;
    else if (age > 50) base *= 1.2;
    base += dependents * 100000;
    return Math.round(base / 10000) * 10000;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = parseInt(form.age);
    const income = parseInt(form.income);
    const dependents = parseInt(form.dependents);
    const cover = calculateCover(income, age, dependents);
    const premium = Math.round(cover * 0.009);
    setResult({ cover, premium });
  };

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
        <input name="city" placeholder="City" onChange={handleChange} required />
        <input name="income" type="number" placeholder="Annual Income" onChange={handleChange} required />
        <input name="dependents" type="number" placeholder="Number of Dependents" onChange={handleChange} required />
        <button type="submit">Suggest Cover 🎯</button>
      </form>
      {result && (
        <div className="result-card">
          <h3>Recommended Cover: ₹{result.cover.toLocaleString()}</h3>
          <p>Monthly Premium: ₹{result.premium.toLocaleString()}</p>
          <button>WhatsApp Quote 📲</button>
        </div>
      )}
    </div>
  );
}

export default QuoteForm;
