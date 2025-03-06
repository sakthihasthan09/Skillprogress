// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const paths = document.querySelectorAll('.path');

    paths.forEach(path => {
        const skills = path.querySelectorAll('.skill');
        skills.forEach((skill, index) => {
            // Disable all skills initially
            skill.classList.remove('enabled');
            skill.classList.add('disabled');
            skill.style.pointerEvents = 'none';

            // Enable the first skill in each path
            if (index === 0) {
                skill.classList.add('enabled');
                skill.classList.remove('disabled');
                skill.style.pointerEvents = 'auto';
            }

            // Add click event listener to each skill
            skill.addEventListener('click', () => {
                // Toggle completion status
                skill.classList.toggle('completed');

                // Enable the next skill if the current one is completed
                if (skill.classList.contains('completed') && index < skills.length - 1) {
                    const nextSkill = skills[index + 1];
                    nextSkill.classList.add('enabled');
                    nextSkill.classList.remove('disabled');
                    nextSkill.style.pointerEvents = 'auto';
                } else if (!skill.classList.contains('completed') && index < skills.length - 1) {
                    // If the current skill is uncompleted, disable the next skill and all subsequent skills
                    for (let i = index + 1; i < skills.length; i++) {
                        skills[i].classList.remove('enabled');
                        skills[i].classList.add('disabled');
                        skills[i].style.pointerEvents = 'none';
                        skills[i].classList.remove('completed');
                    }
                }
            });
        });
    });
});
