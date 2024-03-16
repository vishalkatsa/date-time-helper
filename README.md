# **Date-Time-Helper-X**

Date-Time Helper X is a utility library for formatting dates and times in various formats ( Like This DDMMYYYY  ,  MMDDYYYY,  YYYYMMDD )  And converts time into 2 formats [ 12, 24 ] . 

It provides functions to easily convert and format dates and times according to different requirements.



## Installation
You can install Date-Time Helper X via npm:



```bash
npm install date-time-helper-x
```




# **Documentation - using Date-Time-Helper-X**
This package accept 3 parameters

  [1] Date Object or Date String 

  [2] You will Pass Dates only in this format ('MMDDYYY') | ('MMDDYYYY') | ('YYYYMMDD')

  [3] Here 2 parameters but you can use only 1 ('12') | ('24') 
.

## Example - 1 With Api
```javascript
import React from "react";
import { DateTime } from 'date-time-helper-x';

function YourComponent() {
    const [yourArrays, setYourArrays] = useState([]) // Your API arrays
  return (
    <div>
         {yourArrays?.map((item, index) =>
             <h5>{DateTime(item?.creatAt, "DDMMYYYY", '12')}</h5>
         )}
    </div>
  )
}

export default YourComponent
```

## Example - 2 Date Object
```javascript
import React from "react";
import { DateTime } from 'date-time-helper-x';

function YourComponent() {
    
    const myDate = new Date(); // Date Object

  return (
    <div>
  
        <h5>{DateTime(myDate, "DDMMYYYY", '12')}</h5>
        <h5>{DateTime(myDate, "DDMMYYYY")}</h5>
        <h5>{DateTime(myDate, '12')}</h5> // yoou can use single parameters 
   
    </div>
  )
}
export default YourComponent
```

## Example - 3 Date String
```javascript
import React from "react";
import { DateTime } from 'date-time-helper-x';

function YourComponent() {
    
    const myDate = "2019-01-01T00:00:00.000+00:00"; // Date String

  return (
    <div>
  
        <h5>{DateTime(myDate, "DDMMYYYY", '12')}</h5>
        <h5>{DateTime(myDate, "DDMMYYYY")}</h5>
        <h5>{DateTime(myDate, '12')}</h5> // yoou can use single parameters 
   
    </div>
  )
}
```
![Logo](https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9jNzRkNjBlNGUxNjZkMWMwYjI5NjZlYWE1ZmMzYmRhZT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.HrAnZeecqroh6AosrjLq21n9syE81R7xBzCK4XgiLBQ)

