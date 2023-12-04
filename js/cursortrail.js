let cursorInterval;
let cursorElements = [];

document.addEventListener('mousemove', function(e) {
    let cursor = document.createElement('div');
    cursor.style.position = 'absolute';
    cursor.style.height = '20px';
    cursor.style.width = '20px';
    cursor.style.backgroundImage = 'url(/img/cursor.png)';
    cursor.style.backgroundSize = '20px 20px';
    cursor.style.top = `${e.pageY}px`;
    cursor.style.left = `${e.pageX}px`;
    cursor.style.pointerEvents = 'none';
    cursor.style.opacity = 1;
    cursor.style.transition = 'opacity 0.5s';
    document.body.appendChild(cursor);
    cursorElements.push(cursor);

    setTimeout(function() {
        cursor.style.opacity = 0;
        setTimeout(function() {
            cursor.remove();
        }, 500);
    }, 100);
});
