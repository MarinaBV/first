// let tooglers = document.querySelectorAll('#list li > a');
//
//
// for (let i = 0; i < tooglers.length; i++) {
//     let self = tooglers[i];
//     self.addEventListener('click', function (event) {
//         event.preventDefault();
//         const element = event.target;
//
//         const target = element.parentNode.querySelector('ul');
//
//         if (target.style.display !== 'none') {
//             target.style.display = 'none';
//         } else {
//             target.style.display = 'block';
//         }
//     });
// }

"use strict";

var tooglers = document.querySelectorAll('#list li > a');
hideLists();

tooglers.forEach(function (element) {

    console.log(element);

    element.addEventListener('click', function (event) {
        event.preventDefault();
        hideLists(this);

        var a = event.target;
        var child = a.parentNode.querySelector('ul');

        if (child.style.display === 'none') {
            child.style.display = 'block';
        } else {
            child.style.display = 'none';
        }
    })
});

function hideLists(current) {
    var childLists = document.querySelectorAll('#list li > a + ul');
    childLists.forEach(function (element) {

        if (current && current.nextElementSibling.innerHTML === element.innerHTML) {
            return;
        }

        element.style.display = 'none';
    });
}

