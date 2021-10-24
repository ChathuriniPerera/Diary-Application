const sql = require("../db");
const bcrypt = require("bcrypt");

function Newnote(newnote) {
    this.id = newnote.id;
    this.title = newnote.title;
    this.description = newnote.description;
    this.delete_status = newnote.delete_status;
};

Newnote.create = (newnote, result) => {
    sql.query("INSERT INTO diary_note SET?", newnote, (err, res) => {
        if (err) {
            console.log("Error:", err);
            result(err, null);
            return;
        }
        console.log("Created Newnote:", { ...res });
        result(null, { ...res, data: { ...newnote } });
    });
};

Newnote.updateNewNote = (newnote, result) => {
    sql.query(`UPDATE diary_note SET title="${newnote.title}", description="${newnote.description}"  WHERE id="${newnote.id}" `, (err, res) => {
        if (err) {
            console.log("Error:", err);
            result(err, null);
            return;
        }
        if (res) { 
            result(null, res);
            return;
        }
        result({ kind: "diary updated..."}, null);
    });
};

module.exports = Newnote;