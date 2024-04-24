async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  const learners = 'http://localhost:3003/api/learners';
  axios.get(learners)
  .then(resp => {
    const learners = resp.data;
    learners.forEach(learner => {
      const { fullName, email } = learner;
      const container = document.createElement('div');
      const learnerName = document.createElement('h3');
      const learnerEmail = document.createElement('div');

      container.appendChild(learnerName);
      container.appendChild(learnerEmail);

      learnerName.textContent = fullName;
      learnerEmail.textContent = email;

      learnerName.classList.add('card');
      learnerEmail.classList.add('card');

      document.querySelector('.cards').appendChild(container);
    })
  })
  .catch(error => {
    console.log(`An error occurred: ${error.message}`);
  })





  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
