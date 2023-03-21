
interface Submission {
  questionId: string;
  status: string;
}

enum Status {
  CORRECT = 'CORRECT',
  INCORRECT = 'INCORRECT',
  PARTIALLY_CORRECT =  'PARTIALLY_CORRECT',
}

interface Question {
  id: string;
  name: string;
  category: string;
}

export { Submission, Question, Status };
