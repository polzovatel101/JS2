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
        question1: 'Вопрос №1',
        question2: 'Вопрос №2',
        question3: 'Вопрос №3',
        answer1: 'Вариант ответа №1',
        answer2: 'Вариант ответа №2',
        answer3: 'Вариант ответа №3'
    },

    createTreeText: function (obj) {
        var li = '';
        var container = document.querySelector('body');
        container.innerHTML += '<h2>' + 'Тест по программированию' + '</h2>' + '\n' + '<form>';
        //for(var i = 1; i <= 3; i++)
        //{
            container.innerHTML += '<ul>' + obj.question1 + '</ul>';
            //for(var j = 1; j <= 3; j++)
            //{
                container.innerHTML += '<li>' + '<label>' + '<input>' + obj.answer1 + '</input>' + '</label>' + '</li>' + '</label>';
                container.innerHTML += '<li>' + '<label>' + '<input>' + obj.answer2 + '</input>' + '</label>' + '</li>' + '</label>';
                container.innerHTML += '<li>' + '<label>' + '<input>' + obj.answer3 + '</input>' + '</label>' + '</li>' + '</label>';
            //}

        container.innerHTML += '<ul>' + obj.question2 + '</ul>';
        //for(var j = 1; j <= 3; j++)
        //{
        container.innerHTML += '<li>' + '<label>' + '<input>' + obj.answer1 + '</input>' + '</label>' + '</li>' + '</label>';
        container.innerHTML += '<li>' + '<label>' + '<input>' + obj.answer2 + '</input>' + '</label>' + '</li>' + '</label>';
        container.innerHTML += '<li>' + '<label>' + '<input>' + obj.answer3 + '</input>' + '</label>' + '</li>' + '</label>';
        //}
        container.innerHTML += '<ul>' + obj.question3 + '</ul>';
        //for(var j = 1; j <= 3; j++)
        //{
        container.innerHTML += '<li>' + '<label>' + '<input>' + obj.answer1 + '</input>' + '</label>' + '</li>' + '</label>';
        container.innerHTML += '<li>' + '<label>' + '<input>' + obj.answer2 + '</input>' + '</label>' + '</li>' + '</label>';
        container.innerHTML += '<li>' + '<label>' + '<input>' + obj.answer3 + '</input>' + '</label>' + '</li>' + '</label>';
        //}
        //}
        container.innerHTML += '<button>' + 'Проверить мои результаты' + '</button>' + '\n' + '</form>';
        var input = document.querySelectorAll('input');
        console.log(input);
        for(var i = 0; i < input.length; i++){
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