const express = require("express")
const newsRouter = express.Router()
const axios = require("axios")

newsRouter.get('', async (req, res) => {
    try {
        // fetch data from MediaStack API
        const newsAPI = await axios.get("http://api.mediastack.com/v1/news?access_key=e84fed888c86577bbc6811fad09039c9&sources=en&countries=us,gb&sources=cnn,-bbc,business")
        //console.log(newsAPI.data)

        // transfer response to the news.ejs
        res.render("news", { article: newsAPI.data.data })
    } catch (error) {
        if (error.response) {
            console.log(error.response.data)
        } else if (error.request) {
            console.log(error.request)
        } else {
            console.log("Error", error.meeage)
        }
    }
})

module.exports = newsRouter;