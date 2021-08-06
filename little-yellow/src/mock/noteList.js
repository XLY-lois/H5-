import Mock from "mockjs";

var result = Mock.mock({
    'noteList|10':[{
        'title':'@cword(3, 5)',
        'content':'@cparagraph(1, 3)',
        'color':'@color'
    }]
})
export default result