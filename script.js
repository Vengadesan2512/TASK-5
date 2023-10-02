const log=(param)=>console.log(param)
log("working")
const taskObj={
    name: "venkat",
    age: 25,
    hobbies: ["reading", "gaming", "traveling"],
    address: {
      city: "pudukkottai",
      state: "Tamil nadu"
    }
  }

  ///(1)FOR METHOD=>for obj
const objectValue = Object.values(taskObj);
log(objectValue);
for(let i = 1; i <objectValue.length;i++){log(objectValue)};
 ///FOR METHOD=>for array
const{hobbies}=taskObj;
log(hobbies);
//--------------------------------------------------------------------------------

//(2)FOR IN LOOP METHOD
//FOR IN LOOP FOR OBJ
for (keys in taskObj){
    log(`keys:${keys}
    values of array:${taskObj[keys]};
    `)
}
//FOR IN LOOP FOR ARRAY
for(keys in taskObj){
    log(
        `index of array: ${keys}
        value of array:${taskObj[keys]};
        `
    )
}

//(3)FOR OF LOOP METHOD
const countrystring="countrydata";
for(str of countrystring){
    log(str)
}

///(4)FOR EACH LOOP
hobbies.forEach((value,index,accArr)=>{
    log(`value:${value}
        index:${index}
        accarr:${accArr}
    `)
})

hobbies.forEach((values)=>{
    log(`object keys ${values}
    object value${hobbies[values]}
    `)
})
//----------------------------------------------------------------------
//(2)=>------------RFESUME

const resumeData={
    "NAME": "John Doe",
    "CONTACTS": {
      "email": "@GMAIL.COM",
      "address": "TAMIL NADU"
    },
    "education": [
      {
        "DEGREE": "BACHELORS OF CIVIL ENGINEERINGe",
       
      }
    ],
    "skills": [
      "Programming Languages: Java, JavaScript",
      "Web Development: HTML, CSS, React, Node.js",
      "Database Management: SQL, MongoDB",
      "Version Control: Git",
      "Agile Development"
    ],
    "languages": ["English (Fluent))"]
  }
  log(resumeData)