var app = {
    panelBodies: null,
    panelActionsItems: [
        {
            tag: 'a',
            action: function (self) {
                var panel = self.closest('.panel');
                panel.remove();
            },
            text: 'Delete',
            href: '#'
        },
        {
            tag: 'a',
            action: 'ttt',
            text: 'Edit',
            href: '#'
        }
    ],

    init: function () {
        this.panelBodies = document.querySelectorAll('.panel .panel');
        this.hideText();
        this.createPanelElements();
        this.addEventListeners();
    },

    addEventListeners: function () {
        var _this = this;
        this.panelBodies.forEach(function (panel) {
            var actionsBtn = panel.querySelector('.btn-actions');
            actionsBtn.addEventListener('click', function () {
                var actions = this.parentNode.querySelector('.actions');
                if (actions.style.display === 'none') {
                    actions.style.display = 'block';
                } else {
                    actions.style.display = 'none';
                }

            });

            var actionsList = panel.querySelector('.actions a');

            actionsList.addEventListener('click', function (event) {
                event.preventDefault();

                var idx = this.getAttribute('data-index');

                _this.panelActionsItems[idx].action(this);
            });
        });
    },
    createPanelElements: function () {
        var _this = this;
        this.panelBodies.forEach(function (panel) {
            var heading = panel.querySelector('.panel-heading');
            var ul = document.createElement('ul');
            ul.classList.add('actions');
            ul.style.display = 'none';

            for (var i = 0; i < _this.panelActionsItems.length; i++) {
                var self = _this.panelActionsItems[i];
                var li = document.createElement('li');
                var a = document.createElement(self.tag);
                var txt = document.createTextNode(self.text);
                a.setAttribute('href', self.href);
                a.setAttribute('data-index', i);
                a.appendChild(txt);
                li.appendChild(a);
                ul.appendChild(li);
            }

            var btn = document.createElement('input');
            btn.type = 'button';
            btn.value = '...';
            btn.classList.add('pull-right', 'btn-actions');
            heading.appendChild(ul);
            heading.appendChild(btn);
        });
    },
    hideText: function () {
        this.panelBodies.forEach(function (panel) {
            let $panelBody = jQuery('.panel-body', jQuery(panel));
            let text = $panelBody.text();
            if (text.length > 50) {
                let part1 = text.slice(0, 51);
                let part2 = text.slice(51);

                $panelBody.css( 'cursor', 'pointer');
                $panelBody.html(part1 + '<span class="dots">...</span><span class="more">' + part2 + '</span>');
                
                $('.more', $panelBody).css('display', 'none');
                $('.dots', $panelBody).css('display', 'block');
            } else {
                return;
            }
            
            $panelBody[0].addEventListener('click', function () {
                let self = event.currentTarget;
                let more = self.querySelector('.more');
                let dots = self.querySelector('.dots');

                if (!more || !dots) {
                    return;
                }

                if (more.style.display === 'none' || dots.style.display === 'none') {
                    more.style.display = 'inline-block';
                    dots.style.display = 'inline-block';
                } else {
                    more.style.display = 'none';
                    dots.style.display = 'inline-block';
                }


            });
        });

    }

};
app.init();


//
/*
 var $heading = jQuery('.panel-heading');
 var $children = $heading.find('li');
 var $filter = $heading.filter(function ($idx, $elem) {
 var $self = jQuery(this);
 return $self.text() === 'To Do' ? true : false;
 });
 console.log($filter.html(function (index, value) {
 return 'NEW' + value;
 }));*/

var $heading1 = jQuery('.panel-heading').eq(1);
var $heading2 = jQuery('.panel-heading').eq(2);

var $total = $heading1.add($heading2);

var $heading1 = jQuery('.panel-heading').eq(0).attr('data-test', function (i, t) {
    return 'Yoooo' + t;
});

