Example 1:
You created a great function which creates and array, but the format is wrong:

    [['Name', 'Joe', 'Mary', 'Leon'],
    ['E-mail', 'joe@test.com', 'mary@test.com', 'leon@test.com']];

You need it in a different format:

    [ [ 'Name', 'E-mail' ],
    [ 'Joe', 'joe@test.com' ],
    [ 'Mary', 'mary@test.com' ],
    [ 'Leon', 'leon@test.com' ] ]

Import the pivotArray(arr) function, and it will do it.
