// 弹出警告框
// alert('晚安');
// 要求用户输入
// prompt('请告诉我你是谁?');
// 控制台输出
// console.log('仅你可见');
//var xxx  代表声明某个变量,xxx是自行命名的变量名
/* var a;
a = 99;
console.log(a); */
/* var a = prompt('输入你的姓名:');
var b = prompt('输入你的年龄:');
var c = prompt('你的电子邮箱是?');
var d = prompt('你的家庭住址是?');
var e = prompt('你的工资是?');
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e); */
/* var a =prompt('请输入您的姓名:');
alert(a); */
/* var a = 10;
var b = 99;
alert('开始时a的值:' + a);
alert('开始时b的值:' + b);
alert('执行交换......');
alert('交换完成');                              
var c;
c = a;
a = b;                                        
b = c;
alert('交换后a的值:' + a);
alert('交换后b的值:' + b); */
//isNan()函数用于检查其参数是否是非数字值,是返回false,否则返回true  NaN是非数字值
/* console.log(isNaN(123)); //false
console.log(isNaN('123')); //True */
//检测字符串的长度:length
/* var a = 'hello';
console.log(a.length); *///5
/* var a = prompt('请输入你的年龄:');
alert('您今年' + a + '岁了'); */
//typeof用来检测数据变量的类型
// console.log(typeof a);//number
//prompt取来的数据类型是字符型
//把数字型转换成字符串型
//var a = 10;
//var  = num.toString();
//console.log(String(num));
//利用"+"拼接字符串也可以实现将数字型变成字符型 console.log(num + '')

/*强制将字符串类型转为数字类型：
var a =prompt('输入你的年龄：')
这里得到的a为字符型的，有多种方法将字符串转化为数字类型
parseInt：parseInt(a),但是只能转换为整数，还可以将像素单位px舍弃只保留数值，例如parseInt('120px')输出的就是120
注意：parseInt后面的Int表示整数，如果改成Float就变成浮点数了

number：number(a);

隐式转换：用字符型加减乘除数字就会转换，顺序可以相反*/

/*把其他类型转换成布尔型
Boolean：Boolean()  括号中如果是代表空的无的例如：0 NaN null undefined 会被转换为false
                               其余任何值都会转换为：true*/

 /*var a = prompt('请输入你的出生年份：');
var b = 2025 - a;
alert('你今年：' + b + '岁了');*/
/*var a = prompt('第一个值是？');
var b = prompt('第二个值是？');
var c = Number(a) + Number(b);
alert('结果为：' + c)*/
/* var a = prompt('请输入姓名');
var b = prompt('请输入年龄');
var c = prompt('请输入性别');
alert('姓名：' + a + '\n年龄：' + b + '\n性别：' + c) */

/* 假设有一个变量a
++a就是先自增再计算，a++就是先计算再自增 */

//比较运算符和java一样，==不比较数据类型，会自动转换数据类型，===则全比较要求全等

// ||（逻辑与）：两边真才真
// &&（逻辑或）：有真就真
// ！（逻辑非）：！true = false；！false = true
//逻辑中断：
//&&：123 && 456中123为表达式1；456为表达式2，如果表达式1为真则返回表达式2（123有值为真，0才是假）
//    0 && 456中表达式1为假，则输出表达式2

//||：和上面&&正好相反

/* var a = prompt('输入年龄：')
if(Number(a) >= 18){
    alert('进去吧')
}else if(Number(a) < 18){
    alert('滚出去')
} */

/* var a = prompt('今夕是何年')
if(a % 4 == 0 && a % 100 != 0){
    alert('闰年')
}else if(a % 400 == 0){
    alert('闰年')
}else{
    alert('平年')
} */
var a = prompt('数字')
alert(Number(a))