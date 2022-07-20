const fs = require("fs");

let store = class {
	constructor(id) {
		this.id = id;
	}

	findTodo() {
		fs.readFile("data.json", "utf-8", (err, data) => {
			if (err) {
				console.log(err);
			}
			data = JSON.parse(data);
			let targetTodoId = "";
			for (let i = 0; i < data.length; i++) {
				if (data[i].id === parseInt(this.id)) {
					targetTodoId = i;
				}
			}
			console.log(data[targetTodoId]);
		});
	}

    getTodos() {
        fs.readFile("data.json", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(JSON.parse(data));
        })
    }
};


module.exports = {
	store,
};
