import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userAnswers: {}, 
  score: 0,       
  questions: [],  
};

const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.userAnswers[questionId] = answer.toUpperCase();  
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;  
    },
    calculateScore: (state) => {
      let totalCorrectAnswers = 0;

      state.questions.forEach((question) => {
        if (state.userAnswers[question.id] === question.answer) {
          totalCorrectAnswers += 1; 
        }
      });

      state.score = totalCorrectAnswers * 5; 
    },
  },
});

export const { setAnswer, calculateScore, setQuestions } = examSlice.actions;
export default examSlice.reducer;
