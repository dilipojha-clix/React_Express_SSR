

import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer'
import createStore from "./helpers/createStore"

const app = express()
app.use(express.static('public'))

app.get("*",(req,res)=>{
    /* some logic is initialize and load data into store */
    const store = createStore();
    /* here render react  */
    res.send(renderer(req,store))
});
;
app.listen(3000,()=>{
    console.log("Listing server 3000");
})