// function check(event) {
//
//     const form = event.target;
//
//     if (!form.elements.name.value) {
//         alert('Введите имя');
//         event.preventDefault();
//         return;
//     }
//     if (!form.elements.name.value.match(/[a-zA-Zа-яА-ЯёЁ]{3,15}/)) {
//         alert('Поле имя должно содержать только буквы от 3 символов до 15');
//         event.preventDefault();
//         return;
//     }
//
//     if (!form.elements.age.value) {
//         alert('Введите возраст');
//         event.preventDefault();
//         return;
//     }
//     if (!form.elements.age.value.match(/[0-9]/)) {
//         alert('Поле возраст должно содержать только цифры');
//         event.preventDefault();
//         return;
//     }
//     if (form.elements.age.value < 10 || form.elements.age.value > 99) {
//         alert('Возраст должен быть от 10 до 99 лет');
//         event.preventDefault();
//         return;
//     }
//
//     if (!form.elements.admin.checked) {
//         alert('Установите флаг "админ" ');
//         event.preventDefault();
//         return;
//     }
//
// }
//
// function act(type) {
//     let q = document.getElementById('opt_name').value;
//     let select = document.getElementById('gender');
//     for (let i = 0; i < select.length; i++) {
//         if (q === select[i].value) {
//             type = select.remove(select[i].index)
//         }
//     }
//
// }
//
// function createTable() {
//     let data = ['aaa','bbb','ccc','ddd','eee','fff','jjj','hhh'];
//     let index = 0;
//     let body = document.getElementsByTagName('body')[0];
//     let table = document.createElement('table');
//     table.style.width = '10%';
//     table.setAttribute('border', '1');
//     let tbody = document.createElement('tbody');
//     for (let i = 0; i < 2; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < 4; j++) {
//             if (i === 3 && j === 1) {
//                 break
//             } else {
//                 let td = document.createElement('td');
//                 td.innerHTML = data[index];
//
//                 index++;
//
//                 tr.appendChild(td);
//             }
//         }
//         tbody.appendChild(tr);
//
//     }
//     table.appendChild(tbody);
//     body.appendChild(table)
//
// }
// // function createTable() {
// //
// //     let data = new Array('aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'jjj', 'hhh');
// //     let index = 0;
// //
// //     const body = document.getElementById('body');
// //
// //     const table = document.createElement('table');
// //     table.setAttribute('border', '1');
// //
// // //document.write('<table border="1" >');
// //     for (let i = 0; i < 2; i++) {
// //         const row = document.createElement('tr');
// //         //document.write('<tr>');
// //         for (let j = 0; j < 4; j++) {
// //             //document.write('<td>'+data[index]+'</td>');
// //             const td = document.createElement('td');
// //             td.innerHTML = data[index];
// //             row.appendChild(td);
// //             index++;
// //         }
// //         table.appendChild(row);
// //         //document.write('</tr>');
// //     }
// //     body.appendChild(table);
// // //document.write('</table>');
// // }
// //

function isDescendant(parent, child) {
    let node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}



function addElement() {
    let input = document.getElementById('opt_name');
    let list = document.getElementById('list');
    let list2 = document.getElementById('list2');
    let text = document.createTextNode(input.value);

    if (!input.value) {
        return;
    }
    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.innerHTML = '-';
    btn.style.marginLeft = '10px';
    btn.addEventListener('click', function (event) {
        const e = event.target;
        e.parentNode.remove();
    })
    let btnReplace = document.createElement('button');
    btnReplace.innerHTML = '=>';
    btnReplace.style.marginLeft = '10px';
    btnReplace.addEventListener('click', function (event) {
        const e = event.target;
        if (isDescendant(list,e)) {
            btnReplace.innerHTML = '<=';
            list2.appendChild(e.parentNode);
        } else {
            btnReplace.innerHTML = '=>';
            list.appendChild(e.parentNode);
        }

    })
    li.appendChild(text);
    li.appendChild(btn);
    li.appendChild(btnReplace);
    list.appendChild(li);
    input.value = '';


}
let addElemBtn = document.getElementById('add-element');
console.log(document);
addElemBtn.addEventListener('click', addElement);