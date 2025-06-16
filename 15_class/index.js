const $addBtn = $('#addBtn');
const $container = $('#container');
$addBtn.on('click', function () {

    const $block = $('<div class="block"></div>');
    $block.css('background-color', getRandomColor());
    $('#container').append($block);
});



function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


$container.on('click', `.block`, function () {
    $(this).remove();
});



const $circleses = $('.circleses');
const $btn1 = $('#btn1');
let last = 0;
let count = 0;
$btn1.on('click', function () {
    $circleses.children().eq(last).css('backgroundColor', 'gainsboro');
    $circleses.children().eq(count).css('backgroundColor', count == 0 ? 'red' : count == 1 ? 'blue' : 'green');
    last = count;
    count++;
    if (count >= 3) {
        count = 0;
    }
});

