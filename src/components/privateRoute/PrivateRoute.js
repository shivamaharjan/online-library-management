import React from 'react'
import { useSelector } from 'react-redux';
import { isStudent } from '../../utils';
import { Navigate } from 'react-router-dom';

function PrivateRoute({children, studentAccess = false}) {
  const userInfo = useSelector((state) =>state.auth.userInfo);
  return userInfo?.uid && (!isStudent(userInfo) || studentAccess === true ) ? children : <Navigate to="/login"/>
}

export default PrivateRoute