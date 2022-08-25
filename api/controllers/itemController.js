import Item from '../models/itemModel.js'

// @DESC Add a new item
// @ROUTE   api/items/createItem
// @ACCESS  public

export const addItem = async (req, res) => {
    const newItem = new Item({
        ...req.body
    })
    try {
        const savedItem = await newItem.save()
        res.status(201).json(savedItem)
    } catch (error) {
        return res.json({ message: "Something went wrong" })
    }
}

// @DESC    get all items
// @ROUTE   api/items/allItems
// @ACCESS  public

export const allItems = async (req, res) => {
    const items = await Item.find()
    res.json(items).status(200)
}

// @DESC    update an item
// @ROUTE   api/items/updateItem
// @ACCESS  public

export const updateItem = async (req, res) => {

}

// @DESC    delete an item
// @ROUTE   api/items/deleteItem
// @ACCESS  public

export const deleteItem = async (req, res) => {
    const item = await Item.findByIdAndDelete(req.params.id)
    res.json(item)
}


// export const searchItem = async (req, res) => {
//     const search = req.query
//     const query = search.query
//     const items = await Item.find({ $or: [{ name: query }, { category: query }] })
//     res.json(items).status(200)
// }
export const searchItem = async (req, res) => {
    const search = req.query
    const query = search.query
    const items = await Item.find({ $or: [{ name: { "$regex": query, "$options": "i" } }, { category: query }] })
    res.json(items).status(200)
}
