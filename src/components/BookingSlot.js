import React, { useEffect, useReducer } from 'react';
import '../css/BookingSlot.css'

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

function BookingSlot({ selectedDate }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { availableSlots, loading, error } = state;

  useEffect(() => {
    if (selectedDate) {
      dispatch({ type: 'FETCH_AVAILABLE_SLOTS_REQUEST' });

      // Simulating an asynchronous API call to fetch available slots
      setTimeout(() => {
        // Mocking the available slots data
        const mockAvailableSlots = [
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00',
        ];

        dispatch({
          type: 'FETCH_AVAILABLE_SLOTS_SUCCESS',
          payload: mockAvailableSlots,
        });
      }, 1000);
    }
  }, [selectedDate]);

  return (
    <div className="booking-slot">
      <h1>Available Slots</h1>
      {loading && <p>Loading available slots...</p>}
      {error && <p>Error loading available slots. Please try again.</p>}
      {availableSlots.length > 0 && (
        <div className="available-slots">
          {availableSlots.map((slot) => (
            <div
              key={slot}
              className={`slot`}
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
