const express = require('express');
let members = require('../../Members') // .. outside api folder .. outside routes folder 
const uuid = require('uuid')



const router = express.Router()

// get all members
router.get('/', (req, res) => res.json(members))

// get a specific elem
router.get('/:id', (req, res) => {

    const found = members.some((member) => member.id === parseInt(req.params.id))
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `no member with the id of ${req.params.id}` })
    }
})



// router.post('/', (req, res) => {
//     res.send(req.body)
// })


//create a member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include a name and an email' })
    }

    members.push(newMember)
    res.json(members)

})


//update member 

router.put('/:id', (req, res) => {
    // chech to see if the member exists
    const found = members.some((member) => member.id === parseInt(req.params.id))
    if (found) {
        const updMember = req.body
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
                res.json({ msg: 'member updated', member })
            }
        })

    } else {
        res.status(400).json({ msg: `no member with the id of ${req.params.id}` })
    }
})

//Delete member

router.delete('/:id', (req, res) => {

    const found = members.some((member) => member.id === parseInt(req.params.id))
    if (found) {
        members = members.filter(member => member.id !== parseInt(req.params.id));
        res.json({ msg: 'Member deleted successfully', members });
    } else {
        res.status(400).json({ msg: `no member with the id of ${req.params.id}` })
    }
})


module.exports = router;