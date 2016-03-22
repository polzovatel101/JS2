/**
 * Created by Илья Яновой on 18.03.2016.
 */

'use strict';
var Tests = {
    init: function () {
        console.log('test');
        this.createTreeText(this.test);
    },

    test: {
        question: 'Вопрос №',
        answer: 'Вариант ответа №'
    },

    createTreeText: function (obj) {
        var li = '';
        var container = document.querySelector('body');
        container.innerHTML += '<h2>' + 'Тест по программированию' + '</h2>' + '\n' + '<form>';
        for(var i = 1; i <= 3; i++)
        {
            container.innerHTML += '<ul>' + obj.question + i + '</ul>';
            for(var j = 1; j <= 3; j++)
            {
                container.innerHTML += '<li>' + '<label>' + '<input>' + obj.answer + j + '</input>' + '</label>' + '</li>' + '</label>';
            }
        }
        container.innerHTML += '<button>' + 'Проверить мои результаты' + '</button>' + '\n' + '</form>';
        var input = document.querySelectorAll('input');
        console.log(input);
        for(i = 0; i < input.length; i++){
            input[i].type = 'checkbox';
        }
        var button = document.querySelector('button');
        button.className = 'btn btn-info';
        li = document.querySelectorAll('li');
        for(i = 0; i <li.length; i++) {
            li[i].className = 'list';
        }
    }
};

Tests.init();