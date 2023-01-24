import React, { useContext } from 'react'

//here we are using contextapi hooks
import {nameContext, genderContext, salaryContext} from '../App.js'

const ChildD = () => {

    const name = useContext(nameContext);
    const gender = useContext(genderContext);
    const salary = useContext(salaryContext);
  return (
    <>
        <h1 style={{fontSize:"1rem"}}>
            hi my name is {name} and my gender is {gender} and i earn {salary}
        </h1>
    </>
  )
}

export default ChildD;
