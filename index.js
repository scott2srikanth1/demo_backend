const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const cors = require("cors")
//const compression = require('compression');
//const helmet = require('helmet');

//const app = express()

// Connect to MongoDB database
mongoose
	.connect("mongodb+srv://srikanth:S*s005010@cluster0.8h2mr.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {
		const app = express()
		//app.use(helmet());
		//app.use(compression());
		app.use(cors())
        app.use(express.json())
        app.use("/api", routes)

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})