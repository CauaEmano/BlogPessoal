const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️ Claro' : '🌙 Escuro';
});

document.getElementById('year').textContent = new Date().getFullYear();

function calculateReadingTime() {
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        const text = post.querySelector('p').innerText;
        const readingTime = Math.ceil(text.split(/\s+/).length / 200);
        post.querySelector('.read-time').innerText = `${readingTime} min de leitura`;
    });
}
calculateReadingTime();

const filterButtons = document.querySelectorAll('.filter-btn');
const allPosts = document.querySelectorAll('.post');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        allPosts.forEach(post => {
            if (filterValue === 'all' || post.getAttribute('data-category') === filterValue) {
                post.classList.remove('hidden');
            } else {
                post.classList.add('hidden');
            }
        });
    });
});
