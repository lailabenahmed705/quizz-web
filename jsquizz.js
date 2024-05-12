 const correctAnswers = {
  q1: 'b',
  q2: 'a',
  q3:'a',
  q4:'b',
  q5:'c',
  q6:'d',
  q7:'c',
  q8:'d',
  q9:'c',
  q10:'a',
  q11:'b',
  q12:'a',
  q13:'b',
  q14:'d',
  q15:'b',
  q16:'a',
  q17:'a',
  q18:'a',
  q19:'c',
  q20:'b',
};


function jsquizz() {
    const answers = {}; 
    const numQuestions = 20; // Nombre total de questions

  // Parcourir toutes les questions
  for (let i = 1; i <= numQuestions; i++) {
    const questionName = `q${i}`; // Nom de la question
    const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
    if (selectedOption) {
      answers[questionName] = selectedOption.value; // Ajoute la réponse à l'objet answers
      const correctAnswer = correctAnswers[questionName];
      if (correctAnswer !== undefined) { // Vérifiez si la réponse correcte est définie
        if (selectedOption.value === correctAnswer) {
          selectedOption.parentElement.classList.add('correct-answer'); // Colorer en vert pour la réponse correcte
        } else {
          selectedOption.parentElement.classList.add('incorrect-answer'); // Colorer en rouge pour la réponse incorrecte
        }
      } else {
        console.error(`La réponse correcte pour la question ${questionName} n'est pas définie.`);
      }
    } else {
      console.log(`Question ${i} n'a pas de réponse sélectionnée.`);
    }
  }

   
      let score = 0;
      for (const question in answers) {
        if (answers.hasOwnProperty(question) && correctAnswers.hasOwnProperty(question)) {
          if (answers[question] === correctAnswers[question]) {
            score++;
          }
        }
      
  
      const resultElement = document.getElementById('result');
      resultElement.textContent = `Votre score : ${score}/${numQuestions}`;
      }
      console.log("Score:", score);
      alert(`Votre score est de ${score} sur ${Object.keys(correctAnswers).length}.`);
      
      if (score >= 15) {
        alert("Félicitations! Vous avez réussi le quiz.");
      } else {
        alert("Désolé, vous n'avez pas réussi le quiz. Veuillez réessayer.");
      }
      

  }
