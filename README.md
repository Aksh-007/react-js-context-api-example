# Example of Contextapi

suppose there are three components 
ChildA, ChildB, ChildC and want to pass data from app.js to ChildC and all componets are nested in each other like :-

```ChildA {
    ChildB {
        ChildC {

        }
    }
}```
 so its difficult to use props so here we use contextApi 

 In contextApi ther are three stage 
 create, provider, consumer

## step 1 -
 create provider 
 ex :- ```export const nameContext = createContext();
 export const genderContext = createContext();
export const salaryContext = createContext();
```
## step 2:- 
 provide data that need to pass to other components ex:-

 ``` const name = "akshay";
  const gender = "male";
  const salary = 1_00_000;```

## step3-
 wrap the components where we want to send data

 ```<nameContext.Provider value={name}>
        <genderContext.Provider value={gender}>
          <salaryContext.Provider value={salary}>
            <ChildA />
          </salaryContext.Provider>
        </genderContext.Provider>
      </nameContext.Provider>```

## step 4:-

now wrap it in a function ex-

```
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
                                                        <p>My gender is {salary}</p>
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
        </nameContext.Consumer>```