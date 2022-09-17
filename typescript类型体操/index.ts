// ?检测是否是number
// extends 关键字是用于判断 A 是否是 B 类型的。例子中传入的类型参数 T 是 1，是 number 类型，所以最终返回的是 true。
type isNumber<T> = T extends number ? boolean : string

let number: isNumber<1>

// ?泛型自动推导传入类型
// function foo<T>(params: T):T {
//     return params
// }

// const res = foo({
//     name: 123,
//     test: 456
// })

// console.log(res.name)

// ?使用typescript实现递归循环
// type createArray<Len, Ele, Arr extends Ele[] = []> = Arr['length'] extends Len ? Arr : createArray<Len, Ele, [Ele, ...Arr]>

// let foo: createArray<3, '1'>

// ?ts类型字符串操作
// 因为 str 符合 aaa, 的模式，所以能够匹配上，把右边的部分放入通过 infer 声明的局部类型变量里，之后取该局部变量的值返回。
// type a = 'aaa'
// type b = 'bbb'

// type str = `${a},${b}`

// type res = str extends `${infer test},${infer rest}` ? rest : never

// type initType<S, Str extends string> = S extends `${infer rest},${Str}` ? rest : never

// type test = initType<str, 'aaa'>

// ?ts操作对象
// 通过 keyof 取出 obj 的所有属性名，通过 in 遍历属性名并取对应的属性值，通过这些来生成新的对象类型 newObj。
// 我们过了一下常用的 ts 类型的语法，包括条件判断、循环（用递归实现）、字符串操作（构造字符串、取某部分子串）、对象操作（构造对象、取属性值）。接下来就用这些来做操吧。
// const foo = {
//     name: 123,
//     test: '456'
// }

// type Foo<O> = {
//     [key in keyof O]: O[key]  
// }

// type Foo = keyof typeof foo


// ?函数return怎么实现返回值推导
// function bar(params: string) {
//     return params
// }

// function foo<F>(Fn:F) {
//     return 
// }

// const newBar = foo(bar)


// ?ts测试
// type Foo = 'aaa' extends `${infer str}` ? str : never

// type TestInfer<S> = S extends `${infer L},${infer R}` ? `${R}-${L}` : S

// let foo:TestInfer<'a,c'>

// ?取出对象对应类型的值，把值组装成新的类型
type test = {
    a: 1,
    b: '2',
    c: 3
}

type filterNumberProp<O> = {
    [key in keyof O]: O[key] extends number ? O[key] : never
}[keyof O]

let foo: filterNumberProp<test>  = 1