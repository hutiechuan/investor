const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
var bcrypt = require("bcryptjs");
// Create and Save a new Tutorial
exports.signup = (req, res) => {
    
      // Create a Tutorial
      const user = {
        Email: req.body.email,
        Username: req.body.username,
        Password: bcrypt.hashSync(req.body.password, 8) 
      };

      User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      Username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send("User Not found.");
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.Password
      );

      if (!passwordIsValid) {
        return res.status(401).send("Invalid Password!");
      }

      res.status(200).send(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err.message);
    });
};


// exports.findAll = (req, res) => {
//     const email = req.query.email;
//     var condition = Email ? { Email: { [Op.iLike]: `%${email}%` } } : null;
//     User.findAll({ where: condition })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tutorials."
//         });
//       });
// 
// };


// exports.findOne = (req, res) => {
//     const email = req.params.email;
//     console.log("email is" + email)
//     const project = User.findOne({ where: { Email: email} });
//     console.log("project is" +project)

//     if (project == null) {
//       res.status(500).send({
//         message: "Error retrieving Email with = " + email
//       })
//     }
//     else{
//       res.send(data)
//     }

        // .then(data => {
        // if (data) {
        //     res.send(data);
        // } else {
        //     res.status(404).send({
        //     message: `Cannot find User with Email=${email}.`
        //     });
        // }
        // })
        // .catch(err => {
        // res.status(500).send({
        //     message: "Error retrieving Email with =" + email
        // });
        // });
// };
// Update a Tutorial by the id in the request

// exports.update = (req, res) => {
//     const email = req.params.Email;
//   Tutorial.update(req.body, {
//     where: { Email: email }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "User was updated successfully."
//         });
//       } else {
//         res.send({
//           message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Tutorial with id=" + id
//       });
//     });

  
// };
// Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;
//     Tutorial.destroy({
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Tutorial was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Tutorial with id=" + id
//       });
//     });
  
// };
// Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//     Tutorial.destroy({
//         where: {},
//         truncate: false
//       })
//         .then(nums => {
//           res.send({ message: `${nums} Tutorials were deleted successfully!` });
//         })
//         .catch(err => {
//           res.status(500).send({
//             message:
//               err.message || "Some error occurred while removing all tutorials."
//           });
//         });
  
// };
// Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//     Tutorial.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
  
// };