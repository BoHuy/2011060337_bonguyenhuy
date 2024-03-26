// Tính tổng của 2 tham số, mặc định là 0 nếu một hoặc cả hai tham số không được định nghĩa
// Khai báo truyền thống
function sum(a, b) {
    a = (typeof a !== 'undefined') ? a : 0;
    b = (typeof b !== 'undefined') ? b : 0;
    return a + b;
}

// Khai báo gán biến
var sum2 = function(a, b) {
    a = (typeof a !== 'undefined') ? a : 0;
    b = (typeof b !== 'undefined') ? b : 0;
    return a + b;
};

// Arrow function
var sum3 = (a, b) => (a !== undefined ? a : 0) + (b !== undefined ? b : 0);

//In ra tất cả các tham số truyền vào
// Khai báo truyền thống
function printArguments() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

// Khai báo gán biến
var printArguments2 = function() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
};

// Arrow function
var printArguments3 = () => {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
};

//In ra ID của tất cả các phần tử của mảng được truyền vào
// Khai báo truyền thống
function printArrayIds(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].id);
    }
}

// Khai báo gán biến
var printArrayIds2 = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].id);
    }
};

// Arrow function
var printArrayIds3 = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].id);
    }
};

//In ra giá trị của tất cả các phần tử trong mảng được truyền vào
// Khai báo truyền thống
function printArrayValues(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Khai báo gán biến
var printArrayValues2 = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

// Arrow function
var printArrayValues3 = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

