# Example of Contextapi

suppose there are three components 
ChildA, ChildB, ChildC and want to pass data from app.js to ChildC and all componets are nested in each other like :-

```ChildA {
    ChildB {
        ChildC {

        }
    }
}
 ```
 
 so its difficult to use props so here we use contextApi 

 In contextApi ther are three stage 
 create, provider, consumer

## step 1 -
 create provider 
 ex :- 
 ```
 export const nameContext = createContext();
 export const genderContext = createContext();
export const salaryContext = createContext();
```

## step 2 - 
 provide data that need to pass to other components ex:-

 ``` 
 const name = "akshay";
  const gender = "male";
  const salary = 1_00_000; 
  ```

## step3-
 wrap the components where we want to send data

 ```
 <nameContext.Provider value={name}>
        <genderContext.Provider value={gender}>
          <salaryContext.Provider value={salary}>
            <ChildA />
          </salaryContext.Provider>
        </genderContext.Provider>
      </nameContext.Provider>
```

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
        </nameContext.Consumer>
```

## ContextApi - problem 

because of step 4 it was create callback hell like situation so its hard to maintain the code ,so solution for such situation is useContext-hook

 ```
 note:- if you want to use context hook after step 4 follow follwing step 
 ```

 ## step 4 -


 ```
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
 ```
