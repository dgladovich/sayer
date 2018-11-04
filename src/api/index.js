const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

let comments = [],
    items = [
        {
            id: 1,
            title: 'Title 1',
            comments_count: 0
        }, {
            id: 2,
            title: 'Title 2',
            comments_count: 0
        }, {
            id: 3,
            title: 'Title 3',
            comments_count: 0
        }, {
            id: 4,
            title: 'Title 4',
            comments_count: 0
        },
    ];


function fetchItems() {
    return sleep(200).then(() => {
        return items;
    })
}

function fetchComments(itemID) {
    return sleep(200).then(() => {
        return comments.filter(comment => {
            return comment.parentId === itemID;
        });
    })
}

function addItem(itemPayload) {
    const item = {id: items.length + 1, comments_count: 0, ...itemPayload};
    items.push(item);
    return sleep(200).then(() => {
        console.log(itemPayload, item)
        return item;
    })
}

function addComment(commentObject) {
    const comment = Object.assign({}, {id: comments.length + 1}, commentObject);
    comments.push(comment);
    items = items.map((item)=>{
        return item.id === commentObject.parentId ? {...item, comments_count: item.comments_count + 1 } : item;
    });
    return sleep(200).then(() => {
        return comment;
    })
}

function deleteItem(id) {
    items = items.filter(item =>{
        return item.id !== id;
    });
    return sleep(200).then(() => {
        return true;
    })
}

export default {
    fetchItems,
    fetchComments,
    addItem,
    addComment,
    deleteItem,
}
