let str = 'Hello';

str.test = 5;

alert(str.test);

// Не сработает потому что у объекта-обёртки примитива нету метода test
