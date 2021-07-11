const data = require("../assets/data");

exports.handler = async (event, context) => {
    console.log(data)
    return {
        statusCode: 200,
        body: JSON.stringify(data),
    }
}
