import React ,{useState} from "react";

function App() {
  
  const [questions, setQuestions]=useState([
  {
    question:"largest continent of the world is ?",
    answer:"Asia",
    userAnswer:"",
    flag:false,
  },
{
    question:"largest country in the world?",
    answer:"Russia",
    userAnswer:"",
    flag:false,
  }, 
  {
    question:"what is the capital of india?",
    answer:"Delhi",
    userAnswer:"",
    flag:false,
  },
  {
    question:"what is the capital city of tamil nadu?",
    answer:"chennai",
    userAnswer:"",
    flag:false,
  },
  {
    question:"how many continents are in the world ?",
    answer:"7",
    userAnswer:"",
    flag:false,
  },
  {
    question:"largest mountain in the world is?",
    answer:"mount everest",
    userAnswer:"",
    flag:false,

  },
  {
    question:"how many states are in india?",
    answer:"28",
    userAnswer:"",
    flag:false,
  },
  {
    question:"how many union territories are there in india?",
    answer:"8",
    userAnswer:"",
    flag:false,
  },
  {
    question:"what is the age eligibility for an individual to vote in india",
    answer:"18 and above",
    userAnswer:"",
    flag:false,
  },
  {
    question:"who is the first ever prime minister of india?",
    answer:"jawaharlal nehru",
    userAnswer:"",
    flag:false,
  }
]);
  function handleAnswer(index, event) {
    const updatedQuestions = [...questions];
    updatedQuestions[index].userAnswer = event.target.value;
    setQuestions(updatedQuestions);
  }
  function submitQuiz(){
  let count=0;
  questions.forEach((question) =>{
    if(question.userAnswer.trim().toLowerCase()===question.answer.toLowerCase()){
    question.flag=true;
    count  += count;
    }
    else{
      question.flag=false;
    }

  });

  alert(`number of questions answered right : ${count}/${questions.length}`)
 
  }

   return (
    <div className="App">
      <h1>general knowledge quiz</h1>
      <div>
        {questions.map(function(value,index){
          return(
          <div key={index}>
          <p>question {index +1}: {value.question}</p>
          <input type="text" placeholder="type your answer here" onChange={(event) => handleAnswer(index, event)}/>
          </div>
          )
        })}

        <>
        <button onClick={submitQuiz}>submit</button>
        </>
      </div>
      
    </div>
  );
}

export default App;
