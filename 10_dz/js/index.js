// const links = document.querySelectorAll('#linkList a');
// links.forEach(link => {
//     const href = link.getAttribute('href');
//     if (href.startsWith('http://') || href.startsWith('https://')) {
//         link.classList.add('dotts');
//     }
// });

// function toggle(event, element) {
//     event.stopPropagation();
//     element.classList.toggle('open');
// }



// const list = document.getElementById('book-list');
// let lastSelectedIndex = null;

// list.addEventListener('click', (event) => {
//     if (event.target.tagName !== 'LI') return;

//     const items = Array.from(list.children);
//     const clickedIndex = items.indexOf(event.target);

//     if (event.shiftKey && lastSelectedIndex !== null) {
//         const [start, end] = [lastSelectedIndex, clickedIndex].sort((a, b) => a - b);
//         items.forEach((item, i) => {
//             if (i >= start && i <= end) item.classList.add('selected');
//         });
//     } else if (event.ctrlKey) {
//         event.target.classList.toggle('selected');
//         lastSelectedIndex = clickedIndex;
//     } else {
//         items.forEach(item => item.classList.remove('selected'));
//         event.target.classList.add('selected');
//         lastSelectedIndex = clickedIndex;
//     }
// });


// const headers = document.querySelectorAll('th');
// const tbody = document.getElementById('product-list');
// let sortDir = {};

// headers.forEach(header => {
//     header.onclick = () => {
//         const col = +header.dataset.column;
//         const type = header.dataset.type;
//         sortDir[col] = sortDir[col] === 'asc' ? 'desc' : 'asc';

//         const rows = Array.from(tbody.rows);

//         rows.sort((a, b) => {
//             let aVal = a.cells[col].textContent.trim();
//             let bVal = b.cells[col].textContent.trim();

//             if (type === 'number') {
//                 aVal = +aVal;
//                 bVal = +bVal;
//             } else {
//                 aVal = aVal.toLowerCase();
//                 bVal = bVal.toLowerCase();
//             }

//             if (aVal < bVal) return sortDir[col] === 'asc' ? -1 : 1;
//             if (aVal > bVal) return sortDir[col] === 'asc' ? 1 : -1;
//             return 0;
//         });

//         rows.forEach(row => tbody.appendChild(row));
//     };
// });




const textarea = document.getElementById('textBox');
const container = document.querySelector('.divarea');
function syncwidth() {
    container.style.width = textarea.offsetWidth + 'px'
}
textarea.addEventListener('mousemove', syncwidth);
syncwidth();