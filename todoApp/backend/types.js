const zod = require('zod')

const Todo = zod.object({
    title:zod.string(),
    description:zod.string()
})

module.exports=Todo