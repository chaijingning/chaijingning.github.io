const questions = document.querySelectorAll('.question');
questions.forEach(question => {
    question.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        answer.classList.toggle('active');

        const moreIcon = this.querySelector('.moreicon');
        const lessIcon = this.querySelector('.lessicon');
        const isOpen = answer.classList.contains('active');

        if (isOpen) {
            moreIcon.style.display = 'none';
            lessIcon.style.display = 'block';
        } else {
            moreIcon.style.display = 'block';
            lessIcon.style.display = 'none';
        }
    });
});