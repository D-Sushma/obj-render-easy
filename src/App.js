//OBJECT - RENDERING============================================
// don't need again and again rendering component, means 
// obj me jitne bhi bar jb bhi arr k undr obj change hoga hmara compo utni hi bar automatic render hoga
// first we create Object.js component and make object. than import in app.js


import './App.css';
import Header from './components/Header'
// 2. import object.js----------------------
import Object from './components/Object';


function App() {

  let task = "i am best";
  let name ="sushma";

  // OBJECT RENDERING============================================

  // 3. checking object that come or not (in form of arr)-----------------
  console.log(Object);

  // 4. use map() fun to receive whole element of object.js--------------------
  // map()--> have a callback fun & this fun have "ele" parameter inside (), than use arrow=> fun and curly braces{}
  // map(ele) --> this ele traverse all the obj frm object.js and receive that object (in ele parameter)
  // FatchObjArr called --> CUSTOM COMPONENT


 let FatchObjArr = Object.map((ele)=>{
  // 5.  checking that object comes or not (in form of object)-------------------------
    console.log(ele);

    // 6. render that component which need render agaIn and again-----and Fatchobjarr var directly render inside app.js return()
    return(
      <>
      {/* 8. pass ele in var info and go header.js */}
          <Header  data={{task, name}} info={ele}/>
      </>
    )
 })
  
  
  return (
    <div className="App">

     {/* 7. render CUSTOM COMPONENT FatchObjArr which we make var for objet mapping  */}
     {FatchObjArr}
     {/* <Header  data={{task, name}} /> */}
    
    </div>
  );
}


export default App;
