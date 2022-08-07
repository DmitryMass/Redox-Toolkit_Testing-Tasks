import React from 'react';
import FirstName from './FIrstName';
import LastName from './LastName';
import { useDispatch } from 'react-redux';
import { setFirstName, setLastName } from '../../Store/Slice/userSlice';

const User = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <input
          name="firstName"
          type="text"
          onChange={(e) => dispatch(setFirstName(e.target.value))}
        />
        <div>
          <span>FirstName:</span>
          <FirstName />
        </div>
      </div>
      <div>
        <input
          name="lastName"
          type="text"
          onChange={(e) => dispatch(setLastName(e.target.value))}
        />
        <div>
          <span>LastName:</span>
          <LastName />
        </div>
      </div>
    </div>
  );
};

export default User;
