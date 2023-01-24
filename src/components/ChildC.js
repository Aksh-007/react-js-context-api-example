import React from 'react';

//step 2-
// here we provide data 
import { nameContext, genderContext, salaryContext } from '../App.js'
const ChildC = () => {
    return (
        <nameContext.Consumer>
            {
                (name) => {
                    return (
                        <genderContext.Consumer>
                            {
                                (gender) => {
                                    return (
                                        <salaryContext.Consumer>
                                            {(salary) => {
                                                return (
                                                    <div>
                                                        <h1 style={{ fontSize: "2rem" }}>My name is {name}</h1>
                                                        <p>My gender is {gender}</p>
                                                        <p>My salary is {salary}</p>
                                                    </div>
                                                )
                                            }}
                                        </salaryContext.Consumer>
                                    )
                                }
                            }
                        </genderContext.Consumer>
                    )
                }
            }
        </nameContext.Consumer>
    );
}

export default ChildC;