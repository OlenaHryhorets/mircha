//ES6
{
    function fo () { return 1; }
    fo() === 1;
    {
        function fo () { return 2; }
        fo() === 2;
    }
    console.log(fo() === 1);
}
//  only in ES5 with the help of block-scope emulating
//  function scopes and function expressions
(function () {
    var foo = function () { return 1; };
    foo() === 1;
    (function () {
        var foo = function () { return 2; };
        foo() === 2;
    })();
    console.log(foo() === 1);
})();
