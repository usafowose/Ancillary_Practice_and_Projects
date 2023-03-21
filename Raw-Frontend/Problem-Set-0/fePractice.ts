import { Question, Submission, Status } from './models';

// fetch user data unique to user
// issue api call to get submissions: returns [{questionId: string; (maps to unique id property of first questions call) status: correct/incorrect/partially_correct(caps)}]
// for questions that were never attempted, those id's will not be returned in list of submissions (empty circle)
// css is pre-written
// in emphasized div below, the appended className should be unattempted in case of no attempt
// in category h2, we also need to add how many are correct/total - Ex: HTML - 4/4, CSS - 2/5, etc

// <div class="category">
//   <h2>HTML</h2>
//   <div class="question">
                                          //     <div class="status partially_correct"></div>
//     <h3>Stopwatch</h3>
//   </div>
//   <div class="question">
                                          //     <div class="status correct"></div>
//     <h3>Tic Tac Toe</h3>
//   </div>
// </div>



// fetchAndAppend('https://www.algoexpert.io/api/fe/questions', 'https://www.algoexpert.io/api/fe/submissions');

// async function fetchAndAppend(questionsUrl: string, submissionsUrl: string): Promise<void> {
//   const questions: Question[] = await getQuestions(questionsUrl);
//   const questionsByCategory = getQuestionsByCategory(questions);

//   const submissions: Submission[] = await getSubmissions(submissionsUrl);
//   const submissionsByCategory: Record<string, Submission[]> = getSubmissionsByCategory(questionsByCategory, submissions);

//   const categoryDiv = createCategory(questionsByCategory, submissionsByCategory);
//   const wrapper = document.getElementById('wrapper');
//   wrapper.append(categoryDiv);

// }


// async function getQuestions(url: string): Promise<Question[]> {
//   const response = await fetch(url);
//   const questions: Promise<Question[]> = await response.json();

//   return questions;
// }

// async function getSubmissions(url: string): Promise<Submission[]> {
//   const response = await fetch(url);
//   const submissions: Submission[] = await response.json();

//   return submissions;
// }

function getQuestionsByCategory(questions: Question[]): Record<string, Question[]> {
  const questionsByCategory = questions.reduce((acc, cv) => 
    acc[cv.category] ? { ...acc, [cv.category]: [...acc[cv.category], cv] } : { ...acc, [cv.category]: [cv] }, {} as Record<string, Question[]>
  );

  return questionsByCategory;
}

function getSubmissionsByCategory(questionsByCategory: Record<string, Question[]>, submissions: Submission[]): Record<string, Submission[]> {
  const submissionsByCategory: Record<string, Submission[]> = {};

  for (const [category, questions] of Object.entries(questionsByCategory)) {
    submissionsByCategory[category] = [ ...(submissionsByCategory[category] ?? []) , ...questions.reduce((acc, {id}, i, arr) => {
      return [...acc, ...submissions.filter(({questionId}, i, arr) => id === questionId)];
    },[])]
  }

  console.log(submissionsByCategory);
  return submissionsByCategory;
}

// function createCategory(questionsByCategory: Record<string, Question[]>, submissionsByCategory: Record<string, Submission[]>): HTMLDivElement {
//   for (const [category, questions] of Object.entries(questionsByCategory)) {
//     const categoryDiv = document.createElement('div');
//     categoryDiv.classList.add('category');
//     const h2 = document.createElement("h2");
//     h2.textContent = `${category} - ${submissionsByCategory[category].length}/${questions.length}`;
//     categoryDiv.append(h2);

//     questions.forEach(question => {
//       const questionDiv = document.createElement('div');
//       questionDiv.classList.add('question');

//       const h3QuestionName = document.createElement('h3');
//       h3QuestionName.textContent = question.name;

//       const categorySubmissions = submissionsByCategory[category];
//       const statusString = getQuestionStatusString(question, categorySubmissions);
//       const statusDiv = document.createElement('div');
//       statusDiv.classList.add(statusString);


//       questionDiv.append(statusDiv);
//       questionDiv.append(h3QuestionName);

//       categoryDiv.append(questionDiv)
//     });

//     return categoryDiv;
    
//   }
// }

// function getQuestionStatusString(question: Question, categorySubmissions: Submission[]): string {
//   let status = 'status ';
//   const submissionData = categorySubmissions.filter(cv => question.id === cv.questionId );

//   if (!submissionData.length) {
//     return status.concat('unattempted');
//   }

//   switch(submissionData[0].status) {
//     case Status.CORRECT :
//       return status.concat('correct');
//     case Status.INCORRECT:
//       return status.concat('incorrect');
//     case Status.PARTIALLY_CORRECT:
//       return status.concat('partially correct');
//     default:
//       return status;
//   }
// }

const questions = [
  {
      "id": "sign-up-form",
      "name": "Sign-Up Form",
      "category": "HTML"
  },
  {
      "id": "item-cart",
      "name": "Item Cart",
      "category": "HTML"
  },
  {
      "id": "spaghetti-recipe",
      "name": "Spaghetti Recipe",
      "category": "HTML"
  },
  {
      "id": "blog-post",
      "name": "Blog Post",
      "category": "HTML"
  },
  {
      "id": "rainbow-circles",
      "name": "Rainbow Circles",
      "category": "CSS"
  },
  {
      "id": "navbar",
      "name": "Navbar",
      "category": "CSS"
  },
  {
      "id": "pig-emoji",
      "name": "Pig Emoji",
      "category": "CSS"
  },
  {
      "id": "purchase-form",
      "name": "Purchase Form",
      "category": "CSS"
  },
  {
      "id": "algoexpert-products",
      "name": "AlgoExpert Products",
      "category": "CSS"
  },
  {
      "id": "testing-framework",
      "name": "Testing Framework",
      "category": "JavaScript"
  },
  {
      "id": "array-methods",
      "name": "Array Methods",
      "category": "JavaScript"
  },
  {
      "id": "event-target",
      "name": "Event Target",
      "category": "JavaScript"
  },
  {
      "id": "debounce",
      "name": "Debounce",
      "category": "JavaScript"
  },
  {
      "id": "this-binding",
      "name": "This Binding",
      "category": "JavaScript"
  },
  {
      "id": "promisify",
      "name": "Promisify",
      "category": "JavaScript"
  },
  {
      "id": "throttle",
      "name": "Throttle",
      "category": "JavaScript"
  },
  {
      "id": "curry",
      "name": "Curry",
      "category": "JavaScript"
  },
  {
      "id": "infinite-scroll",
      "name": "Infinite Scroll",
      "category": "DOM Manipulation"
  },
  {
      "id": "stopwatch",
      "name": "Stopwatch",
      "category": "DOM Manipulation"
  },
  {
      "id": "tic-tac-toe",
      "name": "Tic Tac Toe",
      "category": "DOM Manipulation"
  },
  {
      "id": "todo-list",
      "name": "Todo List",
      "category": "DOM Manipulation"
  },
  {
      "id": "typeahead",
      "name": "Typeahead",
      "category": "DOM Manipulation"
  },
  {
      "id": "tier-list",
      "name": "Tier List",
      "category": "DOM Manipulation"
  },
  {
      "id": "toasts",
      "name": "Toasts",
      "category": "DOM Manipulation"
  },
  {
      "id": "sudoku",
      "name": "Sudoku",
      "category": "DOM Manipulation"
  },
  {
      "id": "questions-list",
      "name": "Questions List",
      "category": "DOM Manipulation"
  }
];

const submissions: Submission[] = [
  {
      "questionId": "blog-post",
      "status": "CORRECT"
  },
  {
      "questionId": "throttle",
      "status": "INCORRECT"
  },
  {
      "questionId": "stopwatch",
      "status": "PARTIALLY_CORRECT"
  },
  {
      "questionId": "pig-emoji",
      "status": "CORRECT"
  },
  {
      "questionId": "todo-list",
      "status": "CORRECT"
  },
  {
      "questionId": "testing-framework",
      "status": "CORRECT"
  },
  {
      "questionId": "array-methods",
      "status": "INCORRECT"
  },
  {
      "questionId": "spaghetti-recipe",
      "status": "PARTIALLY_CORRECT"
  },
  {
      "questionId": "algoexpert-products",
      "status": "PARTIALLY_CORRECT"
  },
  {
      "questionId": "curry",
      "status": "CORRECT"
  },
  {
      "questionId": "toasts",
      "status": "INCORRECT"
  },
  {
      "questionId": "tic-tac-toe",
      "status": "CORRECT"
  },
  {
      "questionId": "event-target",
      "status": "CORRECT"
  },
  {
      "questionId": "debounce",
      "status": "PARTIALLY_CORRECT"
  },
  {
      "questionId": "item-cart",
      "status": "CORRECT"
  },
  {
      "questionId": "typeahead",
      "status": "CORRECT"
  },
  {
      "questionId": "tier-list",
      "status": "PARTIALLY_CORRECT"
  },
  {
      "questionId": "sudoku",
      "status": "CORRECT"
  },
  {
      "questionId": "rainbow-circles",
      "status": "INCORRECT"
  },
  {
      "questionId": "infinite-scroll",
      "status": "CORRECT"
  },
  {
      "questionId": "navbar",
      "status": "PARTIALLY_CORRECT"
  }
]