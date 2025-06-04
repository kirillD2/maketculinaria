// Smooth scrolling
document.querySelectorAll('.scroll-down').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.dataset.target);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
// Burger menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('show'));
});
// Modal logic
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');
closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
});
document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.recipe;
        const data = recipes.find(r => r.id == id);
        modalBody.innerHTML = `<h3>${data.title}</h3><p>${data.description}</p>`;
        modal.style.display = 'flex';
    });
});
// Form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    if (!name.value || !email.value || !message.value) {
        alert('Please fill in all fields');
        return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
        alert('Invalid email');
        return;
    }
    alert('Message sent');
    form.reset();
});
// Map placeholder
function initMap() {
    document.getElementById('map-container').textContent = 'Google Map Placeholder';
}
window.addEventListener('load', initMap);
// Slider
let current = 0;
function showSlide(index) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(c => c.style.display = 'none');
    for (let i = index; i < index + 6 && i < cards.length; i++) {
        cards[i].style.display = 'block';
    }
}
function nextSlide() {
    const cards = document.querySelectorAll('.card');
    current = (current + 6) % cards.length;
    showSlide(current);
}
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
    setInterval(nextSlide, 5000);
});
// Data arrays
const recipes = [];
recipes.push({
    id: 1,
    title: 'Recipe 1',
    description: 'Tasty dish number 1.'
});
recipes.push({
    id: 2,
    title: 'Recipe 2',
    description: 'Tasty dish number 2.'
});
recipes.push({
    id: 3,
    title: 'Recipe 3',
    description: 'Tasty dish number 3.'
});
recipes.push({
    id: 4,
    title: 'Recipe 4',
    description: 'Tasty dish number 4.'
});
recipes.push({
    id: 5,
    title: 'Recipe 5',
    description: 'Tasty dish number 5.'
});
recipes.push({
    id: 6,
    title: 'Recipe 6',
    description: 'Tasty dish number 6.'
});
recipes.push({
    id: 7,
    title: 'Recipe 7',
    description: 'Tasty dish number 7.'
});
recipes.push({
    id: 8,
    title: 'Recipe 8',
    description: 'Tasty dish number 8.'
});
recipes.push({
    id: 9,
    title: 'Recipe 9',
    description: 'Tasty dish number 9.'
});
recipes.push({
    id: 10,
    title: 'Recipe 10',
    description: 'Tasty dish number 10.'
});
recipes.push({
    id: 11,
    title: 'Recipe 11',
    description: 'Tasty dish number 11.'
});
recipes.push({
    id: 12,
    title: 'Recipe 12',
    description: 'Tasty dish number 12.'
});
recipes.push({
    id: 13,
    title: 'Recipe 13',
    description: 'Tasty dish number 13.'
});
recipes.push({
    id: 14,
    title: 'Recipe 14',
    description: 'Tasty dish number 14.'
});
recipes.push({
    id: 15,
    title: 'Recipe 15',
    description: 'Tasty dish number 15.'
});
recipes.push({
    id: 16,
    title: 'Recipe 16',
    description: 'Tasty dish number 16.'
});
recipes.push({
    id: 17,
    title: 'Recipe 17',
    description: 'Tasty dish number 17.'
});
recipes.push({
    id: 18,
    title: 'Recipe 18',
    description: 'Tasty dish number 18.'
});
recipes.push({
    id: 19,
    title: 'Recipe 19',
    description: 'Tasty dish number 19.'
});
recipes.push({
    id: 20,
    title: 'Recipe 20',
    description: 'Tasty dish number 20.'
});
recipes.push({
    id: 21,
    title: 'Recipe 21',
    description: 'Tasty dish number 21.'
});
recipes.push({
    id: 22,
    title: 'Recipe 22',
    description: 'Tasty dish number 22.'
});
recipes.push({
    id: 23,
    title: 'Recipe 23',
    description: 'Tasty dish number 23.'
});
recipes.push({
    id: 24,
    title: 'Recipe 24',
    description: 'Tasty dish number 24.'
});
recipes.push({
    id: 25,
    title: 'Recipe 25',
    description: 'Tasty dish number 25.'
});
recipes.push({
    id: 26,
    title: 'Recipe 26',
    description: 'Tasty dish number 26.'
});
recipes.push({
    id: 27,
    title: 'Recipe 27',
    description: 'Tasty dish number 27.'
});
recipes.push({
    id: 28,
    title: 'Recipe 28',
    description: 'Tasty dish number 28.'
});
recipes.push({
    id: 29,
    title: 'Recipe 29',
    description: 'Tasty dish number 29.'
});
recipes.push({
    id: 30,
    title: 'Recipe 30',
    description: 'Tasty dish number 30.'
});
recipes.push({
    id: 31,
    title: 'Recipe 31',
    description: 'Tasty dish number 31.'
});
recipes.push({
    id: 32,
    title: 'Recipe 32',
    description: 'Tasty dish number 32.'
});
recipes.push({
    id: 33,
    title: 'Recipe 33',
    description: 'Tasty dish number 33.'
});
recipes.push({
    id: 34,
    title: 'Recipe 34',
    description: 'Tasty dish number 34.'
});
recipes.push({
    id: 35,
    title: 'Recipe 35',
    description: 'Tasty dish number 35.'
});
recipes.push({
    id: 36,
    title: 'Recipe 36',
    description: 'Tasty dish number 36.'
});
recipes.push({
    id: 37,
    title: 'Recipe 37',
    description: 'Tasty dish number 37.'
});
recipes.push({
    id: 38,
    title: 'Recipe 38',
    description: 'Tasty dish number 38.'
});
recipes.push({
    id: 39,
    title: 'Recipe 39',
    description: 'Tasty dish number 39.'
});
recipes.push({
    id: 40,
    title: 'Recipe 40',
    description: 'Tasty dish number 40.'
});
recipes.push({
    id: 41,
    title: 'Recipe 41',
    description: 'Tasty dish number 41.'
});
recipes.push({
    id: 42,
    title: 'Recipe 42',
    description: 'Tasty dish number 42.'
});
recipes.push({
    id: 43,
    title: 'Recipe 43',
    description: 'Tasty dish number 43.'
});
recipes.push({
    id: 44,
    title: 'Recipe 44',
    description: 'Tasty dish number 44.'
});
recipes.push({
    id: 45,
    title: 'Recipe 45',
    description: 'Tasty dish number 45.'
});
recipes.push({
    id: 46,
    title: 'Recipe 46',
    description: 'Tasty dish number 46.'
});
recipes.push({
    id: 47,
    title: 'Recipe 47',
    description: 'Tasty dish number 47.'
});
recipes.push({
    id: 48,
    title: 'Recipe 48',
    description: 'Tasty dish number 48.'
});
recipes.push({
    id: 49,
    title: 'Recipe 49',
    description: 'Tasty dish number 49.'
});
recipes.push({
    id: 50,
    title: 'Recipe 50',
    description: 'Tasty dish number 50.'
});
recipes.push({
    id: 51,
    title: 'Recipe 51',
    description: 'Tasty dish number 51.'
});
recipes.push({
    id: 52,
    title: 'Recipe 52',
    description: 'Tasty dish number 52.'
});
recipes.push({
    id: 53,
    title: 'Recipe 53',
    description: 'Tasty dish number 53.'
});
recipes.push({
    id: 54,
    title: 'Recipe 54',
    description: 'Tasty dish number 54.'
});
recipes.push({
    id: 55,
    title: 'Recipe 55',
    description: 'Tasty dish number 55.'
});
recipes.push({
    id: 56,
    title: 'Recipe 56',
    description: 'Tasty dish number 56.'
});
recipes.push({
    id: 57,
    title: 'Recipe 57',
    description: 'Tasty dish number 57.'
});
recipes.push({
    id: 58,
    title: 'Recipe 58',
    description: 'Tasty dish number 58.'
});
recipes.push({
    id: 59,
    title: 'Recipe 59',
    description: 'Tasty dish number 59.'
});
recipes.push({
    id: 60,
    title: 'Recipe 60',
    description: 'Tasty dish number 60.'
});
recipes.push({
    id: 61,
    title: 'Recipe 61',
    description: 'Tasty dish number 61.'
});
recipes.push({
    id: 62,
    title: 'Recipe 62',
    description: 'Tasty dish number 62.'
});
recipes.push({
    id: 63,
    title: 'Recipe 63',
    description: 'Tasty dish number 63.'
});
recipes.push({
    id: 64,
    title: 'Recipe 64',
    description: 'Tasty dish number 64.'
});
recipes.push({
    id: 65,
    title: 'Recipe 65',
    description: 'Tasty dish number 65.'
});
recipes.push({
    id: 66,
    title: 'Recipe 66',
    description: 'Tasty dish number 66.'
});
recipes.push({
    id: 67,
    title: 'Recipe 67',
    description: 'Tasty dish number 67.'
});
recipes.push({
    id: 68,
    title: 'Recipe 68',
    description: 'Tasty dish number 68.'
});
recipes.push({
    id: 69,
    title: 'Recipe 69',
    description: 'Tasty dish number 69.'
});
recipes.push({
    id: 70,
    title: 'Recipe 70',
    description: 'Tasty dish number 70.'
});
recipes.push({
    id: 71,
    title: 'Recipe 71',
    description: 'Tasty dish number 71.'
});
recipes.push({
    id: 72,
    title: 'Recipe 72',
    description: 'Tasty dish number 72.'
});
recipes.push({
    id: 73,
    title: 'Recipe 73',
    description: 'Tasty dish number 73.'
});
recipes.push({
    id: 74,
    title: 'Recipe 74',
    description: 'Tasty dish number 74.'
});
recipes.push({
    id: 75,
    title: 'Recipe 75',
    description: 'Tasty dish number 75.'
});
recipes.push({
    id: 76,
    title: 'Recipe 76',
    description: 'Tasty dish number 76.'
});
recipes.push({
    id: 77,
    title: 'Recipe 77',
    description: 'Tasty dish number 77.'
});
const posts = [];
posts.push({
    id: 1,
    title: 'Post 1',
    text: 'Interesting content about cooking number 1.'
});
posts.push({
    id: 2,
    title: 'Post 2',
    text: 'Interesting content about cooking number 2.'
});
posts.push({
    id: 3,
    title: 'Post 3',
    text: 'Interesting content about cooking number 3.'
});
posts.push({
    id: 4,
    title: 'Post 4',
    text: 'Interesting content about cooking number 4.'
});
posts.push({
    id: 5,
    title: 'Post 5',
    text: 'Interesting content about cooking number 5.'
});
posts.push({
    id: 6,
    title: 'Post 6',
    text: 'Interesting content about cooking number 6.'
});
posts.push({
    id: 7,
    title: 'Post 7',
    text: 'Interesting content about cooking number 7.'
});
posts.push({
    id: 8,
    title: 'Post 8',
    text: 'Interesting content about cooking number 8.'
});
posts.push({
    id: 9,
    title: 'Post 9',
    text: 'Interesting content about cooking number 9.'
});
posts.push({
    id: 10,
    title: 'Post 10',
    text: 'Interesting content about cooking number 10.'
});
posts.push({
    id: 11,
    title: 'Post 11',
    text: 'Interesting content about cooking number 11.'
});
function filterRecipes(query) {
    return recipes.filter(r => r.title.toLowerCase().includes(query));
}
// Example usage of filter
console.log(filterRecipes('1').length);
const themeToggle = document.createElement('button');
themeToggle.textContent = 'Toggle Theme';
document.body.appendChild(themeToggle);
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
function helper1() {
    console.log('Helper 1');
    return i;
}
// end helper
function helper2() {
    console.log('Helper 2');
    return i;
}
// end helper
function helper3() {
    console.log('Helper 3');
    return i;
}
// end helper
function helper4() {
    console.log('Helper 4');
    return i;
}
// end helper
function helper5() {
    console.log('Helper 5');
    return i;
}
// end helper
function helper6() {
    console.log('Helper 6');
    return i;
}
// end helper
function helper7() {
    console.log('Helper 7');
    return i;
}
// end helper
function helper8() {
    console.log('Helper 8');
    return i;
}
// end helper
function helper9() {
    console.log('Helper 9');
    return i;
}
// end helper
function helper10() {
    console.log('Helper 10');
    return i;
}
// end helper
function logger1() {
    console.log('Logger 1');
}
function logger2() {
    console.log('Logger 2');
}
function logger3() {
    console.log('Logger 3');
}
function logger4() {
    console.log('Logger 4');
}
function logger5() {
    console.log('Logger 5');
}
function logger6() {
    console.log('Logger 6');
}
function logger7() {
    console.log('Logger 7');
}
