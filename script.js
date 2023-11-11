function areaOfTriangle(obj) {
    var a = 1*obj.st1.value;
    var b = 1*obj.st2.value;
    var c = 1*obj.st3.value;
    var p = (a+b+c)/2;
    var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    obj.res.value = s.toFixed(2);
}
areaOfTriangle(res);


function zad2(obj){
    var x1 = 1*obj.st1_2.value;
    var x2 = 1*obj.st2_2.value;
    var max = Math.max(x1,x2);
    var min = Math.min(x1,x2);
    var m = Math.random()*(max - min)+min;
    obj.result.value = m.toFixed(0);
 }
zad2(result);

function zad3(obj) {
    var a = 1*obj.st1_3.value;
    var b = 1*obj.st2_3.value;
    var c = 1*obj.st3_3.value;
    var discriminant = Math.pow(b, 2) - 4 * a * c;
    
    if (discriminant > 0) {
    var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    obj.result2.value = x1.toFixed(0);
    obj.result3.value = x2.toFixed(0);
    } else if (discriminant === 0) {
    var x = -b / (2 * a);
    obj.result2.value = x.toFixed(0);
    } else {
        obj.result2.value = "Решения нет";
    }
    }
zad3(result2);



function math1(obj) {
    var a = 1*obj.tra.value;
    var b = 1*obj.trb.value;
    var s = a*b;
    obj.plo.value = s.toFixed(1);
}
math1(res);

function math2(obj) {
    var a = 7;
    var b = -3;
    var c = 10;            var d = 23;
    var e = -100;
    var i = 0;
    var f = 55;
    maxnumber = Math.max(a,b,c,d,e,i,f);
    minnumber = Math.min(a,b,c,d,e,i,f);
    obj.max.value = maxnumber;
    obj.min.value = minnumber;
}
math2(obj);

function math3(obj) {
    var S = 1*obj.stoimost.value;
    var n = 12*obj.priod.value;
    var p = 1*obj.stavka.value/12/100;
   // var A = S*() P = (i * A) / (1 - (1 + i)^(-n))
    var A = S*p/(1-Math.pow((1+p),-n));
    var P = (S * p) / (1 - Math.pow(1 + p, -n));
    obj.plat.value = A.toFixed(1);
}
math3(obj);