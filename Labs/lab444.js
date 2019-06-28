let panelBodies = document.querySelectorAll('.panel .panel');
panelBodies.forEach(function (panel) {
    //Add button
    let heading = panel.querySelector('.panel-heading');
    let ul = document.createElement('ul');
    ul.classList.add('actions');
    ul.style.display = 'none';
    let menu = ['Delete', 'Edit'];
    for (let i = 0; i < menu.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.innerHTML = menu[i];
        li.onclick = function () {
            if (i === 0) {
                panel.remove();
            }
        };
        li.appendChild(a);
        ul.appendChild(li);
    }
    let btn = document.createElement('input');
    btn.type = 'button';
    btn.value = '...';
    btn.classList.add('pull-right');
    btn.onclick = function () {
        if (ul.style.display === 'none') {
            ul.style.display = 'block';
        } else {
            ul.style.display = 'none';
        }

    };

    heading.appendChild(ul);
    heading.appendChild(btn);


    //Cut text
    let panelBody = panel.querySelector('.panel-body');
    if (panelBody.textContent.length > 50) {
        let part1 = panelBody.textContent.slice(0, 51);
        let part2 = panelBody.textContent.slice(51);

        panelBody.style.cursor = 'pointer';
        panelBody.innerHTML = part1 + '<span class="dots">...</span><span class="more">' + part2 + '</span>';
        panelBody.querySelector('.more').style.display = 'none';
        panelBody.querySelector('.dots').style.display = 'inline-block';
    } else {
        return;
    }


    panelBody.addEventListener('click', function () {
        let self = event.currentTarget;
        let more = self.querySelector('.more');
        let dots = self.querySelector('.dots');

        if (!more || !dots) {
            return;
        }

        if (more.style.display === 'none') {
            more.style.display = 'inline-block';
        } else {
            more.style.display = 'none';
        }

        if (dots.style.display === 'none') {
            dots.style.display = 'inline-block';
        } else {
            dots.style.display = 'none';
        }

    });


});