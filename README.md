# ВАЖНО
Исходные данные компаний достаются с помощью json-server, на деплое он не работает, нужно запускать локально чтобы данные отгружались.
Остались вопросы? Напишите мне в [телеграм](https://t.me/freddypopa1)



# Тестовое задание в Адепт

Deploy - [deploy](https://artemvasilencko.github.io/adept-test/)

### Используемые технологии:

```
сборщик vite, TypeScript, React, ReduxToolKit, json-server
```

## Для того чтобы запустить приложение локально необходимо пройти 3 этапа

1. Склонировать репозиторий:

```sh 
git clone git@github.com:ArtemVasilencko/adept-test.git
```

2. Перейти в директорию склонированного репозитория и запустить установку зависимостей:

```sh
npm i
```

3. Запустить приложение (запуск json-server и сборка vite)

```sh
npm start
```

### Команда для создания итоговой сборки

```sh
npm run build
```

## ЗАДАНИЕ

1. Создаить одностраничное приложение “Список компаний”, используя библиотеку React.js.

## Дано 
1. Слева имеется таблица со списком компаний. Справа - таблица сотрудников выбранной компании. Данные в таблицах должны храниться в сторе.
2. Данные для таблиц "компании" и "сотрудники" - фейковые, создать самостоятельно.
3. Шапка таблицы "компании": Чекбокс “Выделить всё”
   Тело таблицы имеет столбцы: | Чекбокс | Название компании | Кол-во сотрудников | Адрес
4. При клике по чекбоксу в строке, соответствующая строка выделяется цветом на ваше усмотрение. При клике по чекбоксу “Выделить всё” - выделяются все строки.

## Требования 
react, redux(redux-toolkit), typescript, остальное на ваше усмотрение, НО стоит использовать минимальное кол-во библиотек(например, таблицу нужно точно сделать самостоятельно, без сторонних библиотек)




