const {getItems, getItem, addItem, deleteItem, updateItem} = require('../controllers/itemsController')

// item schema 
const item = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        name: { type: 'string'}
    }
}





// options for get all items
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: item
            }
        }
    },
    handler: getItems
}
// options for get single item
const getItemOpts = {
    schema:{
        response: {
        200: item
        }
    },
    handler: getItem
}
// options for add items
const postItemOpts = {
    schema:{
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: {type: 'string'}
            }
        },
        response: {
        201: item
        }
    },
    handler: addItem
}
// options for delete single item
const deleteItemOpts = {
    schema:{
        response: {
            200: {
                type: 'object',
                properties: {
                    message: {type: 'string'}
                }
            }
        }
    },
    handler: deleteItem
}
// options for update single items
// options for get single item
const updateItemOpts = {
    schema:{
        response: {
        200: item
        }
    },
    handler: updateItem
}







function itemRoutes (fastify, options, done){
    //  GET ALL ITEMS
    fastify.get('/items', getItemsOpts,)
    
    // GET SINGLE ITEMS
    fastify.get('/items/:id', getItemOpts,)

    // ADD ITEM
    fastify.post('/items', postItemOpts)

    // DELETE ITEM
    fastify.delete('/items/:id', deleteItemOpts)

    // UPDATE ITEM
    fastify.put('/items/:id', updateItemOpts)

    done()
}

module.exports = itemRoutes