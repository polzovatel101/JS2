/**
 * Created by Илья Яновой on 18.03.2016.
 */

'use strict';
var Tests = {
    init: function () {
        console.log('test');
        this.createTreeText(this.questions, this.answer);
    },

    questions: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],

    answer: [
        ['Вариант ответа №11', 'Вариант ответа №21', 'Вариант ответа №31'],
        ['Вариант ответа №12', 'Вариант ответа №22', 'Вариант ответа №32'],
        ['Вариант ответа №13', 'Вариант ответа №23', 'Вариант ответа №33']
    ] ,

    createTreeText: function (question, answer) {
        var container = document.querySelector('body');
        container.innerHTML += '<h2>' + 'Тест по программированию' + '</h2>' + '\n' + '<form>';
        for(var i = 0; i < question.length; i++) {
            container.innerHTML += '<ul>' + question[i] + '</ul>';
            var ul = document.querySelectorAll('ul');
            for (var j = 0; j < answer.length; j++) {
                ul[i].innerHTML += '<li>' + '<label>' + '<input>' + answer[i][j] + '</input>' + '</label>' + '</li>';
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
        var li = document.querySelectorAll('li');
        for(i = 0; i <li.length; i++) {
            li[i].className = 'list';
        }
    }
};

Tests.init();
console.log(Tests.answer[0]);