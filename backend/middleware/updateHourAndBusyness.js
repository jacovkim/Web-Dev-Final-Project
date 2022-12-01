const Library = require("../models/Library")
const fetch = require("node-fetch")

module.exports = async function(req, res, next){
    let now = new Date().getHours()
    let libs = await Library.find({})
    if (now == libs[0].current_hour && libs[0].busyness_info != null) {
        next()
        return
    } else {
        libs.forEach(async function(library) {
            let busy_info = await fetch(`http://localhost:3000/busyness?libname=${library.name}`).then(res => res.json())
            let open_time = library.open_time
            let close_time = library.close_time
            let current = now
            if (close_time < open_time) close_time += 24
            if (current >= library.open_time && current < library.close_time) { // Ex: open = 8, close 6,  now = 7 => now = 0
                current = 1  // Is open                                   // Ex: open = 8, close 22, now = 23 => now = 0
            } else {
                current = 0 // Is close
            }
            await Library.updateOne({name: library.name}, {$set:{current_hour: now, busyness_info: busy_info, is_open: current}})
        })
        next()
        return 
    }
}