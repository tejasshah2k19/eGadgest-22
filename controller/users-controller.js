

function signup(req, res) {

    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    let gender = req.body.gender

    console.log(firstName);
    console.log(gender);


    let user = {
        "firstName": firstName,
        "email": email,
        "gender": gender
    }


    if (firstName.length < 3) {
        res.json({ status: -1, msg: "Please Enter valid firstname", data: user }) 
    } else {
        res.json({ status: 200, msg: "user save", data: user })
    }
}

module.exports.signup = signup 