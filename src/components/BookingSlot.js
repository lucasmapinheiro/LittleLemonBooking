import React, { useEffect, useReducer } from 'react';
import '../css/BookingSlot.css';

const initialState = {
  selectedDate: '',
  availableSlots: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_DATE':
      return { ...state, selectedDate: action.payload };
    case 'FETCH_AVAILABLE_SLOTS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_AVAILABLE_SLOTS_SUCCESS':
      return { ...state, availableSlots: action.payload, loading: false };
    case 'FETCH_AVAILABLE_SLOTS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

async function fetchAvailableSlots(selectedDate, dispatch) {
  dispatch({ type: 'FETCH_AVAILABLE_SLOTS_REQUEST' });

  try {
    const apiUrl = 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js';
    const response = await fetch(apiUrl);
    const data = await response.text();

    const apiFunction = new Function('date', data);
    const slots = apiFunction(new Date(selectedDate));

    if (Array.isArray(slots) && slots.length > 0) {
      dispatch({ type: 'FETCH_AVAILABLE_SLOTS_SUCCESS', payload: slots });
    } else {
      dispatch({ type: 'FETCH_AVAILABLE_SLOTS_FAILURE', payload: 'No available slots.' });
    }
  } catch (error) {
    dispatch({ type: 'FETCH_AVAILABLE_SLOTS_FAILURE', payload: error.message });
  }
}

function BookingSlot({ selectedDate }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { availableSlots, loading, error } = state;

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate, dispatch);
    }
  }, [selectedDate]);

  return (
    <div className="booking-slot">
      <h1>Available Slots</h1>
      {loading && <p>Loading available slots...</p>}
      {error && <p>{error}</p>}
      {availableSlots.length > 0 && (
        <div className="available-slots">
          {availableSlots.map((slot) => (
            <div
              key={slot}
              className="slot"
              onClick={() => {
                console.log(`Selected slot: ${slot}`);
              }}
            >
              {slot}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookingSlot;


