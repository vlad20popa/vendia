import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {testAction} from "../../redux/actions/testActions";

export const LoginPage: FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(testAction("Login Rendered"))
  }, [dispatch])

  return(
    <div>Login Page</div>
  );
}